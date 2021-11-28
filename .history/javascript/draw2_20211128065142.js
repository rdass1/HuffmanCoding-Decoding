var list = [];


function drawGraph2(data){
    readData(data);
    print(list);

    
}

function readData(roo){

    if(root == null){
        return;
    }

    if(root.left != null){
        readData(root.left,list.push(root));
    }
    if(root.right != null){
        readData(root.right,list.push(root));
    }
    if(root.left == null && root.right == null){
        return;
    }



    readData(root.left,list.push(root));
    readData(root.right,list.push(root));

}



function makeCircle(){

}