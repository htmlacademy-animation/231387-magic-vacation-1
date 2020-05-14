export default () => {
    let rulesLastElement = document.querySelector('.rules__item:last-child p');
    let rulesAction = document.querySelector('.rules__link');

    console.log(rulesLastElement)
    rulesLastElement.addEventListener(`animationend`, () => {
        rulesAction.classList.add('active');
    });
};