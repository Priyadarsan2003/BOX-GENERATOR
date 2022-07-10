const table = document.getElementById("grid");
const button = document.getElementById("generateButton");

button.onclick = ()=> {
    let num = document.getElementById("textBox").value;
    let i;
    for(i = 1; i <= num; i++) {
        let box = document.createElement("img");
        box.src = "./assets/gift.jpg"
        table.append(box);
        box.style.height = "75px";
        box.style.width = "75px";
        box.style.margin = "5px";
    }
    button.hidden = true;
}