//? converts string like ISO date to local date format
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
export const convertDate = (dateKey) => {
  let changedDate = new Date(dateKey).toLocaleDateString(undefined, options);
  return changedDate
}


//? converts string like numbers to local currency format

export const toCurrency =(amountVal) => {
  let formatType = Intl.NumberFormat('en-US');
  return formatType.format(amountVal);
}
