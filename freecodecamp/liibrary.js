var library = [
  [
    {
      name: "book 1",
      pages: [
        { title: "page 1 title", content: "" },
        { title: "page 2 title", content: "" },
        { title: "page 2 title", content: "" },
      ],
    },
    {
      name: "book 2",
      pages: [
        { title: "page 1 title", content: "" },
        { title: "page 2 title", content: "" },
        { title: "page 2 title", content: "" },
      ],
    },
    {
      name: "book 2",
      pages: [
        { title: "page 1 title", content: "" },
        { title: "page 2 title", content: "" },
        { title: "page 2 title", content: "" },
      ],
    },
  ],
  [
    {
      name: "book 1",
      pages: [
        { title: "page 1 title", content: "" },
        { title: "page 2 title", content: "" },
        { title: "page 2 title", content: "" },
      ],
    },
    {
      name: "book 2",
      pages: [
        { title: "page 1 title", content: "" },
        { title: "page 2 title", content: "" },
        { title: "page 2 title", content: "" },
      ],
    },
    {
      name: "book 2",
      pages: [
        { title: "page 1 title", content: "" },
        { title: "page 2 title", content: "" },
        { title: "page 2 title", content: "" },
      ],
    },
  ],
];

// searching function
function search(keyword) {
  return library[0][0][keyword] || "check your search";
}

//
const team = { a: "aaaa", b: "bbbb", c: "cccc" };

console.log(JSON.stringify(team));
