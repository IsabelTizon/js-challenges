export function isValid(str) {
  console.log(`1) Hello is valid exersise!!!`);

  // str to arr
  const strArr = str.split(" ");
  console.log(`2) strArr: ${strArr}`);

  //Iteration of arr with filter()
  const iterationArr = strArr.filter((item) => {
    if (
      ((item.startsWith("(") && item.endsWith(")"))) && item.length > 2 ||
      (!item.includes("(") && !item.includes(")"))
    ) {
      console.log(`2) item iterated on Arr:${item}`);
      return `3) item returned on Arr:${item}`;
    }
  });
  console.log(`4) Value of the item iterated on Arr:${iterationArr}`);
  return `5) item returned on Arr:${iterationArr}`;
}
