using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Reactive;
using System.Reactive.Linq;

namespace PghTechFest.Rx.TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {


            var oneTo500 = Observable.Range(1, 10000);
            var evenOnly2 = oneTo500.Where(num => num % 2 == 0).Select(num => num * 2);
            var evenOnly = from num in oneTo500
                           where num % 2 == 0
                           select num * 2;

            var buffered = oneTo500.Buffer(100).Select(lst=>lst.Count);

            using (buffered.Subscribe(Console.WriteLine))
            {
                Console.ReadLine();
            }
        }
    }
}
