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
    var a1 = two.anchor(10,10,10,5,5,10);
    var a2 = two.Anchor(20,20,20,15,15,20);
    a1.AppendCurveProperties();
    points.push(a1);
    points.push(a2);
    var curve = two.makeCurve(points);
    
    
    // document.onmousemove = function(event){
    //     //print(event.pageX+", "+event.pageY);
    //     // circle.position.x = event.pageX;
    //     // circle.position.y = event.pageY - canvas.y-circle.radius;
    //     
        
    // }
    two.update();
    
    
    
}
