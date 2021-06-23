const saveBtn = document.getElementById('input-btn');
let myLeads = [];
const inputEl = document.getElementById('input-el');
const linkList = document.getElementById('link-list');

saveBtn.addEventListener('click', () => {
	myLeads.push(inputEl.value);
	inputEl.value = '';
	renderLink();
});

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
