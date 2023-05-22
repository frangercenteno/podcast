export default (date) => {
  if (!date) {
    return "Not Information";
  }
  const dateToFormat = new Date(Date.parse(date));

  return dateToFormat.toLocaleDateString();
};
