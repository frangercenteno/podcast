export default (dateSaved) => {
  const currentDate = new Date();

  const dateToCompare = new Date(dateSaved);
  const diff = currentDate.getTime() - dateToCompare.getTime();

  const timeDiff = Math.abs(diff / (1000 * 60 * 60));

  return timeDiff <= 24;
};
