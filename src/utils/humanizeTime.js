export default (milliseconds) => {
  if (!milliseconds) {
    return "Not Information";
  }

  const seconds = Math.floor(milliseconds / 1000);
  const min = Math.floor(seconds / 60);
  const secondsRestantes = seconds % 60;
  const horas = Math.floor(min / 60);
  const resMins = min % 60;

  return `${horas}:${resMins}:${secondsRestantes}`;
};
