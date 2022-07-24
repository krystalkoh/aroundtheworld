export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let finalDate = "";
  if (date <= 9) {
    finalDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-0${date}`;
  } else {
    finalDate = `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`;
  }

  return finalDate;
}

// export function getCurrentDate(separator = "") {
//   let newDate = new Date();
//   let date = newDate.getDate();
//   let month = newDate.getMonth() + 1;
//   let year = newDate.getFullYear();

//   return `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`;
// }
