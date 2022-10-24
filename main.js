const curt = document.querySelector("h5");
const select = document.querySelector(".select");
const button = document.getElementsByTagName("button");

for (const cart of button) {
  cart.addEventListener("click", (e) => {
    const add = Number(curt.getAttribute("data-count") || 0);
    curt.setAttribute("data-count", add + 1);
    curt.classList.add("zero");

    // image --animation to cart ---//
    const image = e.target.parentNode.querySelector("img");
    const span = e.target.parentNode.querySelector("span");
    const s_image = image.cloneNode(false);
    span.appendChild(s_image);
    span.classList.add("active");
    setTimeout(() => {
      span.classList.remove("active");
      span.removeChild(s_image);
    }, 500);

    // copy and paste //
    const parent = e.target.parentNode;
    const clone = parent.cloneNode(true);
    select.appendChild(clone);
    clone.lastElementChild.innerText = "Buy-now";

    if (clone) {
      curt.onclick = () => {
        select.classList.toggle("display");
      };
    }
  });
}
