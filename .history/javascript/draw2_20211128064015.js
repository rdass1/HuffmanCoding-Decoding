function drawGraph2(data){
    list = []
    readData();
    print(list);
    function readData(root){

        if(root == null){
            return;
        }
        if(root.left == null && root.right == null){
            return list;
        }
    
    
    
        readData(root.left,list.push(root));
        readData(root.right,list.push(root));
    
    }
    
}





function makeCircle(){

}