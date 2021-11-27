

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

let seperateDict = (arr) => {
    sortedFrequency.forEach(x => console.log(x[0]));
}

seperateDict(sortFrequency);



