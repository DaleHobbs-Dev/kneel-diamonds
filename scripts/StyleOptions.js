export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles");
    const styles = await response.json();

    debugger;
    console.log(styles);

    let styleOptionsHTML = `
    <label for="style" class="form-label">Style Options: </label>
  <select id="style" name="style" class="form-select">
  `;

    styleOptionsHTML += `<option value="0">Select a style option</option>`;

    styleOptionsHTML += styles.map(style => {
        return `<option value="${style.id}">${style.style}</option>`;
    }).join("");

    styleOptionsHTML += `</select>`;

    return styleOptionsHTML;
}