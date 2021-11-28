function drawGraph(data){
    root = d3.hierarchy(data,function(d){
        if(d.left){
            d.data.push(d.left);
        }
        if(d.right){
            d.data.push(d.right);
        }
        print(d.data);
        return d.children
    });

}
