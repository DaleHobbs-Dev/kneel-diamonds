import { setMetalChoice } from "./TransientState.js"

export const handleMetalChoice = (event) => {
  setMetalChoice(parseInt(event.target.value))
}

export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let metalOptionsHTML = `
    <label for="metal" class="form-label">Metal Options: </label>
  <select id="metal" name="metal" class="form-select">
  `;

  metalOptionsHTML += `<option value="0">Select a metal option</option>`;

  metalOptionsHTML += metals.map(metal => {
    return `<option value="${metal.id}">${metal.metal}</option>`;
  }).join("");

  metalOptionsHTML += `</select>`;

  return metalOptionsHTML;
}