using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reactive.Linq;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace PghTechFest.Rx.TextInput
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        public MainPage()
        {
            this.InitializeComponent();

            var textChanges = Observable.FromEventPattern<TextChangedEventArgs>(this.TextInputBox, "TextChanged").Select(e => ((TextBox)e.Sender).Text).Throttle(new TimeSpan(0, 0, 1));
            textChanges.ObserveOn(this).Subscribe(lookup =>
            {
                Suggestions suggestions = new Suggestions();
                SuggestionsList.Items.Clear();
                foreach (var suggestion in suggestions.FindSuggestions(lookup))
                {
                    SuggestionsList.Items.Add(suggestion);
                }
            });

        }

        /// <summary>
        /// Invoked when this page is about to be displayed in a Frame.
        /// </summary>
        /// <param name="e">Event data that describes how this page was reached.  The Parameter
        /// property is typically used to configure the page.</param>
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
        }
    }
}
