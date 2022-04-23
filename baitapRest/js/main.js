const getAverageScore = (...numbers) => {
  let total = 0;
  for (let value of numbers) {
    total += parseFloat(value);
  }
  let avg = total / numbers.length;
  return avg;
};

document.getElementById("btnKhoi1").addEventListener("click", () => {
  let toan = document.getElementById("inpToan").value;
  let ly = document.getElementById("inpLy").value;
  let hoa = document.getElementById("inpHoa").value;
  let averageScore = getAverageScore(toan, ly, hoa);
  document.getElementById("tbKhoi1").innerHTML = averageScore;
});

document.getElementById("btnKhoi2").addEventListener("click", () => {
  let van = document.getElementById("inpVan").value;
  let su = document.getElementById("inpSu").value;
  let dia = document.getElementById("inpDia").value;
  let eng = document.getElementById("inpEnglish").value;
  let averageScore = getAverageScore(van, su, dia, eng);
  document.getElementById("tbKhoi2").innerHTML = averageScore;
});
