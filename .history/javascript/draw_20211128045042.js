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
    

    //var line = two.makeArrow(circle.position.x,circle.position.y,40,40);
    
    var curveX = (circle.position.x+circle2.position.x)/2-10;
    var curveY = (circle.position.y+circle2.position.y)/2-10;
    
    var curveX = (circle.position.x+circle2.position.x)/2-10;
    var curveY = (circle.position.y+circle2.position.y)/2-10;


    var path = two.makeCurve(circle.position.x, circle.position.y, curveX, curveY, circle2.position.x, circle2.position.y, true);
    path.noFill();
    path.linewidth = 3;


    
    
    document.onmousemove = function(event){
        // print(event.pageX+", "+event.pageY);
        // circle2.position.x = event.pageX;
        // circle2.position.y = event.pageY - canvas.y-circle.radius;
        
        two.render();
        two.update();
    }
    
    
    
    
}
