function calculateRhombus() {
    // get value in the input d1
    const rhombusInputD = document.getElementById('rhombusInputD-1')
    const rhombusD1 = rhombusInputD.value;
    const convert1 = parseFloat(rhombusD1);
    // console.log(typeof convertInput1)

    // get value in the input d2
    const rhombusInputD2 = document.getElementById('rhombusInputD-2');
    const rhombusD2 = rhombusInputD2.value;
    const convert2 = parseFloat(rhombusD2);
    // console.log(convert2)

    // formula area
    const area = 0.5 * convert1 * convert2;
    // display
    const displayArea = document.getElementById('rhombus-area');
    displayArea.innerText = area;
}