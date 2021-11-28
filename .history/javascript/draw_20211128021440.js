function drawGraph(data){
    var elem = document.querySelector(".graph");
    var two = new Two(params).appendTo(elem);

    var circle = two.makeCircle(30,40,60);

    circle.fill = '#FF8000';
    // And accepts all valid CSS color:
    circle.stroke = 'orangered';
    circle.linewidth = 5;

    two.update();
}
