"use strict";
const form = document.getElementById('phonebook-form');
const tableBody = document.getElementById('phonebook-tbody');
const addButton = document.getElementById('add-button');
function addEntry(name, phone) {
  const entry = {
    name: name,
    phone: phone
  };
  const entries = getEntries();
  entries.push(entry);
  localStorage.setItem('phonebook', JSON.stringify(entries));
  renderTable();
}
function getEntries() {
  const entries = localStorage.getItem('phonebook');
  return entries ? JSON.parse(entries) : [];
}
function renderTable() {
  tableBody.innerHTML = '';
  const entries = getEntries();
  entries.forEach((entry) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${entry.name}</td>
      <td>${entry.phone}</td>
      <td><button class="delete-button">Удалить</button></td>
    `;
    tableBody.appendChild(row);
  });
}
function deleteEntry(index) {
  const entries = getEntries();
  entries.splice(index, 1);
  localStorage.setItem('phonebook', JSON.stringify(entries));
  renderTable();
}
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  addEntry(name, phone);
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
});
tableBody.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-button')) {
    const index = Array.prototype.indexOf.call(e.target.parentNode.parentNode.children, e.target.parentNode);
    deleteEntry(index);
  }
});
renderTable();
