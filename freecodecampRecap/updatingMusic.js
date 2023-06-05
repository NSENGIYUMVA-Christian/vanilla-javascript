const playList = {
  1: {
    name: "lil baby",
    album: "harder than ever",
    tracks: ["sum to prove", "never store"],
  },
  2: {
    name: "drake",
    album: "honestly, never mind",
    tracks: ["sticky", "goofy"],
  },
  3: {
    name: "21 savage",
    album: "savage mode",
    tracks: ["sticky", "goofy"],
  },
  4: {
    name: "BlueFace",
    album: "thot",
    tracks: ["buss down", "respect"],
  },
};

// keeping original copy
const defaultPlayList = JSON.parse(JSON.stringify(playList));

/// updating function
function updatePlayList(id, prop, value) {
  // if not, delete
  if (value === "") {
    delete playList[id][prop];
  }

  // if props is track
  else if (prop === "tracks") {
    playList[id][prop].push(value);
  } else {
    playList[id][prop] = value;
  }
  // update value if available

  return playList;
}

console.log("before", defaultPlayList);

console.log("after", updatePlayList(1, "name", "le baby"));

console.log("TRY", playList);
