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

const docDefinition = {
  content: [
    {
      text: "Paragraphs can also by styled without using named-styles (this one sets fontSize to 25)",
      fontSize: 25,
    },
    "Another paragraph, using default style, this time a little bit longer to make sure, this line will be divided into at least two lines\n\n",
    {
      text: "This paragraph does not use a named-style and sets fontSize to 8 and italics to true",
      fontSize: 8,
      italics: true,
    },
    "\n\nFor preserving leading spaces use preserveLeadingSpaces property:",
    {
      text: "    This is a paragraph with preserved leading spaces.",
      preserveLeadingSpaces: true,
    },
    { text: "{", preserveLeadingSpaces: true },
    { text: '    "sample": {', preserveLeadingSpaces: true },
    { text: '        "json": "nested"', preserveLeadingSpaces: true },
    { text: "    }", preserveLeadingSpaces: true },
    { text: "}", preserveLeadingSpaces: true },
    "\n\nfontFeatures property:",
    { text: "Hello World 1234567890", fontFeatures: ["smcp"] },
    { text: "Hello World 1234567890", fontFeatures: ["c2sc"] },
    { text: "Hello World 1234567890", fontFeatures: ["onum"] },
    { text: "Hello World 1234567890", fontFeatures: ["onum", "c2sc"] },
    "\n\nText opacity:",
    { text: "Hello World", opacity: 0.8 },
    { text: "Hello World", opacity: 0.6 },
    { text: "Hello World", opacity: 0.4 },
    { text: "Hello World", opacity: 0.2 },
    { text: "Hello World", opacity: 0.1 },
    "\n\n Subscript, superscript:",
    {
      text: [
        "Hello World.",
        {
          text: "1, 2",
          sup: true,
        },
        " Let's continue our sentence. Notice the leading space.",
      ],
    },
    {
      text: [
        "Hello",
        {
          text: "1, 2",
          sub: true,
        },
        " World",
      ],
    },
    "\n\n",
    {
      text: "Text background pattern",
      background: ["stripe45d", "gray"],
    },
  ],
  patterns: {
    stripe45d: {
      boundingBox: [1, 1, 4, 4],
      xStep: 3,
      yStep: 3,
      pattern: "1 w 0 1 m 4 5 l s 2 0 m 5 3 l s",
    },
  },
};

const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream("pdfs/styling_properties.pdf"));
pdfDoc.end();
