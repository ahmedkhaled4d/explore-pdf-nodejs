const convertTextToRtl = (text) => {
  return text.split(" ").reverse().join(" ");
};

const docDefinition = {
  footer: function (currentPage, pageCount) {
    return currentPage.toString() + " of " + pageCount;
  },
  background: function (currentPage, pageSize) {
    return `page ${currentPage} with size ${pageSize.width} x ${pageSize.height}`;
  },

  content: [
    { text: "hhhi" },
    {
      layout: "lightHorizontalLines", // optional
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: ["*", "auto", 100, "*"],

        body: [
          ["First", "Second", "Third", "The last one"].reverse(),
          ["Value 1", "Value 2", "Value 3", "Value 4"],
          [{ text: "Bold value", bold: true }, "Val 2", "Val 3", "Val 4"],
          ["Hii", "222222", "4321", { qr: "QR text" }],
        ],
      },
    },
    "Bulleted list example:",
    {
      // to treat a paragraph as a bulleted list, set an array of items under the ul key
      ul: ["Item 1", "Item 2", "Item 3", { text: "Item 4", bold: true }],
    },
  ],

  defaultStyle: {
    alignment: "right",
    direction: "rtl",
  },
};

module.exports = docDefinition;
