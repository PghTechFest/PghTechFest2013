using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reactive.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using PghTechFest.Rx.TextInput;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();


            var textChange = Observable.FromEventPattern<EventArgs>
                (this.textBox1, "TextChanged").
                Select(evt=>((TextBox)evt.Sender).Text).
                Where(s=>s.Length >= 3)
                .DistinctUntilChanged();

            textChange.Subscribe(input => 
            {
                Suggestions suggs = new Suggestions();
                this.listBox1.Items.Clear();
                foreach (var suggestion in suggs.FindSuggestions(input))
                {
                    listBox1.Items.Add(suggestion);
                }
            });
        }

    }
}
