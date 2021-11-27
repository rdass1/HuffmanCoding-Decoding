var huffmanCoding = new HuffmanCoding();



var encoder = document.getElementById('encoderInput');


encoder.addEventListener('input',
    function inputListener(e){
        
        var root = huffmanCoding.createTree(encoder.value);
        huffmanCoding.clearTable();
        huffmanCoding.printCode(root,"");
        print(root);
    }

);