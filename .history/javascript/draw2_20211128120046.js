

var list = [];
var circles = [];

var elem = document.querySelector(".graph2");
var canvas = document.querySelector(".graph2").getBoundingClientRect();
var two = new Two().appendTo(elem);

const Circle = {
    radius : 20,
    fillColor : "#FF8000",
    strokeColor : "orangered",
    offsetX : 40,
    offsetY : 50,
    textSize : 10,
    textLeading: 50,
    textWeight: 900
}


function drawGraph2(data){
    console.clear();
    
    if(data != null){
        list = [];
        clearGraph();
        readData(data,data);
        //parseData(data);
        
        //print(data);
        print(circles.length);
        print(list);
        //print(list[(list.length-1)/2]);
        //print(list.reverse());
    }else{
        clearGraph();
        print(circles.length);
    }
}
let parseData = (rootNode) => {
	// make a queue array
	let queue = [];
	// populate it with the node that will be the root of your search
	queue.push(rootNode);

	// search the queue until it is empty
	while (queue.length > 0) {
	// assign the top of the queue to variable currentNode
		let currentNode = queue[0];
        list.push(currentNode);

		// if currentNode is the node we're searching for, break & alert
		

		// if currentNode has a left child node, add it to the queue.
		if (currentNode.left !== null) {
			queue.push(currentNode.left);
		}

		// if currentNode has a right child node, add it to the queue.
		if (currentNode.right !== null) {
			queue.push(currentNode.right);
		}
		// remove the currentNode from the queue.
		queue.shift();	
    }
}

function readData(root,parent){

    
    if(root.left == null && root.right == null){
        list.push(root);
        //make leaf circle here by checking if c is in the left or right node.
        makeCircle(root,parent,'leaf');
        print('return c: ' + root.c + " p: " + parent.data + ' ' + parent.c);
        return;
    }
    if(root.left != null){
        list.push(root);
        //make left circle here
        makeCircle(root,parent,'leaf');
        print('left c: '+ root.c + " p: " + parent.data + ' ' + parent.c);
        readData(root.left,root);
    }
    if(root.right != null){
        //make right circle: nvm
        makeCircle(root,parent,'leaf');
        // print('right c: '+ root.c+ " p: " + parent.data + ' ' + parent.c);
        readData(root.right,root);
    }

}

function clearGraph(){
    
    two.clear();
    two.release(circles);
    circles = [];
    two.update();
    two.render();
}




function makeCircle(root,parent,side){
    if(root===parent){

        var group = two.makeGroup();
        
        var circle = two.makeCircle(canvas.width/2,30+Circle.radius,Circle.radius);
        circle.fill = '#FF8000';
        circle.stroke = 'orangered';
        circle.linewidth = 5;

        const styles = {
            family: 'proxima-nova, sans-serif',
            size: Circle.textSize,
            leading: Circle.textLeading,
            weight: Circle.textWeight
        };
        var message = root.data+"\n "+root.c;
        
        var text = two.makeText(message,circle.position.x,circle.position.y,styles);

        group.add(circle);
        group.add(text);
        circles.push(group);
        
        print('root circle');
    }
    else if(side === 'leaf'){
        
        if(root = parent.left){
            var group = two.makeGroup();

            prevCircle = circles.reverse()[0];
            print(prevCircle);
            var x1 = prevCircle.children[0].position.x;
            var y1 = prevCircle.children[0].position.y;
            print(x1+", "+y1);


            var circle = two.makeCircle(x1-Circle.offsetX-Circle.radius,y1+Circle.offsetY+Circle.radius,Circle.radius);
            circle.fill = Circle.fillColor;
            circle.stroke = Circle.strokeColor;
            circle.linewidth = 5;

            const styles = {
                family: 'proxima-nova, sans-serif',
                size: Circle.textSize,
                leading: Circle.textLeading,
                weight: Circle.textWeight
            };
            var message = root.data+"\n "+root.c;
            
            var text = two.makeText(message,circle.position.x,circle.position.y,styles);
    
            group.add(circle);
            group.add(text);
            circles.push(group);
            print('left leaf circle');
            
        }
        else if (root === parent.right){
            var group = two.makeGroup();


            prevCircle = circles.reverse()[0];
            var x1 = prevCircle.children[0].position.x;
            var y1 = prevCircle.children[0].position.y;
            

            gradCircle = circles.reverse()[0];
            var x2 = gradCircle.children[0].position.x;
            var y2 = gradCircle.children[0].position.y;


            var newX = x2+(x2-x1);

            print((x2-x1) + ", " + (newX-x2)+"," + newX);
            
            var circle = two.makeCircle(newX,y1,Circle.radius);
            circle.fill = Circle.fillColor;
            circle.stroke = Circle.strokeColor;
            circle.linewidth = 5;

            const styles = {
                family: 'proxima-nova, sans-serif',
                size: Circle.textSize,
                leading: Circle.textLeading,
                weight: Circle.textWeight
            };
            var message = root.data+"\n "+root.c;
            
            var text = two.makeText(message,circle.position.x,circle.position.y,styles);
    
            group.add(circle);
            group.add(text);
            circles.push(group);
            print('right leaf circle');
        }

    }
    
    two.update();
}