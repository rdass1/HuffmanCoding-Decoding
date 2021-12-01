var huffmanCoding = new HuffmanCoding(),
timing;



var encoder = document.getElementById('encoderInput');
var decoder = document.getElementById('decoderInput');

var fileInput = document.getElementById("fileInput");

var downloadBtn = document.getElementById("downloadBtn");

var encodedText,fileName="test";


function update(){

        if(encoder.value == ""){
            clearFields();
        }
    
        huffmanCoding.ini(encoder.value);
        var root = huffmanCoding.getRoot();
        
        huffmanCoding.clearTable();
        huffmanCoding.printCode(root,"0");
        var encodedOutput = huffmanCoding.printEncodedCode(root);
    
        var sortedFrequency = huffmanCoding.createNode(frequency(encoder.value));
        
        if(sortedFrequency != null){
            encodedText= encodedOutput+"\n";
            encodedText+= JSON.stringify(huffmanCoding.codeDict);
        
        }

        
        
        var dict = encodedText.split('\n')[1];
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

downloadBtn.addEventListener("click",
            function click(e){
                if(encoder.value == ""){
                    alert("You can't download an empty file!");

                }else{
                    if(fileName == ""){
                        print('input filename');
                    }else{
                        fileName += "_encoded.txt";
                        let a = document.createElement('a');
                        a.href = "data:application/octet-stream," + encodeURIComponent(encodedText);
                        a.download = fileName;
                        a.click();


                        
                    }
                    (fileName);
                    print(encodedText);print
                }
                
            }

        );



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
        var fname = e.target.files[0].name;
        
        fileName = fname.substring(0,fname.length-(extension.length+1));
       
		if (extension != "txt") {
			alert("Invalid file type (." + extension + ") \nPlease upload a valid .txt file and try again!");
            fileInput.value = null;
			return;
		}else{
            fileReader.readAsText(e.target.files[0],"UTF-8");
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

function clearFields(){
    remove();
    huffmanCoding.clearTable();
    fileInput.value = null;
}