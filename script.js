const orange = document.querySelector('.orange');

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

var orangeELementColor = getBGColor(orange);
orange.addEventListener('mouseenter' , () => {
    orange.style.backgroundColor = 'lightgray';
});