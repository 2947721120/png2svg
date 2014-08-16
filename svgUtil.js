/**
 * Created by ehtd on 8/15/14.
 */
function drawSVG(){

    //http://warunapw.blogspot.mx/2009/07/svg-string-inline-with-html.html
    var parser = new DOMParser();

    var head = "<svg xmlns='http://www.w3.org/2000/svg' width='150' height='150'>";
    var body = "<rect x='0' y='0' width='150' height='150' style='fill:rgb(0,0,255)'/>";
    var tail = "</svg>";

    var svgStr = head + body + tail;

    var textArea = document.getElementById("generatedSVG");
    textArea.innerHTML = svgStr;

    console.log(svgStr);
    var dom = parser.parseFromString(svgStr, "application/xml");
    var container = document.getElementById('svgContainer');
    container.appendChild(dom.documentElement);

}