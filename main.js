var canvas=new fabric.Canvas("myCanvas"); //Load canvas
var px=10;
var py=10; //x and y position of player and block
var bw=30;
var bh=30; //height and width of block(Initial)
var p="";  //P=variable for player
var b="";  //B=variable for block
function pupdate(){
    fabric.Image.fromURL("https://mahdihat791.github.io/v2/ADV-C86-minecraft.com/player.png", function(Img){ //Defining player image
        p=Img;
        p.scaleToWidth(150);
        p.scaleToHeight(140);//above, sizing the player image hight and width 
        p.set({
            top: py,
            left: px
        }); //above, positioning player image
        canvas.add(p); //Adding the player image
    });
}
function newimage(getImage){ //adding variable, getImage, for the blocks as the image of blocks will keep on changing. 
    fabric.Image.fromURL(getImage, function(Img){
        b=Img;
        b.scaleToWidth(bh);
        b.scaleToHeight(bw);
        b.set({
            top: py,
            left: px
        });// ABOVE, positioning block image
        canvas.add(b); //Adding the block image
    });
}
window.addEventListener("keydown", mykeydown); //Looks for changes on keypressed events. 
function mykeydown(e){
    keypressed=e.keyCode;
    if (e.shiftKey==true && keypressed=="80"){ //80 is the ASCII code for the key P. 
        bw=bw+10; //Making block larger
        bh=bh+10;
        document.getElementById("cw").innerHTML=bw;
        document.getElementById("ch").innerHTML=bh;
    }
    if (e.shiftKey==true && keypressed=="77"){ //80 is the ASCII code for the key M. 
        bw=bw-10; //Making block smaller
        bh=bh-10;
        document.getElementById("cw").innerHTML=bw;
        document.getElementById("ch").innerHTML=bh;
    }
    if (keypressed=="38"){  //ASCII for up
        up();
    }
    if (keypressed=="40"){  //ASCII for down
        down();
    }
    if (keypressed=="37"){  //ASCII for left
        left();
    }
    if (keypressed=="39"){ //ASCII for right
        right();
    } 
    if (keypressed=="87"){ //ASCII code for w
        newimage("wall.jpg");
    }
    if (keypressed=="71"){ //ASCII code for g
        newimage("ground.png");
    }
    if (keypressed=="76"){ //ASCII code for l
        newimage("light_green.png");
    }
    if (keypressed=="84"){ //ASCII code for t
        newimage("trunk.jpg");
    } 
    if (keypressed=="82"){ //ASCII code for r
        newimage("roof.jpg");
    }
    if (keypressed=="89"){ //ASCII code for y
        newimage("yellow_wall.png");
    }
    if (keypressed=="68"){ //ASCII code for d
        newimage("dark_green.png");
    }
    if (keypressed=="85"){ //ASCII code for u
        newimage("unique.png");
    }
    if (keypressed=="67"){ //ASCII code for c
        newimage("cloud.jpg");
    }
}
function up(){
    if (py>=0){
        py=py-bh;
        canvas.remove(p);
        pupdate();
    }
}
function down(){
    if (py<=500){
        py=py+bh;
        canvas.remove(p);
        pupdate();
    }
}
function left(){
    if (px>=0){
        px=px-bh;
        canvas.remove(p);
        pupdate();
    }
}
function right(){
    if (px<=850){
        px=px+bh;
        canvas.remove(p);
        pupdate();
    }
}