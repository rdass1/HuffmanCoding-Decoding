
var freq = {}
let frequency = (string) => {
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
}


var string = "AAAAAABCCCCCCDDEEEEE";
var display = frequency(string);
console.log(Object.values);