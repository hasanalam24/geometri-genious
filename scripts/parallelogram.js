function calculateParallelogram() {
    // get value of the base
    const paralalBase = document.getElementById('paralal-base');
    const paralalInput = paralalBase.value;
    const convertParalal = parseFloat(paralalInput);
    // console.log(convertParalal);

    // get value of the height
    const paralalHeight = document.getElementById('paralal-height');
    const paralalInputHeight = paralalHeight.value;
    const convertParalalH = parseFloat(paralalInputHeight);
    // console.log(convertParalalH);

    // formula added 
    const area = convertParalal * convertParalalH;
    // console.log(area);

    // display area
    const paralalArea = document.getElementById('paralal-area');
    paralalArea.innerText = area;
}