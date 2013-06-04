using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;

namespace PghTechFest.Rx.StocksApp
{
    public class StockViewModel : INotifyPropertyChanged
    {
        private StocksService.Stock _Stock;

        public StockViewModel(StocksService.Stock stock)
        {
            _Stock = stock;
        }

        public string Symbol { get { return _Stock.Symbol;  } }
        public string Name { get { return _Stock.Name; } }
        public string CurrentQuote { get { return _Stock.CurrentQuote;  } }

        public string ChangeAmount { get { return _Stock.ChangeAmount;  } }
        public string ChangePercent { get { return _Stock.ChangePercent; } }


        public event PropertyChangedEventHandler PropertyChanged;
        private void OnPropertyChanged([CallerMemberName] string propName = "")
        {
            if (PropertyChanged != null) PropertyChanged(this, new PropertyChangedEventArgs(propName));
        }
    }
}
