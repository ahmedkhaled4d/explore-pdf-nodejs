const convertTextToRtl = (text) => {
  return text.split(" ").reverse().join(" ");
};

const docDefinition = {
  content: [
    {
      columns: [
        {
          image: "src/images/logo1.jpg",
          width: 150,
        },
        {
          text: convertTextToRtl("عقد  نظافه تشغيلي"),
          style: "header",
          alignment: "right",
        },
      ],
    },
    {
      text: "Agent Details",
      style: "subheader",
    },
    {
      text: "Address: [Agent Address]\nCR: [Agent CR]\nTax ID: [Agent Tax ID]",
      margin: [0, 0, 0, 20],
    },
    {
      text: "Client Details",
      style: "subheader",
    },
    {
      text: "Address: [Client Address]\nPhone: [Client Phone]\nEmail: [Client Email]",
      margin: [0, 0, 0, 20],
    },
    {
      text: "Terms and Conditions",
      style: "sectionHeader",
    },
    {
      ul: [
        "Term 1: [Description]",
        "Term 2: [Description]",
        // More terms...
      ],
    },
    {
      text: "Invoice",
      style: "sectionHeader",
      pageBreak: "before",
    },
    {
      table: {
        headerRows: 1,
        widths: ["*", "auto", "auto", "auto"],
        body: [
          ["Description", "Quantity", "Price", "Total"],
          ["Service 1", "1", "$100", "$100"],
          // More items...
          [
            { text: "Subtotal", colSpan: 3, alignment: "right" },
            {},
            {},
            "$100",
          ],
          [
            { text: "Tax (10%)", colSpan: 3, alignment: "right" },
            {},
            {},
            "$10",
          ],
          [{ text: "Total", colSpan: 3, alignment: "right" }, {}, {}, "$110"],
        ],
      },
    },
    {
      columns: [
        {
          image: "src/images/s1.png",
          width: 150,
          margin: [0, 40, 0, 0],
        },
        {
          image: "src/images/t1.jpg",
          width: 150,
          alignment: "right",
          margin: [0, 40, 0, 0],
        },
      ],
    },
  ],
  styles: {
    header: {
      fontSize: 22,
      bold: true,
      margin: [0, 0, 0, 10],
    },
    subheader: {
      fontSize: 18,
      bold: true,
      margin: [0, 10, 0, 5],
    },
    sectionHeader: {
      fontSize: 16,
      bold: true,
      margin: [0, 10, 0, 5],
    },
  },
  defaultStyle: {
    alignment: "right",
  },
};

module.exports = docDefinition;
