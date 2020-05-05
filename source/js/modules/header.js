export default () => {
  let body = document.body;

  body.onload = function () {
    body.classList.add(`loaded`);
  };
};
