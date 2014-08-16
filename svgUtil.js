/**
 * Created by ehtd on 8/15/14.
 */

function drawSVGString(str)
{
    var parser = new DOMParser();

    var textArea = document.getElementById("generatedSVG");
    textArea.innerHTML = str;

    var dom = parser.parseFromString(str, "application/xml");
    var container = document.getElementById('svgContainer');
    container.appendChild(dom.documentElement);

}