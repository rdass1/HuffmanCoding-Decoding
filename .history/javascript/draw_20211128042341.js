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

    var circle2 = circle.clone();
    circle2.position.x = 20;
    circle2.position.y = 30; 
    print(circle2)
    

    var line = two.makeArrow(circle.position.x,circle.position.y,40,40);
    
    
    
    // document.onmousemove = function(event){
    //     //print(event.pageX+", "+event.pageY);
    //     // circle.position.x = event.pageX;
    //     // circle.position.y = event.pageY - canvas.y-circle.radius;
    //     
        
    // }
    two.update();
    
    
    
}
