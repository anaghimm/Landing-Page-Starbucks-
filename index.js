function imgSlider(anything)
{
    document.querySelector('.starbucksCup').src = anything;

}
function changeColor(color){
    const span = document.querySelector('span');
    const button = document.querySelector('.button');
    const circle = document.querySelector('.circle');
    circle.style.background = color;
    span.style.color = color;
    button.style.background = color;
}