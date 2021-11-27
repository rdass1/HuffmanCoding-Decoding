


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

class HuffmanNode{
    constructor(){
        this.data = 0;
        this.c = '';
        this.left = null;
        this.right = null;
    }
}

for(var i = 0; i < n; i++){
    let huffNode = new HuffmanNode();
    huffNode.c = charArray[i];
    

}

test();
