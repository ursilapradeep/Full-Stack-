function AddTextToList() {
    let input = document.getElementById("myInput").value;
    let li = document.createElement("li");
    let textFromInput = document.createTextNode(input);

    li.appendChild(textFromInput);

    document.querySelector(".myUl").appendChild(li);

}