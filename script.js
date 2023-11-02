function calcBmi() {
  let height = document.getElementById("height").value / 39.37;
  let weight = document.getElementById("weight").value;

  let bmi = (weight / (height * height)).toFixed(1);
  document.getElementById("result").innerText = `BMI is:  ${bmi}`;
}
