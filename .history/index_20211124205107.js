


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
var sortedFrequency = sortFrequency(frequency(string));

//console.log(charArray);

var charArray = [];
var charFreq = [];

≈


seperateDict(sortedFrequency);

let n = charArray.length;
let queue = [];

for(var i = 0; i < n; i++){

}

test();
