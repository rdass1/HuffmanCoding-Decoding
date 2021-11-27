class HuffmanNode{
    constructor(){
        this.data = 0;
        this.c = '';
        this.left = null;
        this.right = null;
    }
}

function HuffmanCoding(){

}
HuffmanCoding.prototype = {
    createTree: function(string){
        var sortedFrequency = sortFrequency(frequency(string));
        

        var charArray = [];
        var charFreq = [];

        sortedFrequency.forEach(x => charArray.push(x[0]));
        sortedFrequency.forEach(x => charFreq.push(x[1]));

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
        this.printCode(root,"");
        return root;
    },
    printCode: function(root, s){
        if (root.left == null && root.right == null && ((root.c).toLowerCase()) != ((root.c).toUpperCase())){
            document.getElementById("charCodes").innerHTML +=root.c + ":" + s+"<br>";
            console.log('hi')
            return;
        }
        printCode(root.left,s+"0");
        printCode(root.right,s+"1");
    }
}

