var huffmanCoding = new HuffmanCoding(),
timing;



var encoder = document.getElementById('encoderInput');
var decoder = document.getElementById('decoderInput');

var fileInput = document.getElementById("fileInput");


function update(){

}


fileInput.addEventListener('change',
    function input(e){
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {
			let text = fileLoadedEvent.target.result;
            document.getElementById("encoderInput").value = text;
            print(text);
		}
        fileReader.readAsText(e.target.files[0],"UTF-8");
        
        
    }
);



encoder.addEventListener('change',
    function inputListener(e){
        
       
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