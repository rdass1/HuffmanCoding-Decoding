
var string = "AAAAAABCCCCCCDDEEEEE";






let frequency = (string) => {
    frequency = {}
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
