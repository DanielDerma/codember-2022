import Axios from "axios";

const ASCII_LETTERS = {
  97: "a",
  98: "b",
  99: "c",
  100: "d",
  101: "e",
  102: "f",
  103: "g",
  104: "h",
  105: "i",
  106: "j",
  107: "k",
  108: "l",
  109: "m",
  110: "n",
  111: "o",
  112: "p",
  113: "q",
  114: "r",
  115: "s",
  116: "t",
  117: "u",
  118: "v",
  119: "w",
  120: "x",
  121: "y",
  122: "z",
};

const separateLetters = (data) => {
  let breaking = 2;
  const letter = [];
  for (let i = 0; i <= data.length; i += breaking) {
    breaking = data[i] == 9 ? 2 : 3;
    letter.push(data.slice(i, i + breaking));
  }

  const letterFilter = letter.filter((elem) => elem.length > 0);
  return letterFilter;
};

const asciiToText = (data) => {
  let text = "";
  data.forEach((element) => {
    text += ASCII_LETTERS[element];
  });
  return text;
};

const App = async () => {
  const { data: responseText } = await Axios.get(
    "https://codember.dev/encrypted.txt"
  );
  const listText = responseText.split(" ");
  const textQuote = listText.reduce((prev, curr) => {
    const letters = separateLetters(curr);
    const text = asciiToText(letters);
    if (!prev) return text;
    return prev + " " + text;
  }, "");

  return textQuote;
};

App().then((response) => {
  console.log(response);
});
