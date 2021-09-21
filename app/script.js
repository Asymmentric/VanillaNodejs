let sendBtn = document.querySelector('button')
let form = document.querySelector('form');
let method = form.method;
let action = form.action;
sendBtn.addEventListener("click", () => {
    let val1 = document.getElementById("inp1").value;
    let val2 = document.getElementById("inp2").value;
    console.log(fName + lName);

    let xhr = new XMLHttpRequest();
    let data = {
        fName: val1,
        lName: val2
    }
    console.log(data);
    xhr.open(method, action, true)
    xhr.send(JSON.stringify(data));
})