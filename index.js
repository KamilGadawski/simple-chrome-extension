const saveBtn = document.getElementById('input-btn');
let myLeads = [];
const inputEl = document.getElementById('input-el');
const linkList = document.getElementById('link-list');
let linksFromStorage = JSON.parse(localStorage.getItem('storageLinks'));

saveBtn.addEventListener('click', () => {
	myLeads.push(inputEl.value);
	inputEl.value = '';

    localStorage.setItem('storageLinks', JSON.stringify(myLeads))
	renderLink();
});


if (linksFromStorage) {
    myLeads = linksFromStorage;
    renderLink();
}

console.log(linksFromStorage);

function renderLink() {
	myLeads.forEach((item) => {
    let liElement = document.createElement('li');
		let createATag = document.createElement('a');

		createATag.href = item;
		createATag.target = '_blank';
		createATag.innerText = item;

		liElement.appendChild(createATag);
		linkList.appendChild(liElement);

		console.log(liElement);
	});
}
