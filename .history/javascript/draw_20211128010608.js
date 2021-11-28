function drawGraph(data){
    var svg = d3.select('.graph').append("svg:svg")
                .attr("width",600)
                .attr("height",600)
                .append("svg:g")
                .attr("transform", "translate(40,0)")
    
    var tree = d3.layout.tree().size([400,400]);
    var diagonal = d3.svg.diagonal()
                        .projection(function(d){
                            return [d.y,d.x];
                        }
                        );
    var nodes = tree.nodes(data);
    var links = tree.links(nodes);

    print(data);
    print(nodes);
    print(links);

    var link = vis.selectALL("pathlink")
                    .data(links)
                    .enter().append("svg:path")
                    .attr("class","link")
                    .attr("d",diagonal);
    var node = vis.selectALL("g.node")
                        .data(nodes)
                        .enter().append("svg:g")
                        .attr("transform",
                            function(d){
                                return "translate(" + d.y + "," + d.x + ")";
                            }
                        
                        );

    node.append("svg:circle")
            .attr("r",5);
    
            node.append("svg:text")
            .attr("dx", function(d) { return d.children ? -8 : 8; })
            .attr("dy", 3)
            .attr("text-anchor", function(d) { return d.children ? "end" : "start"; })
            .text(function(d) { return d.name; })
      

}
