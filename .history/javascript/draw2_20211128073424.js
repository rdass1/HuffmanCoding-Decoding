var list = [];


function drawGraph2(data){
    list = [];
    //readData(data);
    
    console.clear();
    print(data);
    print(list);
    //print(list[(list.length-1)/2]);
    //print(list.reverse());

    
}
let BreadthFirstSearch = (tree, rootNode, searchValue) => {
	// make a queue array
	let queue = [];
	// populate it with the node that will be the root of your search
	queue.push(rootNode);

	// search the queue until it is empty
	while (queue.length > 0) {
	// assign the top of the queue to variable currentNode
		let currentNode = queue[0];
		console.log("Current node is:" + currentNode.value);
        list.push(currentNode);

		// if currentNode is the node we're searching for, break & alert
		if (currentNode.value === searchValue) {
			console.log("Found it!");
			return;
		}

		// if currentNode has a left child node, add it to the queue.
		if (currentNode.left !== null) {
			queue.push(tree[currentNode.left]);
		}

		// if currentNode has a right child node, add it to the queue.
		if (currentNode.right !== null) {
			queue.push(tree[currentNode.right]);
		}
		// remove the currentNode from the queue.
		queue.shift();	
    }
	console.log("Sorry, no such node found :(");	
}

function readData(root){

    
    if(root.left == null && root.right == null){
        list.push(root);
        return;
    }
    if(root.left != null){
        list.push(root);
        readData(root.left);
    }
    if(root.right != null){
        readData(root.right);
    }

}



function makeCircle(){

}