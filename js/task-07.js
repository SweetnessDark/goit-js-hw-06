const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener("input", setOutput);

function setOutput(event) {
    text.style.fontSize = event.currentTarget.value + "px";
}
