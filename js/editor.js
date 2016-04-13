var class_array = [];

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
    });
    $('#html-nav-tag').click(function(){
        html_editor.replaceSelection('<nav>' + '</nav>');
    });
    $('#html-aside-tag').click(function(){
        html_editor.replaceSelection('<aside>' + '</aside>');
    });
    $('#html-section-tag').click(function(){
        html_editor.replaceSelection('<section>' + '</section>');
    });
    $('#html-header-tag').click(function(){
        html_editor.replaceSelection('<header>' + '</header>');
    });
    $('#html-footer-tag').click(function(){
        html_editor.replaceSelection('<footer>' + '</footer>');
    });
    $('#html-hone-tag').click(function(){
        html_editor.replaceSelection('<h1>' + '</h1>');
    });
    $('#html-htwo-tag').click(function(){
        html_editor.replaceSelection('<h2>' + '</h2>');
    });
    $('#html-hthree-tag').click(function(){
        html_editor.replaceSelection('<h3>' + '</h3>');
    });
    $('#html-hfour-tag').click(function(){
        html_editor.replaceSelection('<h4>' + '</h4>');
    });
    $('#html-hfive-tag').click(function(){
        html_editor.replaceSelection('<h5>' + '</h5>');
    });
    $('#html-hsix-tag').click(function(){
        html_editor.replaceSelection('<h6>' + '</h6>');
    });
    $('#html-p-tag').click(function(){
        html_editor.replaceSelection('<p>' + '</p>');
    });
    $('#html-main-tag').click(function(){
        html_editor.replaceSelection('<main>' + '</main>');
    });
    $('#html-blockquote-tag').click(function(){
        html_editor.replaceSelection('<blockquote>' + '</blockquote>');
    });
    $('#html-ol-tag').click(function(){
        html_editor.replaceSelection('<ol>' + '</ol>');
    });
    $('#html-ul-tag').click(function(){
        html_editor.replaceSelection('<ul>' + '</ul>');
    });
    $('#html-li-tag').click(function(){
        html_editor.replaceSelection('<li>' + '</li>');
    });
    $('#html-div-tag').click(function(){
        html_editor.replaceSelection('<div>' + '</div>');
    });
    $('#html-table-tag').click(function(){
        html_editor.replaceSelection('<table>' + '</table>');
    });
    $('#html-caption-tag').click(function(){
        html_editor.replaceSelection('<caption>' + '</caption>');
    });
    $('#html-thead-tag').click(function(){
        html_editor.replaceSelection('<thead>' + '</thead>');
    });
    $('#html-tbody-tag').click(function(){
        html_editor.replaceSelection('<tbody>' + '</tbody>');
    });
    $('#html-tfoot-tag').click(function(){
        html_editor.replaceSelection('<tfoot>' + '</tfoot>');
    });
    $('#html-tr-tag').click(function(){
        html_editor.replaceSelection('<tr>' + '</tr>');
    });
    $('#html-th-tag').click(function(){
        html_editor.replaceSelection('<th>' + '</th>');
    });
    $('#html-video-tag').click(function(){
        html_editor.replaceSelection('<video>' + '</video>');
    });
    $('#html-audio-tag').click(function(){
        html_editor.replaceSelection('<audio>' + '</audio>');
    });
    $('#html-canvas-tag').click(function(){
        html_editor.replaceSelection('<canvas>' + '</canvas>');
    });
    $('#html-a-tag').click(function(){
        html_editor.replaceSelection('<a>' + '</a>');
    });
    $('#html-em-tag').click(function(){
        html_editor.replaceSelection('<em>' + '</em>');
    });
    $('#html-strong-tag').click(function(){
        html_editor.replaceSelection('<strong>' + '</strong>');
    });
    $('#html-u-tag').click(function(){
        html_editor.replaceSelection('<u>' + '</u>');
    });
    $('#html-s-tag').click(function(){
        html_editor.replaceSelection('<s>' + '</s>');
    });
    $('#html-textarea-tag').click(function(){
        html_editor.replaceSelection('<textarea>' + '</textarea>');
    });
    $('#html-img-tag').click(function(){
        html_editor.replaceSelection('<img>' + '</img>');
    });
    $('#html-iframe-tag').click(function(){
        html_editor.replaceSelection('<iframe>' + '</iframe>');
    });
    $('#html-figcaption-tag').click(function(){
        html_editor.replaceSelection('<figcaption>' + '</figcaption>');
    });
    $('#html-hr-tag').click(function(){
        html_editor.replaceSelection('<hr>' + '</hr>');
    });
    $('#html-q-tag').click(function(){
        html_editor.replaceSelection('<q>' + '</q>');
    });
    $('#html-cite-tag').click(function(){
        html_editor.replaceSelection('<cite>' + '</cite>');
    });
    $('#html-code-tag').click(function(){
        html_editor.replaceSelection('<code>' + '</code>');
    });
    $('#html-span-tag').click(function(){
        html_editor.replaceSelection('<span>' + '</span>');
    });
    $('#html-br-tag').click(function(){
        html_editor.replaceSelection('<br>');
    });
    $('#html-td-tag').click(function(){
        html_editor.replaceSelection('<td>' + '</td>');
    });
    $('#html-form-tag').click(function(){
        html_editor.replaceSelection('<form>' + '</form>');
    });
    $('#html-label-tag').click(function(){
        html_editor.replaceSelection('<label>' + '</label>');
    });
    $('#html-input-tag').click(function(){
        html_editor.replaceSelection('<input>' + '</input>');
    });
    $('#html-button-tag').click(function(){
        html_editor.replaceSelection('<button>' + '</button>');
    });
    $('#html-select-tag').click(function(){
        html_editor.replaceSelection('<select>' + '</select>');
    });
    $('#html-option-tag').click(function(){
        html_editor.replaceSelection('<option>' + '</option>');
    });
    $('#html-pre-tag').click(function(){
        html_editor.replaceSelection('<pre>' + '</pre>');
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

// SETTING CODE EDITORS INITIAL CONTENT
html_editor.setValue('<p>Hello World</p>');
css_editor.setValue('body { color: red; }');

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
        html_editor.replaceSelection('<b>' + '</b>');
    } else if(data == 'html-article-tag') {
        html_editor.replaceSelection('<article>' + '</article>');
    } else if(data == 'html-nav-tag') {
        html_editor.replaceSelection('<nav>' + '</nav>');
    } else if(data == 'html-aside-tag') {
        html_editor.replaceSelection('<aside>' + '</aside>');
    } else if(data == 'html-section-tag') {
        html_editor.replaceSelection('<section>' + '</section>');
    } else if(data == 'html-header-tag') {
        html_editor.replaceSelection('<header>' + '</header>');
    } else if(data == 'html-footer-tag') {
        html_editor.replaceSelection('<footer>' + '</footer>');
    } else if(data == 'html-hone-tag') {
        html_editor.replaceSelection('<h1>' + '</h1>');
    } else if(data == 'html-htwo-tag') {
        html_editor.replaceSelection('<h2>' + '</h2>');
    } else if(data == 'html-hthree-tag') {
        html_editor.replaceSelection('<h3>' + '</h3>');
    } else if(data == 'html-hfour-tag') {
        html_editor.replaceSelection('<h4>' + '</h4>');
    } else if(data == 'html-hfive-tag') {
        html_editor.replaceSelection('<h5>' + '</h5>');
    } else if(data == 'html-hsix-tag') {
        html_editor.replaceSelection('<h6>' + '</h6>');
    } else if(data == 'html-q-tag') {
        html_editor.replaceSelection('<q>' + '</q>');
    } else if(data == 'html-main-tag') {
        html_editor.replaceSelection('<main>' + '</main>');
    } else if(data == 'html-video-tag') {
        html_editor.replaceSelection('<video>' + '</video>');
    } else if(data == 'html-audio-tag') {
        html_editor.replaceSelection('<audio>' + '</audio>');
    } else if(data == 'html-p-tag') {
        html_editor.replaceSelection('<p>' + '</p>');
    } else if(data == 'html-hr-tag') {
        html_editor.replaceSelection('<hr>' + '</hr>');
    } else if(data == 'html-pre-tag') {
        html_editor.replaceSelection('<pre>' + '</pre>');
    } else if(data == 'html-blockquote-tag') {
        html_editor.replaceSelection('<blockquote>' + '</blockquote>');
    } else if(data == 'html-ul-tag') {
        html_editor.replaceSelection('<ul>' + '</ul>');
    } else if(data == 'html-ol-tag') {
        html_editor.replaceSelection('<ol>' + '</ol>');
    } else if(data == 'html-li-tag') {
        html_editor.replaceSelection('<li>' + '</li>');
    } else if(data == 'html-div-tag') {
        html_editor.replaceSelection('<div>' + '</div>');
    } else if(data == 'html-table-tag') {
        html_editor.replaceSelection('<table>' + '</table>');
    } else if(data == 'html-caption-tag') {
        html_editor.replaceSelection('<caption>' + '</caption>');
    } else if(data == 'html-thead-tag') {
        html_editor.replaceSelection('<thead>' + '</thead>');
    } else if(data == 'html-tbody-tag') {
        html_editor.replaceSelection('<tbody>' + '</tbody>');
    } else if(data == 'html-tfoot-tag') {
        html_editor.replaceSelection('<tfoot>' + '</tfoot>');
    } else if(data == 'html-tr-tag') {
        html_editor.replaceSelection('<tr>' + '</tr>');
    } else if(data == 'html-th-tag') {
        html_editor.replaceSelection('<th>' + '</th>');
    } else if(data == 'html-canvas-tag') {
        html_editor.replaceSelection('<canvas>' + '</canvas>');
    } else if(data == 'html-a-tag') {
        html_editor.replaceSelection('<a>' + '</a>');
    } else if(data == 'html-em-tag') {
        html_editor.replaceSelection('<em>' + '</em>');
    } else if(data == 'html-u-tag') {
        html_editor.replaceSelection('<u>' + '</u>');
    } else if(data == 'html-s-tag') {
        html_editor.replaceSelection('<s>' + '</s>');
    } else if(data == 'html-textarea-tag') {
        html_editor.replaceSelection('<textarea>' + '</textarea>');
    } else if(data == 'html-img-tag') {
        html_editor.replaceSelection('<img>' + '</img>');
    } else if(data == 'html-iframe-tag') {
        html_editor.replaceSelection('<iframe>' + '</iframe>');
    } else if(data == 'html-figcaption-tag') {
        html_editor.replaceSelection('<figcaption>' + '</figcaption>');
    } else if(data == 'html-cite-tag') {
        html_editor.replaceSelection('<cite>' + '</cite>');
    } else if(data == 'html-code-tag') {
        html_editor.replaceSelection('<code>' + '</code>');
    } else if(data == 'html-span-tag') {
        html_editor.replaceSelection('<span>' + '</span>');
    } else if(data == 'html-br-tag') {
        html_editor.replaceSelection('<br>' + '</br>');
    } else if(data == 'html-td-tag') {
        html_editor.replaceSelection('<td>' + '</td>');
    } else if(data == 'html-form-tag') {
        html_editor.replaceSelection('<form>' + '</form>');
    } else if(data == 'html-label-tag') {
        html_editor.replaceSelection('<label>' + '</label>');
    } else if(data == 'html-input-tag') {
        html_editor.replaceSelection('<input>' + '</input>');
    } else if(data == 'html-button-tag') {
        html_editor.replaceSelection('<button>' + '</button>');
    } else if(data == 'html-select-tag') {
        html_editor.replaceSelection('<select>' + '</select>');
    } else if(data == 'html-option-tag') {
        html_editor.replaceSelection('<option>' + '</option>');
    }

















    console.log(data);
}
