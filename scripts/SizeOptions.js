export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes");
    const sizes = await response.json();

    let sizeOptionsHTML = `
    <label for="size" class="form-label">Size Options: </label>
  <select id="size" name="size" class="form-select">
  `;

    sizeOptionsHTML += `<option value="0">Select a size option</option>`;

    sizeOptionsHTML += sizes.map(size => {
        return `<option value="${size.carats}">${size.carats} carats</option>`;
    }).join("");

    sizeOptionsHTML += `</select>`;

    return sizeOptionsHTML;
}