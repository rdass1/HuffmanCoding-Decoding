function drawGraph(data){
    var elem = document.querySelector(".graph");
    var two = new Two().appendTo(elem);
    var mouseX = -1;
    var mouseY = -1;
    document.onmousemove = function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    }
    var circle = two.makeCircle(mouseX,mouseY,60);

    circle.fill = '#FF8000';
    // And accepts all valid CSS color:
    circle.stroke = 'orangered';
    circle.linewidth = 5;
    print()
    two.update();
}
