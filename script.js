window.addEventListener('load', main);


function main() {
    const now = new Date();
    const h2 = document.querySelector('h2');
    h2.innerText = now.toDateString();
}