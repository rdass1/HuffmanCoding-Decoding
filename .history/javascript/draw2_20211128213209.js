

var list = [];
var circles = [];

var elem = document.querySelector(".graph2");
var canvas = document.querySelector(".graph2").getBoundingClientRect();
var two = new Two().appendTo(elem);

var test = [];
var leafCounter = 0;
var leftSpacingTracker = 0;




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
        console.log(two.width +", " + two.height);
        console.log(canvas.width +", " + canvas.height);
        list = [];
        test = [];
        leafCounter = 0;
        clearGraph();
        parseData(data);
        
        readData(data,data);
        var numLevels = 1 + Math.floor(Math.log2(list.length));
        print("Levesl"+numLevels);
        
        var maxNumCircles = [];
        
        // for(var i = 1; i <= numLevels;i++){
        //     maxNumCircles.push(getCountAtLevel(data,0,i));
        // }
        
        // maxNumCircles = Math.max.apply(Math,maxNumCircles);
        //print(data);
        //print(circles.length);
        //print(list);
        //print(test);
        assignOddEven(data,true);
        print(list);
        //print(numLevels);
        print(leafCounter);
        print(two.width/leafCounter);
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
    var idCounter = 0
	// search the queue until it is empty
	while (queue.length > 0) {
	// assign the top of the queue to variable currentNode
		let currentNode = queue[0];
        test.push(currentNode);

        if(currentNode.left == null && currentNode.right == null){
            leafCounter++;
        }

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

function assignOddEven(root, isOdd){
        // If empty tree
        if (root == null){
            return;
        }
        
 
        // If current node is of odd level
        if (isOdd == true){
            root.isOdd = true;;
        }else{
            root.isOdd = false;
        }
        
        
 
        // Recur for children with isOdd
        // switched.
        assignOddEven(root.left, !isOdd);
        assignOddEven(root.right, !isOdd);
}

function getCountAtLevel(root,curr,desired){
    if(root.left == null && root.right == null){
        return 1;
    }
    
    return getCountAtLevel(root.left,curr++,desired) + getCountAtLevel(root.right,curr++,desired);
}

function readData(root,parent){

    
    if(root.left == null && root.right == null){
        list.push(root);
        
        //make leaf circle here by checking if c is in the left or right node.
        makeCircle(root,parent,'leaf');
        //print('return c: ' + root.c + " p: " + parent.data + ' ' + parent.c);
        return;
    }
    if(root.left != null){
        list.push(root);
        //make left circle here
        makeCircle(root,parent,'leaf');
        //print('left c: '+ root.c + " p: " + parent.data + ' ' + parent.c);
        readData(root.left,root);
    }
    if(root.right != null){
        //make right circle: nvm
        
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
        
        var circle = two.makeCircle(two.width/2,30+Circle.radius,Circle.radius);
        circle.fill = '#FF8000';
        circle.stroke = 'orangered';
        circle.linewidth = 5;

        
        const styles = {
            family: 'proxima-nova, sans-serif',
            size: Circle.textSize,
            leading: Circle.textLeading,
            weight: Circle.textWeight
        };
        var data = root.data;
        
        var text = two.makeText(data,circle.position.x,circle.position.y-5,styles);
        
        var char = root.c;
        
        var text2 = two.makeText(char,circle.position.x,circle.position.y+5,styles);

        

        group.add(circle);
        group.add(text);
        group.add(text2);
        circles.push(group);
        
        print('root circle');
    }
    else if(side === 'leaf'){
        
        if(root == parent.left){
            var group = two.makeGroup();
            
            prevCircle = circles[0];
            
            for(var i = 0; i < circles.length; i++){
                if(circles[i].children[1].value==parent.data && circles[i].children[2].value==parent.c){
                    prevCircle = circles[i];
                }
            }
            
            var x1 = prevCircle.children[0].position.x;
            var y1 = prevCircle.children[0].position.y;
            
            var leftSpacingTracker =leftSpacingTracker+ () two.width/leafCounter;
            
            // if(root.id % 2 != 0){
            //     extraOffset = Circle.radius * -3;
            // }
            print(extraOffset);
            var circle = two.makeCircle(extraOffset,y1+Circle.offsetY+Circle.radius,Circle.radius);
            circle.fill = Circle.fillColor;
            circle.stroke = Circle.strokeColor;
            circle.linewidth = 5;
            print("pos: "+circle.position.x);
            
            

            const styles = {
                family: 'proxima-nova, sans-serif',
                size: Circle.textSize,
                leading: Circle.textLeading,
                weight: Circle.textWeight
            };
            var data = root.data;
            
            var text = two.makeText(data,circle.position.x,circle.position.y-5,styles);
            
            var char = root.c;
            
            var text2 = two.makeText(char,circle.position.x,circle.position.y+5,styles);

            
    
            group.add(circle);
            group.add(text);
            group.add(text2);
            circles.push(group);
            print('left leaf circle');
            
        }
        else{
            var group = two.makeGroup();


            prevCircle = null;
            for(var i = 0; i < circles.length; i++){
                if(circles[i].children[1].value==parent.data && circles[i].children[2].value==parent.c){
                    prevCircle = circles[i];
                }
            }
            var x1 = prevCircle.children[0].position.x;
            var y1 = prevCircle.children[0].position.y;
            

            gradCircle = circles.reverse()[0];
            var x2 = gradCircle.children[0].position.x;
            var y2 = gradCircle.children[0].position.y;


            var newX = x2+(x2-x1);
            var extraOffset = x1 + (x1/leafCounter);
            
            var circle = two.makeCircle(x1+Circle.offsetX+Circle.radius,y1+Circle.offsetY+Circle.radius,Circle.radius);
            circle.fill = Circle.fillColor;
            circle.stroke = Circle.strokeColor;
            circle.linewidth = 5;
            // if(root.id == 2){
            //     circle.position.x = x1+(x1/(1 + Math.floor(Math.log2(test.length))));
            // }

            
            const styles = {
                family: 'proxima-nova, sans-serif',
                size: Circle.textSize,
                leading: Circle.textLeading,
                weight: Circle.textWeight
            };
            var data = root.data;
            
            var text = two.makeText(data,circle.position.x,circle.position.y-5,styles);
            
            var char = root.c;
            
            var text2 = two.makeText(char,circle.position.x,circle.position.y+5,styles);

            
    
            group.add(circle);
            group.add(text);
            group.add(text2);
            circles.push(group);
            print('right leaf circle');
        }

    }
    
    two.update();
}