

var list = [];
var circles = [];

var elem = document.querySelector(".graph2");
var canvas = document.querySelector(".graph").getBoundingClientRect();
var two = new Two().appendTo(elem);


function drawGraph2(data){
    console.clear();
    if(data != null){
        list = [];
        
        readData(data,data);
        //parseData(data);
        
        //print(data);
        print(list);
        //print(list[(list.length-1)/2]);
        //print(list.reverse());
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
        print('return c: ' + root.c + " p: " + parent.data + ' ' + parent.c);
        return;
    }
    if(root.left != null){
        list.push(root);
        //make left circle here
        makeCircle(root,parent,'left');
        print('left c: '+ root.c + " p: " + parent.data + ' ' + parent.c);
        readData(root.left,root);
    }
    if(root.right != null){
        //make right circle: nvm
        // print('right c: '+ root.c+ " p: " + parent.data + ' ' + parent.c);
        readData(root.right,root);
    }

}


function makeCircle(root,parent,side){
    if(root===parent){
        var circle = two.makeCircle(canvas.width/2,30,10);
        circle.fill = '#FF8000';
        circle.stroke = 'orangered';
        circle.linewidth = 5;
    }
    else if(side === 'left'){
        print('')
    }
    else if(side === 'right'){
        print('right circle');
    }
    two.update();
}