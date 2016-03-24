var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    lineWrapping: true,
    mode:  "xml"
});

function runCode()
{
    editor.save();
    var code = document.getElementById("editor").value;
    var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(code);
    document.getElementById("renderer").src = data_url;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}