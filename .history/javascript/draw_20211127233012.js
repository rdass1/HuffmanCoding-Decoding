function drawGraph(data){
    root = d3.hierarchy(data,function(d){
        if(d.left){
            d.children.push(d.left);
        }
    });

}
