const fonts = {
  Roboto: {
    normal: "fonts/Roboto-Regular.ttf",
    bold: "fonts/Roboto-Medium.ttf",
    italics: "fonts/Roboto-Italic.ttf",
    bolditalics: "fonts/Roboto-MediumItalic.ttf",
  },
};

const PdfPrinter = require("pdfmake");
const printer = new PdfPrinter(fonts);
const fs = require("fs");

// Define your invoice data
const invoice = {
  company: {
    name: "Your Company Name",
    address: "123 Street, City, Country",
    email: "company@example.com",
    phone: "+1234567890",
  },
  customer: {
    name: "Customer Name",
    address: "456 Avenue, City, Country",
    email: "customer@example.com",
    phone: "+9876543210",
  },
  items: [
    { description: "Item 1", quantity: 2, price: 50 },
    { description: "Item 2", quantity: 1, price: 100 },
    // Add more items as needed
  ],
  total: 0,
};

// Calculate total amount
invoice.items.forEach((item) => {
  invoice.total += item.quantity * item.price;
});

const documentDefinition = {
  content: [
    { text: "Invoice", style: "header" },
    { text: "From:", style: "subheader" },
    {
      text: `${invoice.company.name}\n${invoice.company.address}\nEmail: ${invoice.company.email}\nPhone: ${invoice.company.phone}`,
    },
    { text: "To:", style: "subheader" },
    {
      text: `${invoice.customer.name}\n${invoice.customer.address}\nEmail: ${invoice.customer.email}\nPhone: ${invoice.customer.phone}`,
    },
    { text: "Items:", style: "subheader" },
    {
      table: {
        headerRows: 1,
        widths: ["*", "auto", "auto"],
        body: [
          ["Description", "Quantity", "Price"],
          ...invoice.items.map((item) => [
            item.description,
            item.quantity,
            item.price,
          ]),
        ],
      },
    },
    { text: `Total: $${invoice.total}`, style: "total" },
  ],
  styles: {
    header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
    subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
    total: { fontSize: 16, bold: true, margin: [0, 10, 0, 0] },
  },
};

const now = new Date();
const pdfDoc = printer.createPdfKitDocument(documentDefinition);
pdfDoc.pipe(fs.createWriteStream("pdfs/invoice.pdf"));
pdfDoc.end();
console.log(new Date() - now);
