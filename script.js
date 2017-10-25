$(function(){

    $('#get-quote').click(function() {
    $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand', function(data) {
        // update text
        var quoteObject = data[0];
        quote = quoteObject.content;
        author = quoteObject.title;
        $('#quote__text').html(quote);
        $('#quote__author').html(author);
        // update color
        var color = Please.make_color()[0]; 
        $('#quote').css('color', color);
        $('body').css('background-color', color);
    });
});

});    