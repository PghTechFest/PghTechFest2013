using System;
using System.Collections.Generic;
using System.Linq;
using System.Reactive.Subjects;
using System.Text;
using System.Threading.Tasks;

namespace PghTechFest.Rx.StocksService
{
    public class SlowStockService
    {

        private StocksData _Data = new StocksData();
        private int _CurrentStock = 0;


        public async Task<Stock> GetNextStock()
        {
            if (_CurrentStock < _Data.Stocks.Count)
            {
                await Task.Delay(300);
                Stock stk = _Data.Stocks.ElementAt(_CurrentStock);
                _CurrentStock++;
                return stk;
            }
            else
            {
                return null;
            }

        }

        public async Task<List<Stock>> GetAllStocks()
        {
            return await Task.Run<List<Stock>>(async () =>
            {
                List<Stock> stocks = new List<Stock>();

                Stock stk = null;

                do
                {
                    stk = await GetNextStock();
                    if (stk != null)
                    {
                        stocks.Add(stk);
                    }

                } while (stk != null);


                return stocks;
            });
        }

        public async Task StartGettingStocks()
        {
            Stock stk = null;
            do
            {
                stk = await GetNextStock();
                if (stk != null)
                {
                    StockSubject.OnNext(stk);
                }

            } while (stk != null);

            StockSubject.OnCompleted();
        }

        public Subject<Stock> StockSubject = new Subject<Stock>();
        

    }

    public class StockEventArgs
    {
        public StockEventArgs(Stock stock)
        {
            Stock = stock;
        }

        public Stock Stock { get; set; }
    }
}
