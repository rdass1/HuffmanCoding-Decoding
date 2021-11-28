function drawGraph(data){
    var svg = d3.select('.graph').append("svg:svg")
                .attr("width",600)
                .attr("height",600)
                .append("svg:g")
                .attr("transform", "translate(40,0)")
    
    var tree = d3.layout.tree().size([400,400]);
    var diagonal = d3.svg.diagonal()
                        .projection(function(d){
                            
                        }
                        );

}
