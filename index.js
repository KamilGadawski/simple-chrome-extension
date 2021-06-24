let myLeads = [];

const saveBtn = document.getElementById('input-save-btn');
const delBtn = document.getElementById('input-del-btn');
const inputEl = document.getElementById('input-el');
const linkList = document.getElementById('link-list');
let linksFromStorage = JSON.parse(localStorage.getItem('storageLinks'));


saveBtn.addEventListener('click', () => {
	localstorageSave(myLeads);
});

inputEl.addEventListener('keydown', (e) => {
	if (e.code === 'Enter') {
		localstorageSave(myLeads);
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

function localstorageSave(link) {
	if (inputEl.value === '') {
		return;
	}

	link.push(inputEl.value);
	inputEl.value = '';

	localStorage.setItem('storageLinks', JSON.stringify(link));
	location.reload();
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
