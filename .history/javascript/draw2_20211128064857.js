
function drawGraph2(data){
    temp = [];
    list = readData(data,temp);
    print(list);

    
}

function readData(root,list){

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
        return list;
    }



    readData(root.left,list.push(root));
    readData(root.right,list.push(root));

}



function makeCircle(){

}