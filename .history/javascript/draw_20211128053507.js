function drawGraph(data){
    var elem = document.querySelector(".graph");
    var canvas = document.querySelector(".graph").getBoundingClientRect();
    var two = new Two().appendTo(elem);
    var mouseX = -1;
    var mouseY = -1;
    
   
    var circle = two.makeCircle(canvas.width/2,30,10);

    circle.fill = '#FF8000';
    // And accepts all valid CSS color:
    circle.stroke = 'orangered';
    circle.linewidth = 5;

    var circle2 = circle.clone(circle.parent);
    circle2.position.x -= 60;
    circle2.position.y += 80; 
    circle2.fill='#0B82E6';
    circle2.addTo;
    print(circle.position.x + "," + circle.position.y);
    print(circle2.position.x+ "," + circle2.position.y);

    var circle3 = circle2.clone(circle2.parent);
    circle3.position.x += 100
    

    //var line = two.makeArrow(circle.position.x,circle.position.y,40,40);
    
    var curveLX = circle.position.x-0;
    var curveLY = (circle.position.y+circle.radius)+15;

    var curveLX2 = circle2.position.x+10;
    var curveLY2 = circle2.position.y-30;

    var curveRX = circle.position.x-0;
    var curveRY = (circle.position.y+circle.radius)+15;

    var curveRX2 = circle3.position.x+10;
    var curveRY2 = circle3.position.y-30;

    // var path = two.makeCurve(circle.position.x, circle.position.y+circle.radius, curveX, curveY,curveX2,curveY2, circle2.position.x, circle2.position.y-circle.radius, true);
    var pathL = two.makeCurve(circle.position.x, circle.position.y+circle.radius, curveLX, curveLY,curveLX2,curveLY2, circle2.position.x, circle2.position.y-circle2.radius, true);
    pathL.noFill();
    pathL.linewidth = 3;


    
    var pathR = pathL.clone(pathL.parent);
    pathR.vertices[1].x = 10;
    pathR.vertices[2].x += 50;
    pathR.vertices[3].x = -curveRX2;
    
    
    


    
    
    document.onmousemove = function(event){
        // var curveX = circle.position.x-0;
        // var curveY = (circle.position.y+circle.radius)+15;

        // var curveX2 = circle2.position.x+10;
        // var curveY2 = circle2.position.y-30;
    
        // // print(event.pageX+", "+event.pageY);
        // circle2.position.x = event.pageX;
        // circle2.position.y = event.pageY - canvas.y-circle.radius;

        // path.vertices[3].x=event.pageX;
        // path.vertices[3].y=event.pageY - canvas.y-circle.radius;

        // two.render();
        // two.update();
        
    }
    two.render();
    two.update();
    
    
    
    
}
