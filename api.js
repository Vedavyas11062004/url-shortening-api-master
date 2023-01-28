const inputele = document.querySelector("#input");
const button = document.querySelector("#button");
const newdiv = document.querySelector(".dynamic-div");
const errdiv=document.querySelector(".error-div")

var url = "";

inputele.addEventListener("change", (e) => {
  console.log(e.target.value);
  url = e.target.value;
});
button.addEventListener("click", (e) => {
  console.log("clicked !");
  e.preventDefault();
  console.log("url= ", url);
  fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((response) => response.json())
    .then((response) => {
      console.log("res: ", response.result.full_short_link);
      newdiv.innerHTML += `<div class="dyn-div">
      <div class="dyn-left">https://${url}</div>
      <div class="dyn-right">
      <div class="shorten-url">${response.result.full_short_link}</div>
      <button class="copy-btn" onclick=' {navigator.clipboard.writeText("${response.result.full_short_link}");setTextTimeout(event.target, "copied..", "copy")}'>copy</button>
      </div>
       </div>`;
    })
    .catch((err) => {
      console.log(err);
      errdiv.innerHTML = `<div class="error-msg">please check the url</div>`
      const errmsg=document.querySelector(".error-msg")
      setTimeout(() => {
        errmsg.remove()
      }, 3000);
    });
});

// Util funcs
/**
 * @param {HTMLElement} element 
 * @param {string} text 
 * @param {string} defaultText 
 * @param {number} time 
 */
function setTextTimeout(element, text, defaultText, time = 3000){
  element.innerText = text;
  element.style.backgroundColor = "var(--clr-primary-DarkViolet)"
  setTimeout(() => {
    element.innerText = defaultText;
    element.style.backgroundColor = "var(--clr-primary-cyan)"
  }, time);
}
