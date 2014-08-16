/**
 * Created by ehtd on 8/15/14.
 */

function drawSVGString(str) {

    svgSource += str;

    var parser = new DOMParser();

    var textArea = document.getElementById("generatedSVG");
    textArea.innerHTML = str;

    var dom = parser.parseFromString(str, "application/xml");
    var container = document.getElementById('svgContainer');
    container.appendChild(dom.documentElement);
}

function downloadSVG() {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(svgSource));
    pom.setAttribute('download', 'file.svg');
    pom.click();
}
