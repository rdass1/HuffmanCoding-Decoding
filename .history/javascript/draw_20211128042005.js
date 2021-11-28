function drawGraph(data){
    var elem = document.querySelector(".graph");
    var canvas = document.querySelector(".graph").getBoundingClientRect();
    var two = new Two().appendTo(elem);
    var mouseX = -1;
    var mouseY = -1;
    
    
    print(two.width+","+two.height);
    var circle = two.makeCircle(canvas.width/2,30,10);

    circle.fill = '#FF8000';
    // And accepts all valid CSS color:
    circle.stroke = 'orangered';
    circle.linewidth = 5;

    var line = two.makeArrow(circle.position.x,circle.position.y,40,40);
    points = [];
    var points = [
        new Two.Anchor(10, 10, 0, 0, 0, 0, Two.Commands.move),
        new Two.Anchor(20, 10, 0, 0, 0, 0, Two.Commands.curve),
        new Two.Anchor(10, 10, 0, 0, 0, 0, Two.Commands.curve),
        new Two.Anchor(-10, 10, 0, 0, 0, 0, Two.Commands.curve),
        new Two.Anchor(-10, -10, 0, 0, 0, 0, Two.Commands.close)
      ];
      var bezierPath = new Two.Path(points);
      bezierPath.automatic = false;
      two.add(bezierPath);
    
    
    // document.onmousemove = function(event){
    //     //print(event.pageX+", "+event.pageY);
    //     // circle.position.x = event.pageX;
    //     // circle.position.y = event.pageY - canvas.y-circle.radius;
    //     
        
    // }
    two.update();
    
    
    
}
