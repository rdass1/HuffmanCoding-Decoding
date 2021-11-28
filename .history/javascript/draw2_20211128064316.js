function drawGraph2(data){
    var list = [];
    readData();
    print(list);
    function readData(){

        if(data == null){
            return;
        }

        if(data.left !=){
            
        }



        if(data.left == null && data.right == null){
            return;
        }
    
    
    
        readData(data.left,list.push(data));
        readData(data.right,list.push(data));
    
    }
    
}





function makeCircle(){

}