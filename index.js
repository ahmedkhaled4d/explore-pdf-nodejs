const PdfPrinter = require("pdfmake");
const fs = require("fs");
const docDefinition = require("./src/learn/2");

const fonts = {
  Roboto: {
    normal: "fonts/Rubik/Rubik-Regular.ttf",
    bold: "fonts/Rubik/Rubik-Medium.ttf",
    italics: "fonts/Rubik/Rubik-Italic.ttf",
    bolditalics: "fonts/Rubik/Rubik-MediumItalic.ttf",
  },
};
const printer = new PdfPrinter(fonts);
const pdfDoc = printer.createPdfKitDocument(docDefinition);

pdfDoc.pipe(fs.createWriteStream("pdfs/2.pdf"));
pdfDoc.end();
