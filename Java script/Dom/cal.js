function clearbox() {
    document.querySelector("#inp").value = "";

}

function dis(num) {
    document.querySelector("#inp").value += num
}

function res() {
    let data = document.querySelector("#inp").value;
    let res = eval(data)
    document.querySelector("#inp").value = res
}