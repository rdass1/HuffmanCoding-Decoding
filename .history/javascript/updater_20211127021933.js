var huffmanCoding = new HuffmanCoding();



var encoder = document.getElementById('encoderInput');


encoder.addEventListener('input',
    function inputListener(e){
        
        var root = huffmanCoding.ini(encoder.value);
        huffmanCoding.createTree();
        huffmanCoding.clearTable();
        
        huffmanCoding.printCode(root,"");
        huffmanCoding.printEncodedCode(root);

        //console.clear();
        print(root);
        
    }

);