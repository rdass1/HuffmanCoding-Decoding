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

    var circle2 = circle.clone();
    circle2.position.x = 20;
    circle2.position.y = 30; 
    circle2.fill='#0B82E6';
    circle2.addTo;
    print(circle2.position.x);
    

    var line = two.makeArrow(circle.position.x,circle.position.y,40,40);
    

    // var path = two.makeCurve(10, 10, 100, 20, 150, 15, true);


    
    
    document.onmousemove = function(event){
        // print(event.pageX+", "+event.pageY);
        // circle2.position.x = event.pageX;
        // circle2.position.y = event.pageY - canvas.y-circle.radius;
        
        two.render();
        two.update();
    }
    
    
    
    
}
