using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PghTechFest.Rx.TextInput
{
    public class Suggestions
    {

        public Suggestions()
        {
            SuggestionsList = new List<string>();
            SuggestionsList.Add("Altair");
            SuggestionsList.Add("Apple");
            SuggestionsList.Add("Apple II");
            SuggestionsList.Add("Apple IIc");
            SuggestionsList.Add("Apple Macintosh");
            SuggestionsList.Add("Commodore Pet");
            SuggestionsList.Add("Commodore VIC20");
            SuggestionsList.Add("Commodore 64");
            SuggestionsList.Add("Commodore 64c");
            SuggestionsList.Add("Commodore 128d");

        }

        public List<string> SuggestionsList { get; set; }

        public IEnumerable<string> FindSuggestions(string prefix)
        {
            return SuggestionsList.Where(s => s.StartsWith(prefix));
        }
    }
}
