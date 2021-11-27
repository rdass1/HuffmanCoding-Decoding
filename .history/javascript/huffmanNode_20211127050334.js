



class HuffmanNode{
    constructor(){
        this.data = 0;
        this.c = '';
        this.code = '';
        this.left = null;
        this.right = null;
    }
}

function HuffmanCoding(){
    this.string;
    this.sortedFrequency;
    //Stores the code for the characters (Dynamic Programming)
    this.codeDict;
    this.root;
}
HuffmanCoding.prototype = {
    ini: function(string){
        this.string = string;
        this.sortedFrequency = sortFrequency(frequency(string));
        this.codeDict = {};
        this.root = this.createTree();
    },
    createTree: function(){

        var charArray = [];
        var charFreq = [];

        this.sortedFrequency.forEach(x => charArray.push(x[0]));
        this.sortedFrequency.forEach(x => charFreq.push(x[1]));
       
        let n = charArray.length;
        let queue = [];



        for(var i = 0; i < n; i++){
            let huffNode = new HuffmanNode();
            huffNode.c = charArray[i];
            huffNode.data = charFreq[i];
            huffNode.left = null;
            huffNode.right = null;
            queue.push(huffNode);

        }

        var root = null;
        queue.sort(function(a,b){return a.data-b.data});
        if(queue.length > 0){
            root = queue[0];
        }
        while(queue.length>1){
            var x = queue[0];
            queue.shift();
            var y = queue[0];
            queue.shift();
            var f = new HuffmanNode();
            f.data = x.data + y.data;
            f.c = '-';
            f.left = x;
            f.right = y;
            root = f;
            
            queue.push(f);
            queue.sort(function(a,b){return a.data-b.data});
        }
        return root;
    },
    printCode: function(root, s){
        if(root == null){
            return ;
        }
        if (root.left == null && root.right == null ){
            root.code += s;
            this.codeDict[root.c] = s;
            for(var i = 0; i < root.data;i++){
                document.getElementById("charCodes").innerHTML += root.code;
            }
            document.getElementById("charCodesVerbose").innerHTML +=root.c + ":" + s+"<br>";
            return;
        }
        this.printCode(root.left,s+"0");
        this.printCode(root.right,s+"1");
        
    },
    printEncodedCode: function(root){
        
        for(var i = 0; i < this.string.length; i++){
            document.getElementById("charCodesInOrder").innerHTML += this.codeDict[this.string.substring(i,i+1)];
        }
        
    },
    deCode: function(code){
        var node = this.root;
        output = [];
        // for(var i = 0; i <= code.length+1; i++){
        //     if(code.substring(i,i+1)==0 && node.c == '-'){
        //         node = node.left;
        //     }
        //     else if(code.substring(i,i+1)==1 && node.c == '-'){
        //         node = node.right
        //     }
        //     else if(node.c != '-') {
        //         output.push(node.c);
        //         node = this.root;
        //     }
            
            
        // }
        var i = 0;
        
    // if(){
        
    // }
    return output;
    },
    clearTable: function(){
        document.getElementById("charCodesInOrder").innerHTML = "Original:<br>";
        document.getElementById("charCodes").innerHTML = "Sorted:<br>";
        document.getElementById("charCodesVerbose").innerHTML = "Table:<br>";
    }
}

