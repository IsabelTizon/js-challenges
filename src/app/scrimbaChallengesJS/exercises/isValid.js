export function isValid(str) {
  console.log(`1) Hello is valid exersise!!!`);

  // str to arr
  const strArr = str.split(" ");
  console.log(`2) strArr: ${strArr}`);

  //Iteration of arr with filter()
  const iterationArr = strArr.filter((item) => {
    return (
      (item.startsWith("(") && item.endsWith(")") && item.length > 2) ||
      (!item.includes("(") && !item.includes(")"))
    );
  });
  return `5) item returned on Arr:${iterationArr}`;
}
