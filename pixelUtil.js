/**
 * Created by ehtd on 8/15/14.
 */

//http://beej.us/blog/data/html5s-canvas-2-pixel/
function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

function getPixel(imageData, x, y) {
    var colors = {};

    index = (x + y * imageData.width) * 4;

    return[imageData.data[index+0], imageData.data[index+1], imageData.data[index+2], imageData.data[index+3]];

}
