function drawGraph2(data){
    list = []
    readData();
    print(list);
    function readData(){

        if(data == null){
            return;
        }
        if(data.left == null && data.right == null){
            return;
        }
    
    
    
        readData(data.left,list.push(root));
        readData(data.right,list.push(root));
    
    }
    
}





function makeCircle(){

}