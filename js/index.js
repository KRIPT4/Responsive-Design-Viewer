$('#Desktop').click(function() {
	$('#Desktop').addClass('active');
	$('#Mobile').removeClass('active');
	$('#Tablet').removeClass('active');
	$('#TabletP').removeClass('active');
    $('#viewer-iframe-wrapper').removeClass('framed');
    $('#viewer-iframe-wrapper').css({
        'left': '',
        'width': '',
        'margin-left': '',
        'top': '',
        'height': '',
        'margin-top': ''
    });
});
$('#Tablet').click(function() {
	$('#Desktop').removeClass('active');
	$('#Mobile').removeClass('active');
	$('#Tablet').addClass('active');
	$('#TabletP').removeClass('active');
    $('#viewer-iframe-wrapper').addClass('framed');
    $('#viewer-iframe-wrapper').css({
        'left': '50%',
        'width': '1040px',
        'margin-left': '-520px',
        'top': '50%',
        'height': '744px',
        'margin-top': '-345px'
    });
});
$('#TabletP').click(function() {
	$('#Desktop').removeClass('active');
	$('#Mobile').removeClass('active');
	$('#Tablet').removeClass('active');
	$('#TabletP').addClass('active');
    $('#viewer-iframe-wrapper').addClass('framed');
    $('#viewer-iframe-wrapper').css({
        'left': '50%',
        'width': '788px',
        'margin-left': '-394px',
        'top': '50%',
        'height': '744px',
        'margin-top': '-345px'
    });
});
$('#Mobile').click(function() {
	$('#Desktop').removeClass('active');
	$('#Mobile').addClass('active');
	$('#Tablet').removeClass('active');
	$('#TabletP').removeClass('active');
    $('#viewer-iframe-wrapper').addClass('framed');
    $('#viewer-iframe-wrapper').css({
        'left': '50%',
        'width': '375px',
        'margin-left': '-187.5px',
        'top': '50%',
        'height': '568px',
        'margin-top': '-257px'
    });
});
$('#Change').click(function() {
    $("#viewer-iframe").attr('src', $("#url").val());
    $('iframe').attr('src', $('iframe').attr('src'));
});