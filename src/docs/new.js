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

var docDefinition = {
  content: [
    "This paragraph fills full width, as there are no columns. Next paragraph however consists of three columns",
    {
      columns: [
        {
          // auto-sized columns have their widths based on their content
          width: "auto",
          text: "First column",
        },
        {
          // star-sized columns fill the remaining space
          // if there's more than one star-column, available width is divided equally
          width: "*",
          text: "Second column",
        },
        {
          // fixed width
          width: 100,
          text: "Third column",
        },
        {
          // % width
          width: "20%",
          text: "Fourth column",
        },
      ],
      // optional space between columns
      columnGap: 10,
    },
    "This paragraph goes below all columns and has full width",
  ],
};

const pdfDoc = printer.createPdfKitDocument(docDefinition);

pdfDoc.pipe(fs.createWriteStream("pdfs/new.pdf"));
pdfDoc.end();
