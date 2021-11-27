

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




var string = "AAAAAABCCCCCCDDEEEEE";
var display = frequency(string);
console.log(Object.values(display)[0]);