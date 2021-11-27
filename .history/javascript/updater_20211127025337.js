var huffmanCoding = new HuffmanCoding();



var encoder = document.getElementById('encoderInput');


encoder.addEventListener('input',
    function inputListener(e){
        
        huffmanCoding.ini(encoder.value);
        var root = huffmanCoding.createTree();
        huffmanCoding.clearTable();
        
        huffmanCoding.printCode(root,"0");
        huffmanCoding.printEncodedCode(root);

        //console.clear();
        print(root);
        print(huffmanCoding.codeDict);
        
    }

);