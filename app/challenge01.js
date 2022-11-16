import Axios from "axios";

const KEYS_REQUIRED = ["usr:", "eme:", "psw:", "age:", "loc:", "fll:"];

const func = async () => {
  const { data: users } = await Axios.get("https://codember.dev/users.txt");
  const data = users.split(/\n\n/);
  let validUser = [];

  const isValid = (elem) => KEYS_REQUIRED.every((i) => elem.indexOf(i) !== -1);

  for (const elem in data) {
    const res = isValid(data[elem]);
    if (res) {
      validUser.push(elem);
    }
  }

  const a = data[validUser[validUser.length - 1]];

  return validUser.length;
};

func().then((response) => {
  console.log(response);
});
