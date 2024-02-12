// Rectriangle Card Area

function CalculateRectangleArea() {
    //  get length of the rectriangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText)
    console.log(length)

    // get width of the rectriangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText)
    console.log(width)
    // calculate rectriangle area
    const area = length * width;
    console.log('area of the rectriangle is:', area);

    const rectangleDisplay = document.getElementById('rectangle-display');
    rectangleDisplay.innerText = area
    console.log(displayValue)
}