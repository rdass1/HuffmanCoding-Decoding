function drawGraph(data){
    var elem = document.querySelector(".graph");
    var two = new Two().appendTo(elem);
    var mouseX = -1;
    var mouseY = -1;
    
    var circle = two.makeCircle(0,0,10);

    circle.fill = '#FF8000';
    // And accepts all valid CSS color:
    circle.stroke = 'orangered';
    circle.linewidth = 5;

    var canvas = document.querySelector(".graph").getBoundingClientRect();
    print(canvas.x + ", "+canvas.y)
    print(two.width+","+two.height);
    print()
    document.onmousemove = function(event){
        //print(event.pageX+", "+event.pageY);
        // circle.position.x = event.pageX;
        // circle.position.y = event.pageY - canvas.y-circle.radius;
        two.update();
        
    }
    
    
    
}
