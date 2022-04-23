const text = document.getElementsByClassName("heading")[0];
const spreadText = [...text.innerHTML];

let content = "";

for (let value of spreadText) {
  content += `<span>${value}</span>`;
}

text.innerHTML = content;
