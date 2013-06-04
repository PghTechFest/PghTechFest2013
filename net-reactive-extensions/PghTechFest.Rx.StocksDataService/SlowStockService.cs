using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PghTechFest.Rx.StocksDataService
{
    public class SlowStockService
    {

        private StocksData _Data = new StocksData();
        private int _CurrentStock = -1;

        public async Task<Stock> GetNextStock()
        {
            if (_CurrentStock <= _Data.Stocks.Count)
            {
                await Task.Delay(1000);
                _CurrentStock++;
                return _Data.Stocks.ElementAt(_CurrentStock);
            }
            else
            {
                return null;
            }

        }
    }
}
