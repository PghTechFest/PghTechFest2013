using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PghTechFest.Rx.StocksService
{
    public class StocksData
    {
        public StocksData()
        {
            Stocks = new List<Stock>();
            Stocks.Add(new Stock() { Symbol = "BAC", Name = "Bank of America Corporation Com", CurrentQuote = "13.24", ChangeAmount = "+0.03", ChangePercent = "0.23%" });
            Stocks.Add(new Stock() { Symbol = "FB", Name = "Facebook, Inc.", CurrentQuote = "24.31", ChangeAmount = "-0.75 ", ChangePercent = "2.98%" });
            Stocks.Add(new Stock() { Symbol = "SIRI", Name = "Sirius XM Radio Inc.", CurrentQuote = "3.58", ChangeAmount = "+0.0350", ChangePercent = "0.99%" });
            Stocks.Add(new Stock() { Symbol = "GE", Name = "General Electric Company Common", CurrentQuote = "23.53", ChangeAmount = "-0.13 ", ChangePercent = "0.55%" });
            Stocks.Add(new Stock() { Symbol = "VXX", Name = "iPath S&P 500 VIX Short Term Fu", CurrentQuote = "18.73", ChangeAmount = "-0.05 ", ChangePercent = "0.27%" });
            Stocks.Add(new Stock() { Symbol = "PFE", Name = "Pfizer, Inc. Common Stock", CurrentQuote = "29.04", ChangeAmount = "-0.07 ", ChangePercent = "0.24%" });
            Stocks.Add(new Stock() { Symbol = "MSFT", Name = "Microsoft Corporation", CurrentQuote = "34.27", ChangeAmount = "+0.12", ChangePercent = "0.35%" });
            Stocks.Add(new Stock() { Symbol = "INTC", Name = "Intel Corporation", CurrentQuote = "23.92", ChangeAmount = "-0.13 ", ChangePercent = "0.53%" });
            Stocks.Add(new Stock() { Symbol = "P", Name = "Pandora Media, Inc. Common Stoc", CurrentQuote = "16.43", ChangeAmount = "-0.73 ", ChangePercent = "4.25%" });
            Stocks.Add(new Stock() { Symbol = "HPQ", Name = "Hewlett-Packard Company Common", CurrentQuote = "24.21", ChangeAmount = "-0.65 ", ChangePercent = "2.61%" });
            Stocks.Add(new Stock() { Symbol = "MU", Name = "Micron Technology, Inc.", CurrentQuote = "11.59", ChangeAmount = "+0.20", ChangePercent = "1.76%" });
            Stocks.Add(new Stock() { Symbol = "PG", Name = "Procter & Gamble Company (The)", CurrentQuote = "81.88", ChangeAmount = "+3.18", ChangePercent = "4.04%" });
            Stocks.Add(new Stock() { Symbol = "F", Name = "Ford Motor Company Common Stock", CurrentQuote = "14.79", ChangeAmount = "-0.02 ", ChangePercent = "0.14%" });
            Stocks.Add(new Stock() { Symbol = "CSCO", Name = "Cisco Systems, Inc.", CurrentQuote = "23.53", ChangeAmount = "+0.02", ChangePercent = "0.09%" });
            Stocks.Add(new Stock() { Symbol = "NOK", Name = "Nokia Corporation Sponsored Ame", CurrentQuote = "3.65", ChangeAmount = "+0.05", ChangePercent = "1.39%" });
            Stocks.Add(new Stock() { Symbol = "C", Name = "Citigroup, Inc. Common Stock", CurrentQuote = "50.52", ChangeAmount = "-0.01 ", ChangePercent = "0.02%" });
            Stocks.Add(new Stock() { Symbol = "ORCL", Name = "Oracle Corporation", CurrentQuote = "34.05", ChangeAmount = "-0.18 ", ChangePercent = "0.53%" });
            Stocks.Add(new Stock() { Symbol = "CRM", Name = "Salesforce.com Inc Common Stock", CurrentQuote = "43.25", ChangeAmount = "-2.44 ", ChangePercent = "5.34%" });
            Stocks.Add(new Stock() { Symbol = "ELN", Name = "Elan Corporation, plc ADR", CurrentQuote = "12.47", ChangeAmount = "+0.11", ChangePercent = "0.89%" });
            Stocks.Add(new Stock() { Symbol = "BSX", Name = "Boston Scientific Corporation C", CurrentQuote = "9.08", ChangeAmount = "-0.08 ", ChangePercent = "0.87%" });
            Stocks.Add(new Stock() { Symbol = "JPM", Name = "JP Morgan Chase & Co. Common St", CurrentQuote = "53.66", ChangeAmount = "+0.31", ChangePercent = "0.58%" });
            Stocks.Add(new Stock() { Symbol = "WFC", Name = "Wells Fargo & Company Common St", CurrentQuote = "40.24", ChangeAmount = "+0.23", ChangePercent = "0.57%" });
            Stocks.Add(new Stock() { Symbol = "AMD", Name = "Advanced Micro Devices, Inc. Co", CurrentQuote = "4.05", ChangeAmount = "+0.04", ChangePercent = "1.00%" });
            Stocks.Add(new Stock() { Symbol = "S", Name = "Sprint Nextel Corporation Comm", CurrentQuote = "7.33", ChangeAmount = "+0.02", ChangePercent = "0.27%" });
            Stocks.Add(new Stock() { Symbol = "BLOX", Name = "Infoblox Inc. Common Stock", CurrentQuote = "25.19 ", ChangeAmount = "+3.19", ChangePercent = "14.50%" });
            Stocks.Add(new Stock() { Symbol = "VRX", Name = "Valeant Pharmaceuticals Interna", CurrentQuote = "84.47 ", ChangeAmount = "+9.80", ChangePercent = "13.12%" });
            Stocks.Add(new Stock() { Symbol = "YY", Name = "YY Inc.", CurrentQuote = "24.71 ", ChangeAmount = "+0.58", ChangePercent = "2.40%" });
            Stocks.Add(new Stock() { Symbol = "FLTX", Name = "Fleetmatics Group PLC Ordinary", CurrentQuote = "29.74 ", ChangeAmount = "+0.52", ChangePercent = "1.78%" });
            Stocks.Add(new Stock() { Symbol = "JAZZ", Name = "Jazz Pharmaceuticals plc", CurrentQuote = "63.75 ", ChangeAmount = "+0.75", ChangePercent = "1.19%" });

        }

        public List<Stock> Stocks { get; set; }
    }
}
