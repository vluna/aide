<!doctype html>
<html>
    <head>
        <title>AIDE</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

        <link rel="stylesheet" type="text/css" href="css/codemirror.css">
        <link rel="stylesheet" href="http://codemirror.net/lib/codemirror.css">
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <link rel="stylesheet" type="text/css" href="css/grid.css">
    </head>

    <body>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#"><img class="logo" src="img/AIDE-logo.png" alt="AIDE"></a>
                    <ul class="nav navbar-nav">
                        <li><a onclick="runCode()"><img class="new-icon" src="img/icons/new.svg" alt="New"> NEW</a></li>
                        <li><a><img class="open-icon" src="img/icons/open.svg" alt="Open"> OPEN</a></li>
                        <li><a><img class="new-icon" src="img/icons/save.svg" alt="Save"> SAVE</a></li>
                        <li><a><img class="commit-icon" src="img/icons/commit.svg" alt="Commit"> COMMIT</a></li>
                        <li><a><img class="preview-icon" src="img/icons/preview.svg" alt="Previe"> PREVIEW</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="grid">
            <div class="col-1of3">
                <h4 class="html-vocab-panel-header"> HTML Vocabulary Panel </h4>
                <div class="html-vocab-panel">
                    <div class="col-1of4">
                        <div id="html-article-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-article"> article </p></div></div>
                        <div id="html-nav-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> nav </p></div></div>
                        <div id="html-aside-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> aside </p></div></div>
                        <div id="html-section-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-section"> section </p></div></div>
                        <div id="html-header-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> header </p></div></div>
                        <div id="html-footer-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> footer </p></div></div>
                        <div id="html-hone-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h1 </p></div></div>
                        <div id="html-htwo-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h2 </p></div></div>
                        <div id="html-hthree-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h3 </p></div></div>
                        <div id="html-hfour-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h4 </p></div></div>
                        <div id="html-hfive-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h5 </p></div></div>
                        <div id="html-hsix-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> h6 </p></div></div>
                        <div id="html-p-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> p </p></div></div>
                    </div>
                    <div class="col-1of4">
                        <div id="html-main-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> main </p></div></div>
                        <div id="html-blockquote-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-blockquote"> blockquote </p></div></div>
                        <div id="html-ol-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> ol </p></div></div>
                        <div id="html-ul-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> ul </p></div></div>
                        <div id="html-li-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> li </p></div></div>
                        <div id="html-div-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> div </p></div></div>
                        <div id="html-table-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> table </p></div></div>
                        <div id="html-caption-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> caption </p></div></div>
                        <div id="html-thead-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> thead </p></div></div>
                        <div id="html-tbody-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> tbody </p></div></div>
                        <div id="html-tfoot-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-aside"> tfoot </p></div></div>
                        <div id="html-tr-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> tr </p></div></div>
                        <div id="html-th-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> th </p></div></div>
                    </div>
                    <div class="col-1of4">
                        <div id="html-video-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> video </p></div></div>
                        <div id="html-audio-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> audio </p></div></div>
                        <div id="html-canvas-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> canvas </p></div></div>
                        <div id="html-a-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> a </p></div></div>
                        <div id="html-em-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> em </p></div></div>
                        <div id="html-bold-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> strong </p></div></div>
                        <div id="html-u-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> u </p></div></div>
                        <div id="html-s-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> s </p></div></div>
                        <div id="html-textarea-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-blockquote"> textarea </p></div></div>
                        <div id="html-img-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-nav"> img </p></div></div>
                        <div id="html-iframe-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> iframe </p></div></div>
                        <div id="html-figcaption-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-blockquote"> figcaption </p></div></div>
                        <div id="html-hr-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> hr </p></div></div>
                    </div>
                    <div class="col-1of4">
                        <div id="html-q-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> q </p></div></div>
                        <div id="html-cite-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> cite </p></div></div>
                        <div id="html-code-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> code </p></div></div>
                        <div id="html-span-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> span </p></div></div>
                        <div id="html-br-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> br </p></div></div>
                        <div id="html-td-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> td </p></div></div>
                        <div id="html-form-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> form </p></div></div>
                        <div id="html-label-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> label </p></div></div>
                        <div id="html-input-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> input </p></div></div>
                        <div id="html-button-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> button </p></div></div>
                        <div id="html-select-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> select </p></div></div>
                        <div id="html-option-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-header"> option </p></div></div>
                        <div id="html-pre-tag" draggable="true" ondragstart="drag(event)"><div id="chevron"><p class="html-tag-chevron-bold"> pre </p></div></div>
                    </div>
                </div>
                <div id="css">
                    <h3 class="css-tabs">CSS</h3>
                    <textarea id="h" name="css"></textarea>
                </div>
            </div>
            <!-- Sandboxing -->
               
            <div class="col-2of3">
                 <section id="render-panel">
                    <iframe></iframe>
                </section>
                <div id="menu-code-view">
                    <button type="button" id="HTML-editor" class="btn btn-default sub-menu active">HTML</button>
                    <button type="button" id="block-render" class="btn btn-default sub-menu">Block</button>
                    <button type="button" id="render-view" class="btn btn-default sub-menu">Render</button>
                </div>
                <div id="show-render-view">
                    <section id="output">
                        <iframe></iframe>
                    </section>
                </div>
                <div id="show-block-view">
     
                </div>
                <div id="show-HTML-view">
                    <div id="html">
                        <h3 class="html-tabs">HTML</h3>
                        <div ondrop="drop(event)" ondragover="allowDrop(event)">
                            <textarea name="html"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <br>
        <img id="drag1" src="img/stack.png" draggable="true" ondragstart="drag(event)" width="336" height="69">

        <script type="text/javascript" src="lib/codemirror.js"></script>
        <script type="text/javascript" src="lib/xml.js"></script>
        <script type="text/javascript" src="lib/jquery-2.2.1.min.js"></script>
        <script type="text/javascript" src="lib/jquery.base64.min.js"></script>
        <script type="text/javascript" src="js/editor.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
    </body>
</html>