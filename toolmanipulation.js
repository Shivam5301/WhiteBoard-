// tool change ka logic
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box");


pencil.addEventListener("click", function (e) {
    if (cTool == "pencil") {
        options[0].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        cTool = "pencil";
        tool.strokeStyle = "black";
        tool.lineWidth = pencilSize;
    }
})

eraser.addEventListener("click", function (e) {
    if (cTool == "eraser") {
        options[1].style.display = "flex";
    } else {
        console.log(tool.strokeStyle);
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        cTool = "eraser";
        tool.strokeStyle = "white";
        tool.lineWidth = eraserSize;
    }
})

rect.addEventListener("click", function (e) {
    if (cTool == "rect") {
        options[2].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        cTool = "rect";
        tool.strokeStyle = "red";
        tool.lineWidth = rectSize;
    }
})

line.addEventListener("click", function (e) {
    if (cTool == "line") {
        options[3].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        cTool = "line";
        tool.strokeStyle = "black";
        tool.lineWidth = lineSize;
    }
})


// color change ka logic
let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");

redColor.addEventListener("click", function () {
    tool.strokeStyle = "lightpink";
})

greenColor.addEventListener("click", function () {
    tool.strokeStyle = "lightgreen";
})
blueColor.addEventListener("click", function () {
    tool.strokeStyle = "Lightblue";
})



// size change ka logic
let pencilSize = 2;
let eraserSize = 2;
let rectSize = 2;
let lineSize = 2;

let sizeBoxArr = document.querySelectorAll(".size-box");

sizeBoxArr[0].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e.target.classList;
    let firstClass = allClasses[0];
    let test = elems.includes(firstClass);

    if (test) { 
        if (firstClass == "size1") {
            pencilSize = 3;
        } else if (firstClass == "size2") {
            pencilSize = 6;
        } else if (firstClass == "size3") {
            pencilSize = 9;
        } else if (firstClass == "size4") {
            pencilSize = 12;
        }
    }
    console.log("pencil Size =" + pencilSize);
    tool.lineWidth = pencilSize;
})

sizeBoxArr[1].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e.target.classList;
    let firstClass = allClasses[0];
    let test = elems.includes(firstClass);

    if (test) { 
        if (firstClass == "size1") {
            eraserSize = 3;
        } else if (firstClass == "size2") {
            eraserSize = 6;
        } else if (firstClass == "size3") {
            eraserSize = 9;
        } else if (firstClass == "size4") {
            eraserSize = 12;
        }
    }
    console.log("eraser Size =" + eraserSize);
    tool.lineWidth = eraserSize;
})

sizeBoxArr[2].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e.target.classList;
    let firstClass = allClasses[0];
    let test = elems.includes(firstClass);

    if (test) { 
        if (firstClass == "size1") {
            rectSize = 3;
        } else if (firstClass == "size2") {
            rectSize = 6;
        } else if (firstClass == "size3") {
            rectSize = 9;
        } else if (firstClass == "size4") {
            rectSize = 12;
        }
    }
    console.log("rect Size =" + rectSize);
    tool.lineWidth = rectSize;
})

sizeBoxArr[3].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e.target.classList;
    let firstClass = allClasses[0];
    let test = elems.includes(firstClass);

    if (test) { 
        if (firstClass == "size1") {
            lineSize = 3;
        } else if (firstClass == "size2") {
            lineSize = 6;
        } else if (firstClass == "size3") {
            lineSize = 9;
        } else if (firstClass == "size4") {
            lineSize = 12;
        }
    }
    console.log("line Size =" + lineSize);
    tool.lineWidth = lineSize;
})

