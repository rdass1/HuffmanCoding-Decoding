var huffmanCoding = new HuffmanCoding(),
timing;



var encoder = document.getElementById('encoderInput');
var decoder = document.getElementById('decoderInput');

var fileInput = document.getElementById("fileInput");


function update(){
    huffmanCoding.ini(encoder.value);
    var root = huffmanCoding.getRoot();
    
    huffmanCoding.clearTable();
    huffmanCoding.printCode(root,"0");
    var encodedOutput = huffmanCoding.printEncodedCode(root);
   
    var sortedFrequency = huffmanCoding.createNode(frequency(encoder.value));
    var codeDictionary= "";
    if(sortedFrequency != null){
        codeDictionary = encodedOutput+"\n";
        codeDictionary += JSON.stringify(huffmanCoding.codeDict);
       
    }
    console.clear();
    var dict = codeDictionary.split('\n')[1];
    print(JSON.parse(dict));
    
    remove();
    try{
        drawGraph(sortedFrequency);
    }catch(e){
        
    }
    //drawGraph2(root);
    
    //print(huffmanCoding.codeDict);
    //
    //print(root);
    //print(huffmanCoding.codeDict);
    
}


fileInput.addEventListener('change',
    function input(e){
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
			let text = fileLoadedEvent.target.result;
            // document.getElementById("encoderInput").value = text;
            encoder.value=text;
            print(text);
            update();
		}
        
        let nameSplit = e.target.files[0].name.split('.');
		var extension = nameSplit[nameSplit.length - 1].toLowerCase();
		if (extension != "txt") {
			alert("Invalid file type (." + extension + ") \nPlease upload a valid .txt file and try again!");
			return;
		}else{

        }	
        
        
    }
);



encoder.addEventListener('input',
    function inputListener(e){
        update();
       
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
            huffmanCoding.deCode(decoder.value,huffmanCoding.codeDict);
        }
        
        
        
        // console.clear();
    }
);

function remove() {
    var graph = document.querySelector('svg');
    if (graph) { graph.parentElement.removeChild(graph) };

}