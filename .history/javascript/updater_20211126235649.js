var huffmanCoding = new HuffmanCoding();



var encoder = document.getElementById('encoderInput');


encoder.addEventListener('input',
    function inputListener(e){
        
        var root = huffmanCoding.createTree(encoder.value);
        huffmanCoding.clearTable();
        huffmanCoding.printEncodedCode(root)
        huffmanCoding.printCode(root,"");

        console.clear();
        print(root);
    }

);