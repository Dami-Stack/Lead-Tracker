let myLead = [];
const inputEl = document.getElementById("input-el");
const save = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let leadsFromLs = JSON.parse(localStorage.getItem(myLead));
console.log(leadsFromLs);

if (leadsFromLs) {
  myLead = leadsFromLs
  renderLeads()
}




save.addEventListener("click", function () {
  myLead.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLead", JSON.stringify(myLead));
  renderLeads();
  console.log(localStorage.getItem("myLead"));
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLead.length; i++) {
    listItems += `
    <li>
          <a target='_blank' href='${myLead[i]}'>${myLead[i]}</a>
    </li>`;

    ulEl.innerHTML = listItems;
  }
}
