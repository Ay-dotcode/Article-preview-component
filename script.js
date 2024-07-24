const footer1 = document.getElementById('footer1');
const footer2 = document.getElementById('footer2');
const shareBox1 = document.getElementById('shareBox1');
const shareBox2 = document.getElementById('shareBox2');
const arrow = document.getElementById('arrow');

function shareOn() {
    footer2.style.display = 'flex';
    arrow.style.display = 'flex'

}
function shareOff() {
    footer2.style.display = 'none';
    arrow.style.display = 'none';
}

shareBox1.addEventListener("click", shareOn);
shareBox2.addEventListener("click", shareOff);