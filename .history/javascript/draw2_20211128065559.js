var list = [];


function drawGraph2(data){
    list = [];
    readData(data);
    console.clear();
    print(data);
    print(list);

    
}

function readData(root){

    if(root == null){
        return;
    }

    if(root.left != null){
        list.push(root);
        readData(root.left);
    }
    if(root.right != null){
        list.push(root);
        readData(root.right);
    }
    if(root.left == null && root.right == null){
        return;
    }



    readData(root.left,list.push(root));
    readData(root.right,list.push(root));

}



function makeCircle(){

}