// $(document).ready(function (){
//     $h3 = $('h3');
//     $h3.each(function(index) {
//         $(this).replaceWith("<div class='panel panel-default'> <div class='panel-heading section-header'>" + $(this).text() + "</div> </div>");
//     });
// });

$(document).ready(function (){
    $('h3').prepend('<span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>');
});
