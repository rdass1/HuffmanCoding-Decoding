var huffmanCoding = new HuffmanCoding(),
timing;



var encoder = document.getElementById('encoderInput');
var decoder = document.getElementById('decoderInput');

var fileInput = document.getElementById("fileInput");
var decoderInput = document.getElementById('decoderFileInput');
var downloadEncBtn = document.getElementById("downloadEncBtn");
var downloadDecBtn = document.getElementById("downloadDecBtn");
var encodedText,decodedText,fileName;


function update(){
        if(encoder.value==""){
            clearFields();
        }else{
            
            huffmanCoding.ini(encoder.value);
            var root = huffmanCoding.getRoot();
            
            huffmanCoding.clearTable();
            document.getElementById("table").style.display="block";
            
    
            huffmanCoding.printCode(root,"0");
            var encodedOutput = huffmanCoding.printEncodedCode(root);
        
            var sortedFrequency = huffmanCoding.createNode(frequency(encoder.value));
            
            if(sortedFrequency != null){
                encodedText= encodedOutput+"\n";
                encodedText+= JSON.stringify(huffmanCoding.codeDict);
                decodedText = huffmanCoding.deCode(encodedOutput,huffmanCoding.codeDict);
            
            }
    
            
            
            var dict = encodedText.split('\n')[1];
            //print(JSON.parse(dict));
            
            
    
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
        
    
        
    
    
    
}





downloadEncBtn.addEventListener("click",
            function click(e){
                if(encoder.value == ""){
                    alert("You can't download an empty file!");

                }else{
                    if(fileName == ""){
                        fileName = prompt("Please enter a file name");
                    }
                    fileName += "_encoded.txt";
                        let a = document.createElement('a');
                        a.href = "data:application/octet-stream," + encodeURIComponent(encodedText);
                        a.download = fileName;
                        a.click();
                    
                }
                
            }

        );

downloadDecBtn.addEventListener("click",
            function input(e){
                if(decoder.value == ""){
                    alert("You can't download an empty file!");

                }else{
                    if(fileName == ""){
                        fileName = prompt("Please enter a file name");
                    }
                    fileName += "_decoded.txt";
                        let a = document.createElement('a');
                        a.href = "data:application/octet-stream," + encodeURIComponent(decodedText);
                        a.download = fileName;
                        a.click();
                    
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
            decoderInput.value = null;
            
            document.getElementById("decoderInput").value = "";
            update();
		}
        let nameSplit = e.target.files[0].name.split('.');
		var extension = nameSplit[nameSplit.length - 1].toLowerCase();
        var fname = e.target.files[0].name;
        
        fileName = fname.substring(0,fname.length-(extension.length+1));
       print(fileName);
		if (extension != "txt") {
			alert("Invalid file type (." + extension + ") \nPlease upload a valid .txt file and try again!");
            fileInput.value = null;
			return;
		}else{
            fileReader.readAsText(e.target.files[0],"UTF-8");
        }	
        
        
    }
);

decoderInput.addEventListener('change',
    function input(e){
        
        var fileReader = new FileReader();
        fileReader.onload = function (fileLoadedEvent) {

			let text = fileLoadedEvent.target.result;
            // document.getElementById("encoderInput").value = text;
            var textSplit = text.split('\n');
            
            //print(JSON.parse(dict));

            document.getElementById("decoderOutput").innerHTML = "Decoder Output:<br>";
            document.getElementById("TableCode").style.display= "block";
            document.getElementById("TableCode").style.display= "block";
            document.getElementById("DeCode").value = huffmanCoding.deCode(textSplit[0],JSON.parse(textSplit[1]));
            decoder.value= textSplit[0];
            decodedText = huffmanCoding.deCode(textSplit[0],JSON.parse(textSplit[1]));
            encoder.value = decodedText;
            fileInput.value = null;
            update();
            
		}
        
        let nameSplit = e.target.files[0].name.split('.');
		var extension = nameSplit[nameSplit.length - 1].toLowerCase();

        var newSplit = e.target.files[0].name.split('_');
        var extension2 = newSplit[newSplit.length-1].toLowerCase();

        var fname = e.target.files[0].name;
        
        fileName = fname.substring(0,fname.length-(extension2.length+1));
        print(fileName);
		if (extension != "txt") {
			alert("Invalid file type (." + extension + ") \nPlease upload a valid .txt file and try again!");
            decoderInput.value = null;
			return;
		}else{ 
            fileReader.readAsText(e.target.files[0],"UTF-8");
        }
        update();	
    }
);



encoder.addEventListener('input',
    function inputListener(e){
        document.getElementById("decoderInput").value = "";
        huffmanCoding.clearDecoder();
        fileInput.value = null;
        decoderInput.value = null;
        
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
        decodedText = huffmanCoding.deCode(decoder.value,huffmanCoding.codeDict);
        if(decoder.value != '' && decodedText != null){
            decoder.value = e.target.value.replace(/[^01]/g, '');
            document.getElementById("decoderOutput").innerHTML = "Decoder Output:<br>";
            document.getElementById("DeCode").style.display = "block";
            document.getElementById("DeCode").value = decodedText;
        }else{
            document.getElementById("DeCode").style.display = "none";
            document.getElementById("DeCode").value = "";
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
    document.getElementById("decoderOutput").innerHTML = "";
    document.getElementById("DeCode").value = "";
    huffmanCoding.clearTable();
    fileInput.value = null;
    decoderInput.value = null;
    encodedText = "";
    decodedText = "";
    fileName = "";
}