var huffmanCoding = new HuffmanCoding();



var encoder = document.getElementById('encoderInput');
var decoder = document.getElementById('decoderInput');


encoder.addEventListener('input',
    function inputListener(e){
        
        huffmanCoding.ini(encoder.value);
        var root = getr
        huffmanCoding.clearTable();
        
        huffmanCoding.printCode(root,"");
        huffmanCoding.printEncodedCode(root);

        //console.clear();
        //print(root);
        //print(huffmanCoding.codeDict);
        
    }

);

decoder.addEventListener('input',
    function inputListener(e){
        if(huffmanCoding.string == null){
            alert("You have to input characters in encoding first!");
        }
        decoder.value = e.target.value.replace(/[^01]/g, '');
        var list = huffmanCoding.deCode(decoder.value);
        // console.clear();
        print(list);
    }
);