



const print = (x) => console.log(x);



let frequency = (string) => {
    var freqDict = {}
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freqDict[character]) {
            freqDict[character]++;
        } else {
            freqDict[character] = 1;
        }
    }

    return freqDict;
}

let sortFrequency = (dict) => {
    var items = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
    });

    items.sort(function(first, second){
        return  first[1] - second[1];
    });
    return items;
}

let seperateDict = (arr) => {
    sortedFrequency.forEach(x => charArray.push(x[0]));
    sortedFrequency.forEach(x => charFreq.push(x[1]));

}



var string = "AAAAABBBBBBBBBCCCCCCCCCCCCDDDDDDDDDDDDDEEEEEEEEEEEEEEEEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
var sortedFrequency = sortFrequency(frequency(string));

//console.log(charArray);

var charArray = [];
var charFreq = [];

seperateDict(sortedFrequency);

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

function printCode(root,s){
    if (root.left == null && root.right == null){
        
        document.write(root.c + ":" + s+"<br>");
    }
    printCode(root.left,s+"0");
    printCode(root.right,s+"1");
}


print(q.left);
printCode(queue,"");



