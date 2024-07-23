const footer1 = document.getElementById('footer1');
const footer2 = document.getElementById('footer2');
const shareBox1 = document.getElementById('shareBox1');
const shareBox2 = document.getElementById('shareBox2');

function shareOn() {
    footer1.style.display = 'none';
    footer2.style.display = 'flex';
}
function shareOff() {
    footer2.style.display = 'none';
    footer1.style.display = 'flex';
}

shareBox1.addEventListener("click", shareOn);
shareBox2.addEventListener("click", shareOff);