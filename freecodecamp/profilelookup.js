var contact = [
  {
    fname: "chris",
    number: "0786457338",
    like: ["coding", "balling"],
  },
  {
    fname: "lion",
    number: "00000000",
    like: ["roar", "hunting"],
  },
];

function lookupProfile(name, prop) {
  for (var i = 0; i < contact.length; i++) {
    // check if name exist
    if (contact[i].fname === name) {
      return contact[i][prop] || "no such property";
    }
  }
  return "No such contact";
}

console.log(lookupProfile("chris", "like"));
//console.log(lookupProfile("brown", "like"));
