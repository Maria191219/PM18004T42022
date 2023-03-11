console.log('your loading javascript has been loaded...')

$(document).ready(function () {
    var div_box = "<div id='load-screen'><div id='loading'></div></div>";
    $("body").prepend(div_box);
    $("#load-screen")
      .delay(800)
      .fadeOut(500, function () {
        $(this).remove();
      });
    console.log('loading image has been done...');
  });