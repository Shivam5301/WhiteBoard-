let boardTop = canvasBoard.getBoundingClientRect().top;
let boardLeft = canvasBoard.getBoundingClientRect().left;
let iX, iY, fX, fY;
let drawingMode = false;

body.addEventListener("mousedown", function (e) {
    iX = e.clientX - boardLeft;
    iY = e.clientY - boardTop;
    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = true;

    }
})

body.addEventListener("mouseup", function (e) {
    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = false;
    } else if (cTool == "rect" || cTool == "line") {
        // rect line ka code
        fX = e.clientX - boardLeft;
        fY = e.clientY - boardTop;

        let width = fX - iX;
        let heigth = fY - iY;

        if (cTool == "rect") {
            tool.strokeRect(iX, iY, width, heigth);
        } else if (cTool == "line") {
            tool.beginPath();
            tool.moveTo(iX, iY);
            tool.lineTo(fX, fY);
            tool.stroke();
            console.log("line tool is pendong");
        }
    }
})

body.addEventListener("mousemove", function (e) {
    if (drawingMode == false) {
        return;
    }
    if (cTool == "pencil") {
        fX = e.clientX - boardLeft;
        fY = e.clientY - boardTop;
        tool.beginPath();
        tool.moveTo(iX, iY);
        tool.lineTo(fX, fY);
        tool.stroke();
        iX = fX;
        iY = fY;
    }
})