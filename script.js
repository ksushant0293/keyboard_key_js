const insert = document.querySelector("#insert");
const key = document.querySelector(".key");

window.addEventListener("keydown", (e)=>{
    key.remove();
    insert.innerHTML = `
    <table>
    <tr>
      <th>KEY</th>
      <th>CODE</th>
    </tr>
    <tr>
      <td>${e.key === '' ? "space" : e.key}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    `
});