var ck = document.querySelector("#clk")
ck.addEventListener("click", () => {
    ck.textContent = "clicked"
    ck.style.color = "red"
})
var dbl = document.querySelector("#dbclk")
dbl.addEventListener("dblclick", () => {
    dbl.textContent = "double clicked"
    dbl.style.color = "blue"
})
var ove = document.querySelector("#over")
ove.addEventListener("mouseover", () => {
    ove.style.color = "yellow"
    ove.textContent = "over me"
})
ove.addEventListener("mouseover", () => {
    ove.color = "yellow"
    ove.textContent = "over me"
})
ove.addEventListener("mouseover", () => {
    ove.style.color = "green "
    ove.textContent = " not over me"
})