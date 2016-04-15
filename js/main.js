$("#show-render-view").hide();
$("#show-block-view").hide();

$("#menu-code-view .btn").click(function(){
    $("#menu-code-view .btn").removeClass('active');
    $(this).toggleClass('active'); 
});

$("#HTML-editor").click(function(){
	$("#show-HTML-view").show();
	$("#show-render-view").hide();
    $("#show-block-view").hide();
});

$("#block-render").click(function(){
	$("#show-HTML-view").hide();
	$("#show-render-view").hide();
    $("#show-block-view").show();
});

$("#render-view").click(function(){
	$("#show-HTML-view").hide();
	$("#show-render-view").show();
    $("#show-block-view").hide();
});