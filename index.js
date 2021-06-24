const saveBtn = document.getElementById('input-btn');
const delBtn = document.getElementById('input-del-btn');
const inputEl = document.getElementById('input-el');
const linkList = document.getElementById('link-list');
let linksFromStorage = JSON.parse(localStorage.getItem('storageLinks'));

let myLeads = [];

saveBtn.addEventListener('click', () => {
	localstorageSave();
});

inputEl.addEventListener('keydown', (e) => {
	if (e.code === 'Enter') {
		localstorageSave();
	}
});

delBtn.addEventListener('click', () => {
	localStorage.clear();
	location.reload();
});

if (linksFromStorage) {
	myLeads = linksFromStorage;
	renderLink();
}

function localstorageSave() {
	myLeads.push(inputEl.value);
	inputEl.value = '';

	localStorage.setItem('storageLinks', JSON.stringify(myLeads));
	renderLink();
}

function renderLink() {
	myLeads.forEach((item) => {
		let liElement = document.createElement('li');
		let createATag = document.createElement('a');

		createATag.href = item;
		createATag.target = '_blank';
		createATag.innerText = item;

		liElement.appendChild(createATag);
		linkList.appendChild(liElement);
	});
}
