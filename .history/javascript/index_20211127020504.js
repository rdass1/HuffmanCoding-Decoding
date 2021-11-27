



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

let getFrequency = (array,key) => {
    
    for(var i = 0; i< array.length;i++){
        if(key == array[0]){
            return array[0][1]
        }
    }
}





var string = "AAAAABBBBBBBBBCCCCCCCCCCCCDDDDDDDDDDDDDEEEEEEEEEEEEEEEEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";

// function run(string){

// }


function printCode(root,s){

}


// print(huffmanCoding.createTree(string));
// print(HuffmanCoding.createTree(string));
// printCode(root,"");



