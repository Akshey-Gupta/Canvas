var fgimage=null;
var canvas=null;
var grayscale=null;
var redscale=null;
var vrainbow=null;
var hrainbow=null;

function upload(){
    var file=document.getElementById('file1');
    fgimage=new SimpleImage(file);
    grayscale=new SimpleImage(file);
    redscale=new SimpleImage(file);
    vrainbow=new SimpleImage(file);
    hrainbow=new SimpleImage(file);
    canvas=document.querySelector('.canv');
    fgimage.drawTo(canvas);
}

function makeGrayscale(){
    for(var pixel of grayscale.values()){
        var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    grayscale.drawTo(canvas);
}

function makeRed(){
    for(var pixel of redscale.values()){
        var g=pixel.getGreen();  
        var b=pixel.getBlue();      
        pixel.setRed(255);
        pixel.setGreen(g);
        pixel.setBlue(b);
    }
    redscale.drawTo(canvas);
}

function makeVRainbow(){
    var h=vrainbow.getHeight()/3;
    for (var pixel of vrainbow.values()) {
        var r=pixel.getRed();
        var g=pixel.getGreen();  
        var b=pixel.getBlue();
        if(pixel.getY()>h*2){
            pixel.setRed(255);
            pixel.setGreen(g);
            pixel.setBlue(b);
        }
        if(pixel.getY()>=h && pixel.getY()<h*2){
            pixel.setRed(r);
            pixel.setGreen(255);
            pixel.setBlue(b);
        }
        if(pixel.getY()<h){
            pixel.setRed(r);
            pixel.setGreen(g);
            pixel.setBlue(255);
        }
        }
        vrainbow.drawTo(canvas);
    }

    function makeHRainbow(){
        var w=hrainbow.getWidth()/3;
        for (var pixel of hrainbow.values()) {
            var r=pixel.getRed();
            var g=pixel.getGreen();  
            var b=pixel.getBlue();
            if(pixel.getX()>w*2){
                pixel.setRed(255);
                pixel.setGreen(g);
                pixel.setBlue(b);
            }
            if(pixel.getX()>=w && pixel.getX()<w*2){
                pixel.setRed(r);
                pixel.setGreen(255);
                pixel.setBlue(b);
            }
            if(pixel.getX()<w){
                pixel.setRed(r);
                pixel.setGreen(g);
                pixel.setBlue(255);
            }
            }
            hrainbow.drawTo(canvas);
        }

function clearFilter(){
    upload();
}
function clearImage(){
    var context=canvas.getContext('2d')
    context.clearRect(0,0,canvas.width,canvas.height);
}

