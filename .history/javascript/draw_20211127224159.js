function drawGraph(root){
    var svg = d3.select("canvas").append("svg")
                        .attr("width",600)
                        .attr("height",600)
                        .append("g").attr("transform","translate(50,50");
    var tree = d3.tree().size([500,300]);
    var info = tree(root);
}