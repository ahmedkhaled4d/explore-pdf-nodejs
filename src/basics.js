const convertTextToRtl = (text) => {
  return text.split(" ").reverse().join(" ");
};

const fonts = {
  Roboto: {
    normal: "fonts/Rubik/Rubik-Regular.ttf",
    bold: "fonts/Rubik/Rubik-Medium.ttf",
    italics: "fonts/Rubik/Rubik-Italic.ttf",
    bolditalics: "fonts/Rubik/Rubik-MediumItalic.ttf",
  },
};

const PdfPrinter = require("pdfmake");
const printer = new PdfPrinter(fonts);
const fs = require("fs");

const docDefinition = {
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

const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("pdfs/basics.pdf"));
pdfDoc.end();
