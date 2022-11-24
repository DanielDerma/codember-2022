const INITIAL_RANGE = 11098;
const FINIAL_RANGE = 98123;

const App = async () => {
  let count = 0;
  let index55 = "";

  for (let index = INITIAL_RANGE; index < FINIAL_RANGE; index++) {
    const counterFives = String(index)
      .split("")
      .filter((e) => e == 5).length;

    const LeftIsMinusOrEqualToRight = String(index)
      .split("")
      .every((e, i, arr) => {
        if (i === 0) return true;
        return arr[i - 1] <= arr[i];
      });

    if (LeftIsMinusOrEqualToRight && counterFives >= 2) {
      if (count == 55) {
        index55 = index;
      }
      count++;
    }
  }

  return { count, index55 };
};

App().then((response) => {
  console.log(response);
});
