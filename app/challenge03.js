import Axios from "axios";

const getEachZebra = (data, i) => {
  const newSet = [data[i], data[i + 1]];
  let count = 0;
  for (let index = i; index < data.length; index++) {
    if (data[index] !== newSet[count % 2])
      return { count, color: data[index - 1] };
    count++;
  }
};

const App = async () => {
  const { data } = await Axios.get("https://codember.dev/colors.txt");

  const lista = data.map((elem, i) => getEachZebra(data, i));

  const listaWithSortAndFilter = lista
    .sort((a, b) => a.count - b.count)
    .filter((elem) => Boolean(elem));

  const win = listaWithSortAndFilter[listaWithSortAndFilter.length - 1];

  const result = `${win.count}@${win.color}`;

  return result;
};

App().then((response) => {
  console.log(response);
});
