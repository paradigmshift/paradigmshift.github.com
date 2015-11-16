// $(document).ready(function (){
//     $h3 = $('h3');
//     $h3.each(function(index) {
//         $(this).replaceWith("<div class='panel panel-default'> <div class='panel-heading section-header'>" + $(this).text() + "</div> </div>");
//     });
// });

$(document).ready(function (){
    $('h3').prepend('<span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>');
    $('span.display-data').wrap("<span style='font-size:1.2em'></span>")
    $('span.highlight').wrap("<span class='bg-success' style='font-weight:900'></span>")
});
