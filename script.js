let myLead = [];
const inputEl = document.getElementById("input-el");
const save = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteAll = document.getElementById("delete-btn");
const leadsFromLs = JSON.parse(localStorage.getItem(myLead));
const tabBtn = document.getElementById("save-tab");

if (leadsFromLs) {
  myLead = leadsFromLs;
  render(myLead);
}



tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLead.push(tabs[0].url)
    localStorage.setItem("myLead", JSON.stringify(myLead));
    render(myLead);
  })

  
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
          <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
          </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

deleteAll.addEventListener("dblclick", function () {
  console.log("double clicked");
  localStorage.clear();
  myLead = [];
  render(myLead);
});

save.addEventListener("click", function () {
  myLead.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLead", JSON.stringify(myLead));
  render(myLead);
});
