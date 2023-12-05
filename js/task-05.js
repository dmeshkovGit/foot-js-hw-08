function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBotton = document.querySelector(".change-color")
const colorName = document.querySelector(".color")
const body = document.body
changeBotton.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color
  colorName.innerHTML = ` - <table>
  <tbody>
  <tr>
  <td>RGB</td>
  <td>${body.style.backgroundColor}</td>
  </tr>
  <tr>
  <td>HEX</td>
  <td>${color}</td>
  </tr>
  </tbody>
  </table>`;
})