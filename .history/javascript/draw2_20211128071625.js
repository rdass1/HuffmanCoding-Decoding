var list = [];


function drawGraph2(data){
    list = [];
    readData(data);
    console.clear();
    print(data);
    print(list);
    print(list[(list.length-1)/2]);
    print(list);

    
}

function readData(root){

    if(root.left != null){
        list.push(root);
        readData(root.left);
    }
    if(root.right != null){
        readData(root.right);
    }
    if(root.left == null && root.right == null){
        list.push(root);
        return;
    }

}



function makeCircle(){

}