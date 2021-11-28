function drawGraph2(data){
    list = readData(data,[]);

    
}

function readData(root,list){

    if(root == null){
        return;
    }
    if(root.left )



    readData(root.left,list.push(root));
    readData(root.right,list.push(root));

}



function makeCircle(){

}