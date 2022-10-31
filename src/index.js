import mdHtml from './test.md';

const content = document.createElement('div');
content.className = 'content';
content.innerHTML = mdHtml;
document.body.appendChild(content);

const img = document.createElement('img');
img.src = './3.png';
document.body.appendChild(img);

