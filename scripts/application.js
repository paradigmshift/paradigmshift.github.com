$(document).ready(function (){
    $('h3').prepend('<span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>');
    // increases font-size for emphasis and provides highlighting of important lines
    $('span.display-data').wrap("<span style='font-size:1.2em'></span>");
    $('span.highlight').wrap("<span class='bg-success' style='font-weight:900'></span>");
});
