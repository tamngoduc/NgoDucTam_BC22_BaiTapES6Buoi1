const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

const gettingColorList = (colorList) => {
  let content = `
        <button class="color-button ${colorList[0]} active"></button>
  `;

  for (let i = 1; i < colorList.length; i++) {
    content += `
        <button class="color-button ${colorList[i]}"></button>

    `;
  }

  document.getElementById("colorContainer").innerHTML = content;
};

gettingColorList(colorList);

const container = document.getElementById("colorContainer");
let btns = container.getElementsByClassName("color-button");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    btns[i].className += " active";
    document.getElementById("house").className = `house ${colorList[i]}`;
  });
}
