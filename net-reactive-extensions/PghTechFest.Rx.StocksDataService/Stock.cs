using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PghTechFest.Rx.StocksDataService
{
    public class Stock
    {
        public string Symbol { get; set; }
        public string Name { get; set; }
        public string CurrentQuote { get; set; }

        public string ChangeAmount { get; set; }
        public string ChangePercent { get; set; }

    }
}
