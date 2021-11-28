function drawGraph(data){
    var elem = document.querySelector(".graph");
    var two = new Two().appendTo(elem);
    var mouseX = -1;
    var mouseY = -1;
    
    var circle = two.makeCircle(mouseX,mouseY,10);

    circle.fill = '#FF8000';
    // And accepts all valid CSS color:
    circle.stroke = 'orangered';
    circle.linewidth = 5;
    document.onmousemove = function(event){
        print(event.pageX+", "+event.pageY);
        circle.position.x = event.pageX;
        circle.position.y = event.pageY-elem.getAttribute();
        two.update();
        
    }
    
    
    
}
