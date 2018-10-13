const developer = document.getElementById('developer');
const magician = document.getElementById('magician');
const links = document.getElementById('links');

document.addEventListener('touchmove', function (event) {
    event.preventDefault();
    var e = event.touches[0];
    move(e);
});
document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    move(event);
});

function move(event) {
    let body = document.getElementsByTagName('body')[0];
    const width = window.innerWidth || document.documentElement.clientWidth || body.clientWidth;
    const height= window.innerHeight|| document.documentElement.clientHeight|| body.clientHeight;
    const traX = (((50 * event.pageX) / width)) - 50;
    const traY = (((50 * event.pageY) / height)) - 50;
    const traX2 = (50 + traX) * -1;
    const traY2 = (50 + traY) * -1;
    magician.style.left = traX + 'px';
    magician.style.top = traY + 'px';
    links.style.left = traX + 'px';
    links.style.top = traY + 'px';
    developer.style.left = traX2 + 'px';
    developer.style.top = traY2 + 'px';
}