var huffmanCoding = new HuffmanCoding(),
timing;

const output = document.getElementById("tree");




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
        //print(drawGraph.getList());
        console.clear();
        drawGraph.draw();
        print(drawGraph.formatData);
        //drawGraph2(root);
        
        //
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

var tree = document.getElementById("tree");
var starty,startx,scrleft,scrtop,isdown;

//https://codepen.io/Gutto/pen/GBLPyN
tree.addEventListener('mousedown',e => MouseDown(e));  
tree.addEventListener('mouseup',e => mouseUp(e))
tree.addEventListener('mouseleave',e=>mouseLeave(e));
tree.addEventListener('mousemove',e=>mouseMove(e));

function MouseDown(e){
    isdown = true;
    startx = e.pageX - tree.offsetLeft;
    starty = e.pageY - tree.offsetTop;
    scrleft = tree.scrollLeft;
    scrtop = tree.scrollTop;
}

function mouseUp(e){
    isdown = false;
}

function mouseLeave(e){
    isdown = false;
}

function mouseMove(e){
    if(isdown){
        e.preventDefault();

        var y = e.pageY - tree.offsetTop;
        var goY = y - starty;
        tree.scrollTop = scrtop - goY;

        var x = e.pageX - tree.offsetLeft;
        var goX = x - startx;
        tree.scrollLeft = scrleft - goX;
    }
}
let scale = 1;

//https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
function zoom(event) {
    const el = document.querySelector('svg');

    event.preventDefault();
  
    scale += event.deltaY * -0.001;
  
    // Restrict scale
    scale = Math.min(Math.max(.250, scale), 1);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }