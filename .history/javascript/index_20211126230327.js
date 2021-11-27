



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





var string = "AAAAABBBBBBBBBCCCCCCCCCCCCDDDDDDDDDDDDDEEEEEEEEEEEEEEEEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";

// function run(string){

// }


function printCode(root,s){
    if (root.left == null && root.right == null && ((root.c).toLowerCase()) != ((root.c).toUpperCase())){
        document.getElementById("charCodes").innerHTML +=root.c + ":" + s+"<br>";
        return;
    }
    printCode(root.left,s+"0");
    printCode(root.right,s+"1");
}


print(HuffmanCoding.init(string));
// print(HuffmanCoding.createTree(string));
// printCode(root,"");



