function component() {
var element = document.createElement('div');

element.innerHTML = 'stuff';

return element;
}

document.body.appendChild(component());
