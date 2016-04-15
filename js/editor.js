var class_array = [];
var add_div;
// Base template
var base_tpl =
        "<!doctype html>\n" +
        "<html>\n\t" +
        "<head>\n\t\t" +
        "<meta charset=\"utf-8\">\n\t\t" +
        "<title>Test</title>\n\n\t\t\n\t" +
        "</head>\n\t" +
        "<body>\n\t\n\t" +
        "</body>\n" +
        "</html>";

var prepareSource = function() {
    var html = html_editor.getValue(),
            css = css_editor.getValue(),
            //js = js_editor.getValue(),
            src = '';
    
    // HTML
    src = base_tpl.replace('</body>', html + '</body>');
    
    // CSS
    css = '<style>' + css + '</style>';
    src = src.replace('</head>', css + '</head>');
    
    return src;
};

var render = function() {
    var source = prepareSource();
    
    var iframe = document.querySelector('#output iframe');
    var iframe_doc = iframe.contentDocument;
    
    iframe_doc.open();
    iframe_doc.write(source);
    iframe_doc.close();
};


// EDITORS

// CM OPTIONS
var cm_opt = {
    mode: 'text/html',
    gutter: true,
    dragDrop: false,
    lineNumbers: true,
    lineWrapping: true,
};

// HTML EDITOR
var html_box = document.querySelector('#html textarea');
var string = grabed_text();
var html_editor;
$("#html").each(function (i) {
    html_editor = CodeMirror.fromTextArea(html_box, cm_opt);
    $('#html-article-tag').click(function(){
        html_editor.replaceSelection('<article>' + '</article>');
        add_div = $('<div id="html-article-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-article"> article </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-nav-tag').click(function(){
        html_editor.replaceSelection('<nav>' + '</nav>');
        add_div = $('<div id="html-nav-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> nav </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-aside-tag').click(function(){
        html_editor.replaceSelection('<aside>' + '</aside>');
        add_div = $('<div id="html-aside-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> aside </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-section-tag').click(function(){
        html_editor.replaceSelection('<section>' + '</section>');
        add_div = $('<div id="html-section-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-section"> section </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-header-tag').click(function(){
        html_editor.replaceSelection('<header>' + '</header>');
        add_div = $('<div id="html-header-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> header </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-footer-tag').click(function(){
        html_editor.replaceSelection('<footer>' + '</footer>');
        add_div = $('<div id="html-footer-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> footer </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-hone-tag').click(function(){
        html_editor.replaceSelection('<h1>' + '</h1>');
        add_div = $('<div id="html-hone-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h1 </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-htwo-tag').click(function(){
        html_editor.replaceSelection('<h2>' + '</h2>');
        add_div = $('<div id="html-htwo-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h2 </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-hthree-tag').click(function(){
        html_editor.replaceSelection('<h3>' + '</h3>');
        add_div = $('<div id="html-hthree-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h3 </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-hfour-tag').click(function(){
        html_editor.replaceSelection('<h4>' + '</h4>');
        add_div = $('<div id="html-hfour-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h4 </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-hfive-tag').click(function(){
        html_editor.replaceSelection('<h5>' + '</h5>');
        add_div = $('<div id="html-hfive-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h5 </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-hsix-tag').click(function(){
        html_editor.replaceSelection('<h6>' + '</h6>');
        add_div = $('<div id="html-hsix-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h6 </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-p-tag').click(function(){
        html_editor.replaceSelection('<p>' + '</p>');
        add_div = $('<div id="html-p-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> p </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-main-tag').click(function(){
        html_editor.replaceSelection('<main>' + '</main>');
        add_div = $('<div id="html-main-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> main </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-blockquote-tag').click(function(){
        html_editor.replaceSelection('<blockquote>' + '</blockquote>');
        add_div = $('<div id="html-blockquote-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-blockquote"> blockquote </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-ol-tag').click(function(){
        html_editor.replaceSelection('<ol>' + '</ol>');
        add_div = $('<div id="html-ol-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> ol </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-ul-tag').click(function(){
        html_editor.replaceSelection('<ul>' + '</ul>');
        add_div = $('<div id="html-ul-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> ul </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-li-tag').click(function(){
        html_editor.replaceSelection('<li>' + '</li>');
        add_div = $('<div id="html-li-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> li </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-div-tag').click(function(){
        html_editor.replaceSelection('<div>' + '</div>');
        add_div = $('<div id="html-div-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> div </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-table-tag').click(function(){
        html_editor.replaceSelection('<table>' + '</table>');
        add_div = $('<div id="html-table-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> table </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-caption-tag').click(function(){
        html_editor.replaceSelection('<caption>' + '</caption>');
        add_div = $('<div id="html-caption-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> caption </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-thead-tag').click(function(){
        html_editor.replaceSelection('<thead>' + '</thead>');
        add_div = $('<div id="html-thead-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> thead </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-tbody-tag').click(function(){
        html_editor.replaceSelection('<tbody>' + '</tbody>');
        add_div = $('<div id="html-tbody-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> tbody </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-tfoot-tag').click(function(){
        html_editor.replaceSelection('<tfoot>' + '</tfoot>');
        add_div = $('<div id="html-tfoot-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> tfoot </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-tr-tag').click(function(){
        html_editor.replaceSelection('<tr>' + '</tr>');
        add_div = $('<div id="html-tr-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> tr </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-th-tag').click(function(){
        html_editor.replaceSelection('<th>' + '</th>');
        add_div = $('<div id="html-th-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> th </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-video-tag').click(function(){
        html_editor.replaceSelection('<video>' + '</video>');
        add_div = $('draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> video </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-audio-tag').click(function(){
        html_editor.replaceSelection('<audio>' + '</audio>');
        add_div = $('<div id="html-audio-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> audio </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-canvas-tag').click(function(){
        html_editor.replaceSelection('<canvas>' + '</canvas>');
        add_div = $('<div id="html-canvas-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> canvas </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-a-tag').click(function(){
        html_editor.replaceSelection('<a>' + '</a>');
        add_div = $('<div id="html-a-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> a </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-em-tag').click(function(){
        html_editor.replaceSelection('<em>' + '</em>');
        add_div = $('<div id="html-em-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> em </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-strong-tag').click(function(){
        html_editor.replaceSelection('<strong>' + '</strong>');
        add_div = $('<div id="html-bold-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> strong </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-u-tag').click(function(){
        html_editor.replaceSelection('<u>' + '</u>');
        add_div = $('<div id="html-u-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> u </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-s-tag').click(function(){
        html_editor.replaceSelection('<s>' + '</s>');
        add_div = $('<div id="html-s-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> s </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-textarea-tag').click(function(){
        html_editor.replaceSelection('<textarea>' + '</textarea>');
        add_div = $('<div id="html-textarea-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-blockquote"> textarea </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-img-tag').click(function(){
        html_editor.replaceSelection('<img>' + '</img>');
        add_div = $('<div id="html-img-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> img </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-iframe-tag').click(function(){
        html_editor.replaceSelection('<iframe>' + '</iframe>');
        add_div = $('<div id="html-iframe-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> iframe </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-figcaption-tag').click(function(){
        html_editor.replaceSelection('<figcaption>' + '</figcaption>');
        add_div = $('<div id="html-figcaption-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-blockquote"> figcaption </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-hr-tag').click(function(){
        html_editor.replaceSelection('<hr>');
        add_div = $('<div id="html-hr-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> hr </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-q-tag').click(function(){
        html_editor.replaceSelection('<q>' + '</q>');
        add_div = $('<div id="html-q-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> q </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-cite-tag').click(function(){
        html_editor.replaceSelection('<cite>' + '</cite>');
        add_div = $('<div id="html-cite-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> cite </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-code-tag').click(function(){
        html_editor.replaceSelection('<code>' + '</code>');
        add_div = $('<div id="html-code-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> code </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-span-tag').click(function(){
        html_editor.replaceSelection('<span>' + '</span>');
        add_div = $('<div id="html-span-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> span </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-br-tag').click(function(){
        html_editor.replaceSelection('<br>');
        add_div = $('<div id="html-br-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> br </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-td-tag').click(function(){
        html_editor.replaceSelection('<td>' + '</td>');
        add_div = $('<div id="html-td-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> td </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-form-tag').click(function(){
        html_editor.replaceSelection('<form>' + '</form>');
        add_div = $('<div id="html-form-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> form </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-label-tag').click(function(){
        html_editor.replaceSelection('<label>' + '</label>');
        add_div = $('<div id="html-label-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> label </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-input-tag').click(function(){
        html_editor.replaceSelection('<input>' + '</input>');
        add_div = $('<div id="html-input-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> input </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-button-tag').click(function(){
        html_editor.replaceSelection('<button>' + '</button>');
        add_div = $('<div id="html-button-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> button </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-select-tag').click(function(){
        html_editor.replaceSelection('<select>' + '</select>');
        add_div = $('<div id="html-select-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> select </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-option-tag').click(function(){
        html_editor.replaceSelection('<option>' + '</option>');
        add_div = $('<div id="html-option-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> option </p></div></div>');
        $("#block-view").append(add_div);
    });
    $('#html-pre-tag').click(function(){
        html_editor.replaceSelection('<pre>' + '</pre>');
        add_div = $('<div id="html-pre-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> pre </p></div></div>');
        $("#block-view").append(add_div);
    });
});

function grabed_text() {
  
}    

html_editor.on('change', function (inst, changes) {
    render();
});

// CSS EDITOR
cm_opt.mode = 'css';
var css_box = document.querySelector('#css textarea');
var css_editor = CodeMirror.fromTextArea(css_box, cm_opt);
css_editor.on('change', function (inst, changes) {
    render();
    class_array[css_editor.lineCount()];
    for(var i = 0; i < css_editor.lineCount(); i++) {
        if(css_editor.getLine(i).startsWith(".") || css_editor.getLine(i).startsWith("#")) {
            var lol = css_editor.getLine(i);
            class_array[i] = lol;
            lol = lol.substring(0, lol.indexOf('{'));

            console.log("i = " + i + " : " + class_array[i]);

        }
        //console.log(css_editor.getLine(i));
    }
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    var copyimg = document.createElement(data);
    var original = document.getElementById(data);
    copyimg.src = original.src;
    ev.target.appendChild(copyimg);

    if(data == 'html-bold-tag') {
        html_editor.replaceSelection('<strong>' + '</strong>');
        add_div = $('<div id="html-bold-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> strong </p></div></div>');
    } else if(data == 'html-article-tag') {
        html_editor.replaceSelection('<article>' + '</article>');
        add_div = $('<div id="html-article-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-article"> article </p></div></div>');
    } else if(data == 'html-nav-tag') {
        html_editor.replaceSelection('<nav>' + '</nav>');
        add_div = $('<div id="html-nav-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> nav </p></div></div>');
    } else if(data == 'html-aside-tag') {
        html_editor.replaceSelection('<aside>' + '</aside>');
        add_div = $('<div id="html-aside-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> aside </p></div></div>');
    } else if(data == 'html-section-tag') {
        html_editor.replaceSelection('<section>' + '</section>');
        add_div = $('<div id="html-section-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-section"> section </p></div></div>');
    } else if(data == 'html-header-tag') {
        html_editor.replaceSelection('<header>' + '</header>');
        add_div = $('<div id="html-header-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> header </p></div></div>');
    } else if(data == 'html-footer-tag') {
        html_editor.replaceSelection('<footer>' + '</footer>');
        add_div = $('<div id="html-footer-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> footer </p></div></div>');
    } else if(data == 'html-hone-tag') {
        html_editor.replaceSelection('<h1>' + '</h1>');
        add_div = $('<div id="html-hone-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h1 </p></div></div>');
    } else if(data == 'html-htwo-tag') {
        html_editor.replaceSelection('<h2>' + '</h2>');
        add_div = $('<div id="html-htwo-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h2 </p></div></div>');
    } else if(data == 'html-hthree-tag') {
        html_editor.replaceSelection('<h3>' + '</h3>');
        add_div = $('<div id="html-hthree-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h3 </p></div></div>');
    } else if(data == 'html-hfour-tag') {
        html_editor.replaceSelection('<h4>' + '</h4>');
        add_div = $('<div id="html-hfour-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h4 </p></div></div>');
    } else if(data == 'html-hfive-tag') {
        html_editor.replaceSelection('<h5>' + '</h5>');
        add_div = $('<div id="html-hfive-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h5 </p></div></div>');
    } else if(data == 'html-hsix-tag') {
        html_editor.replaceSelection('<h6>' + '</h6>');
        add_div = $('<div id="html-hsix-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h6 </p></div></div>');
    } else if(data == 'html-q-tag') {
        html_editor.replaceSelection('<q>' + '</q>');
        add_div = $('<div id="html-q-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> q </p></div></div>');
    } else if(data == 'html-main-tag') {
        html_editor.replaceSelection('<main>' + '</main>');
        add_div = $('<div id="html-main-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> main </p></div></div>');
    } else if(data == 'html-video-tag') {
        html_editor.replaceSelection('<video>' + '</video>');
        add_div = $('draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> video </p></div></div>');
    } else if(data == 'html-audio-tag') {
        html_editor.replaceSelection('<audio>' + '</audio>');
        add_div = $('<div id="html-audio-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> audio </p></div></div>');
    } else if(data == 'html-p-tag') {
        html_editor.replaceSelection('<p>' + '</p>');
        add_div = $('<div id="html-p-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> p </p></div></div>');
    } else if(data == 'html-hr-tag') {
        html_editor.replaceSelection('<hr>');
        add_div = $('<div id="html-hr-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> hr </p></div></div>');
    } else if(data == 'html-pre-tag') {
        html_editor.replaceSelection('<pre>' + '</pre>');
        add_div = $('<div id="html-pre-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> pre </p></div></div>');
    } else if(data == 'html-blockquote-tag') {
        html_editor.replaceSelection('<blockquote>' + '</blockquote>');
        add_div = $('<div id="html-blockquote-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-blockquote"> blockquote </p></div></div>');
    } else if(data == 'html-ul-tag') {
        html_editor.replaceSelection('<ul>' + '</ul>');
        add_div = $('<div id="html-ul-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> ul </p></div></div>');
    } else if(data == 'html-ol-tag') {
        html_editor.replaceSelection('<ol>' + '</ol>');
        add_div = $('<div id="html-ol-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> ol </p></div></div>');
    } else if(data == 'html-li-tag') {
        html_editor.replaceSelection('<li>' + '</li>');
        add_div = $('<div id="html-li-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> li </p></div></div>');
    } else if(data == 'html-div-tag') {
        html_editor.replaceSelection('<div>' + '</div>');
        add_div = $('<div id="html-div-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> div </p></div></div>');
    } else if(data == 'html-table-tag') {
        html_editor.replaceSelection('<table>' + '</table>');
        add_div = $('<div id="html-table-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> table </p></div></div>');
    } else if(data == 'html-caption-tag') {
        html_editor.replaceSelection('<caption>' + '</caption>');
        add_div = $('<div id="html-caption-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> caption </p></div></div>');
    } else if(data == 'html-thead-tag') {
        html_editor.replaceSelection('<thead>' + '</thead>');
        add_div = $('<div id="html-thead-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> thead </p></div></div>');
    } else if(data == 'html-tbody-tag') {
        html_editor.replaceSelection('<tbody>' + '</tbody>');
        add_div = $('<div id="html-tbody-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> tbody </p></div></div>');
    } else if(data == 'html-tfoot-tag') {
        html_editor.replaceSelection('<tfoot>' + '</tfoot>');
        add_div = $('<div id="html-tfoot-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> tfoot </p></div></div>');
    } else if(data == 'html-tr-tag') {
        html_editor.replaceSelection('<tr>' + '</tr>');
        add_div = $('<div id="html-tr-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> tr </p></div></div>');
    } else if(data == 'html-th-tag') {
        html_editor.replaceSelection('<th>' + '</th>');
        add_div = $('<div id="html-th-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> th </p></div></div>');
    } else if(data == 'html-canvas-tag') {
        html_editor.replaceSelection('<canvas>' + '</canvas>');
        add_div = $('<div id="html-canvas-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> canvas </p></div></div>');
    } else if(data == 'html-a-tag') {
        html_editor.replaceSelection('<a>' + '</a>');
        add_div = $('<div id="html-a-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> a </p></div></div>');
    } else if(data == 'html-em-tag') {
        html_editor.replaceSelection('<em>' + '</em>');
        add_div = $('<div id="html-em-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> em </p></div></div>');
    } else if(data == 'html-u-tag') {
        html_editor.replaceSelection('<u>' + '</u>');
        add_div = $('<div id="html-u-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> u </p></div></div>');
    } else if(data == 'html-s-tag') {
        html_editor.replaceSelection('<s>' + '</s>');
        add_div = $('<div id="html-s-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> s </p></div></div>');
    } else if(data == 'html-textarea-tag') {
        html_editor.replaceSelection('<textarea>' + '</textarea>');
        add_div = $('<div id="html-textarea-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-blockquote"> textarea </p></div></div>');
    } else if(data == 'html-img-tag') {
        html_editor.replaceSelection('<img>' + '</img>');
        add_div = $('<div id="html-img-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> img </p></div></div>');
    } else if(data == 'html-iframe-tag') {
        html_editor.replaceSelection('<iframe>' + '</iframe>');
        add_div = $('<div id="html-iframe-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> iframe </p></div></div>');
    } else if(data == 'html-figcaption-tag') {
        html_editor.replaceSelection('<figcaption>' + '</figcaption>');
        add_div = $('<div id="html-figcaption-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-blockquote"> figcaption </p></div></div>');
    } else if(data == 'html-cite-tag') {
        html_editor.replaceSelection('<cite>' + '</cite>');
        add_div = $('<div id="html-cite-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> cite </p></div></div>');
    } else if(data == 'html-code-tag') {
        html_editor.replaceSelection('<code>' + '</code>');
        add_div = $('<div id="html-code-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> code </p></div></div>');
    } else if(data == 'html-span-tag') {
        html_editor.replaceSelection('<span>' + '</span>');
        add_div = $('<div id="html-span-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> span </p></div></div>');
    } else if(data == 'html-br-tag') {
        html_editor.replaceSelection('<br>');
        add_div = $('<div id="html-br-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> br </p></div></div>');
    } else if(data == 'html-td-tag') {
        html_editor.replaceSelection('<td>' + '</td>');
        add_div = $('<div id="html-td-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> td </p></div></div>');
    } else if(data == 'html-form-tag') {
        html_editor.replaceSelection('<form>' + '</form>');
        add_div = $('<div id="html-form-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> form </p></div></div>');
    } else if(data == 'html-label-tag') {
        html_editor.replaceSelection('<label>' + '</label>');
        add_div = $('<div id="html-label-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> label </p></div></div>');
    } else if(data == 'html-input-tag') {
        html_editor.replaceSelection('<input>' + '</input>');
        add_div = $('<div id="html-input-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> input </p></div></div>');
    } else if(data == 'html-button-tag') {
        html_editor.replaceSelection('<button>' + '</button>');
        add_div = $('<div id="html-button-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> button </p></div></div>');
    } else if(data == 'html-select-tag') {
        html_editor.replaceSelection('<select>' + '</select>');
        add_div = $('<div id="html-select-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> select </p></div></div>');
    } else if(data == 'html-option-tag') {
        html_editor.replaceSelection('<option>' + '</option>');
        add_div = $('<div id="html-option-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> option </p></div></div>');
    }

    $("#block-view").append(add_div);

    console.log(data);
}
