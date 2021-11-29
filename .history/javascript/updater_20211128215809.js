var huffmanCoding = new HuffmanCoding(),
timing;



var encoder = document.getElementById('encoderInput');
var decoder = document.getElementById('decoderInput');



encoder.addEventListener('input',
    function inputListener(e){
        
        huffmanCoding.ini(encoder.value);
        var root = huffmanCoding.getRoot();
        
        huffmanCoding.clearTable();
        huffmanCoding.printCode(root,"");
        huffmanCoding.printEncodedCode(root);

        var drawGraph = new DrawGraph();
        drawGraph.ini(root);
        print(drawGraph.getList());
        //drawGraph2(root);
        
        //console.clear();
        //print(root);
        //print(huffmanCoding.codeDict);
        
    }

);

decoder.addEventListener('input',
    function inputListener(e){
        if(huffmanCoding.string == "" || huffmanCoding.string == null){
            document.getElementById("decoderInput").value = "";
            alert("You have to input characters in encoding first!");
        }
        huffmanCoding.clearDecoder();
        if(decoder.value != ''){
            decoder.value = e.target.value.replace(/[^01]/g, '');
            var list = huffmanCoding.deCode(decoder.value);
        }
        
        
        
        // console.clear();
        print(list);
    }
);