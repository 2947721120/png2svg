/**
 * Created by ehtd on 8/15/14.
 */
    //https://github.com/kbwood/svg/issues/7

    //http://beej.us/blog/data/html5s-canvas-2-pixel/

function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

function getPixel(imageData, x, y) {
    var colors = [];

    index = (x + y * imageData.width) * 4;
    colors.push(imageData.data[index+0]);
    colors.push(imageData.data[index+1]);
    colors.push(imageData.data[index+2]);
    colors.push(imageData.data[index+3]);
    return colors;
}

function draw() {
    var element = document.getElementById('myCanvas');
    if (element.getContext) {
        var c = element.getContext('2d');

        var imageObj = new Image();

        imageObj.onload = function() {

            im = imageObj.target;

            c.drawImage(im, 0, 0);

            width = element.width;
            height = element.height;

            var textArea = document.getElementById("generatedSVG");

            imageData = c.getImageData(0, 0, width, height);

                var colorString = "";

                for (y = 0; y < height; y++ ){
                    for (x = 0; x < width; x++ ) {
                        //setPixel(imageData, x, y, 255, 0, 0, 255); // 255 opaque
                        colorString += getPixel(imageData, x, y) + "\r\n";
                    }

                }

                textArea.innerHTML = colorString;

            c.putImageData(imageData, 0, 0);

        };
        imageObj.src = 'http://www.pixeljoint.com/files/icons/full/x0010_mario1.gif';


        // read the width and height of the canvas
    }

}