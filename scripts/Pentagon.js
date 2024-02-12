// shortCut

function calculatePentagon() {

    const base = getInputValueById('pentagon-base');
    // console.log('base value', base);

    const height = getInputValueById('pentagon-height');
    // console.log('base value', height);

    const area = 0.5 * base * height;
    console.log('pentagon value', area);

    setInnerText('pentagon-area', area)

}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerText(elementId, area) {
    const innerText = document.getElementById(elementId)
    elementId.innerText = area;
}