var huffmanCoding = new HuffmanCoding();



var encoder = document.getElementById('encoderInput');


encoder.addEventListener('input',
    function inputListener(e){
        
        var root = huffmanCoding.ini(encoder.value);
        huffmanCoding.c
        huffmanCoding.clearTable();
        
        huffmanCoding.printCode(root,"");
        huffmanCoding.printEncodedCode(root);

        //console.clear();
        print(root);
        print(getFrequency(sortedFrequency,encoder.value.substring(0,1)));
    }

);