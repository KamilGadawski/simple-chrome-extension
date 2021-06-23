const saveBtn = document.getElementById('input-btn');
let myLeads = [1, 2, 3, 4, 5, 6, 7, 8];
const inputEl = document.getElementById('input-el');
const linkList = document.getElementById('link-list');

saveBtn.addEventListener('click', () => {
	myLeads.push(inputEl.value);
    renderLink();
});


function renderLink() {
    myLeads.forEach((item) => {
        let liElement = document.createElement('li');
    
        liElement.textContent = item;
        linkList.appendChild(liElement);
    });
}