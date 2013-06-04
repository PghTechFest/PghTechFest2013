using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

using System.Reactive.Linq;
using System.Collections;

namespace PghTechFest.Rx.StocksApp
{
    public class StocksViewModel : INotifyPropertyChanged
    {
        private StocksService.SlowStockService _Service = new StocksService.SlowStockService();

        public StocksViewModel()
        {
            TickerList = new ObservableCollection<StockViewModel>();
            MyWatchList = new ObservableCollection<StockViewModel>();
            SeedMyList();

            EvenBetterObservableThing();
        }

        public ObservableCollection<StockViewModel> TickerList { get; set; }
        public ObservableCollection<StockViewModel> MyWatchList { get; set; }
        private List<String> MyWatchListSymbols = new List<string>();

        bool _IsLoading = false;
        public bool IsLoading { get { return _IsLoading; } set { _IsLoading = value; OnPropertyChanged(); } }


        // Load stocks the loooong way...
        // Method has several reasons to change:
        // 1. What if the service model class (Stock) changes?
        // 2. What if the service method changes?
        // 3. What if the logic for adding to the ticker list changes?
        // 4. What if the logic for adding the My Watch List changes?
        public async Task LoadStocksEnumerable()
        {
            this.IsLoading = true;
            var stocks = await _Service.GetAllStocks();

            foreach (var stock in stocks)
            {
                StockViewModel svm = new StockViewModel(stock);
                TickerList.Add(svm);
                if (MyWatchListSymbols.Contains(svm.Symbol)) MyWatchList.Add(svm);
            }

            this.IsLoading = false;
        }

        private async Task ObservableThing()
        {
            this.IsLoading = true;

            var stockdata = await _Service.GetAllStocks();
            AttachMyStuffToObsv(stockdata.ToObservable());

            this.IsLoading = false;
        }

        private async void EvenBetterObservableThing()
        {
            this.IsLoading = true;

            AttachMyStuffToObsv(_Service.StockSubject);
            await _Service.StartGettingStocks();

            this.IsLoading = false;
        }
        private void AttachMyStuffToObsv(IObservable<StocksService.Stock> stockdata) 
        {

            var obsv = stockdata.
                Select(st => new StockViewModel(st));

            obsv.Subscribe(st =>
            {
                this.TickerList.Add(st);
            });

            obsv.Where(svm => MyWatchListSymbols.Contains(svm.Symbol)).
                Subscribe(svm => MyWatchList.Add(svm));

        
        }


        private void SeedMyList()
        {
            MyWatchListSymbols.Add("FB");
            MyWatchListSymbols.Add("MSFT");
            MyWatchListSymbols.Add("SIRI");
            MyWatchListSymbols.Add("AMD");
            MyWatchListSymbols.Add("JAZZ");

        }


        #region [ INotifyPropertyChanged ]
        
        public event PropertyChangedEventHandler PropertyChanged;
        private void OnPropertyChanged([CallerMemberName] string propertyName = "")
        {
            if (PropertyChanged != null) PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }

        #endregion
    }
}
