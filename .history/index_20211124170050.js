
var freqDict = {}
let frequency = (string) => {
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

let min = (array) => array.foreach(x => if)


var string = "AAAAAABCCCCCCDDEEEEE";
var display = frequency(string);
console.log(Object.values(display)[0]);