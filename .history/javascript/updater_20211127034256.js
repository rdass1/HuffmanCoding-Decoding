var huffmanCoding = new HuffmanCoding();



var encoder = document.getElementById('encoderInput');
var decoder = document.getElementById('decoderInput')


encoder.addEventListener('input',
    function inputListener(e){
        
        huffmanCoding.ini(encoder.value);
        var root = huffmanCoding.createTree();
        huffmanCoding.clearTable();
        
        huffmanCoding.printCode(root,"");
        huffmanCoding.printEncodedCode(root);

        console.clear();
        print(root);
        print(huffmanCoding.codeDict);
        
    }

);