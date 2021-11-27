//Stores the code for the characters (Dynamic Programming)
var codeDict = {};



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
}
HuffmanCoding.prototype = {
    ini: function(string){
        this.string = string;
        this.sortedFrequency = sortFrequency(frequency(string));
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
    findFrequency: function(char){
        for(var i = 0; i< this.sortedFrequency.length;i++){
            if(char == this.sortedFrequency[i][0]){
                return this.sortedFrequency[i][1];
            }
        }
        
    },
    //returns a tree node that has matching c value
    //!Inefficient Linear Code
    searchTreeNode: function(root,key){
        if (root.data == key){
            return root;
        }
        if(root.data < key){
            return this.searchTreeNode(root.right,key);
        }
        return this.searchTreeNode(root.left,key);
        
        
    },
    printCode: function(root, s){
        if(root == null){
            return ;
        }
        if (root.left == null && root.right == null ){
            root.code += s;
            for(var i = 0; i < root.data;i++){
                document.getElementById("charCodesInOrder").innerHTML += root.code;
            }
            document.getElementById("charCodesVerbose").innerHTML +=root.c + ":" + s+"<br>";
            return;
        }
        this.printCode(root.left,s+"0");
        this.printCode(root.right,s+"1");
        
    },
    printEncodedCode: function(root){
        if(root == null){
            return;
        }
        if (root.left == null && root.right == null){
            for(var i = 0; i < root.data;i++){
                document.getElementById("charCodes").innerHTML += root.code;
            }
            return;
        }
        this.printEncodedCode(root.left);
        this.printEncodedCode(root.right);
        
    },
    clearTable: function(){
        document.getElementById("charCodes").innerHTML = "";
        document.getElementById("charCodesVerbose").innerHTML = "";
    }
}

