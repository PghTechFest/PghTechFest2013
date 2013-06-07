// Inserting a more complex object

// Declare the object
var invoice = {
  shipTo: {
    name: "John Doe", 
    address: "123 main", 
    state: "PA"
  },
  billTo: {
    name: "Jane Doe", 
    address: "888 money av", 
    state: "PA",
    cc: {
      number: "1111-2222-3333",
      type: "VISA",
      expiration: "11/16"
    }
  },
  items: [
    {sku: "ABC", name: "something", qty: 1, price: 10},
    {sku: "YXZ", name: "blah blah ", qty: 2, price: 20}
  ],
  total: 50
};


// Insert it into the invoice collection
db.invoice.insert(invoice);


// Query for invoices where item "QQ11" was sold
// Display the state where they are being shipped to
db.invoice.find(
  {"items.sku": "ABC"},
  {"shipTo.state": 1, "total": 1}
).prety();

