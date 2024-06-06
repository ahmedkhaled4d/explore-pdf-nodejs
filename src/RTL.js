const convertTextToRtl = (text) => {
  return text.split(" ").reverse().join(" ");
};

var fonts = {
  Roboto: {
    normal: "fonts/Rubik/Rubik-Regular.ttf",
    bold: "fonts/Rubik/Rubik-Medium.ttf",
    italics: "fonts/Rubik/Rubik-Italic.ttf",
    bolditalics: "fonts/Rubik/Rubik-MediumItalic.ttf",
  },
};

var PdfPrinter = require("pdfmake");
var printer = new PdfPrinter(fonts);
var fs = require("fs");

var docDefinition = {
  content: [
    convertTextToRtl("صباح الفل"),
    "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
  ],
  defaultStyle: {
    alignment: "right",
    direction: "rtl",
    // rtl: true,
    header: {
      fontSize: 18,
      bold: true,
    },
    bigger: {
      fontSize: 15,
      italics: true,
    },
  },
  language: "ar-SA",
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("pdfs/basics.pdf"));
pdfDoc.end();
