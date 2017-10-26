$(function(){

    $('#button-update').click(function() {
        $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&nocache=' + new Date().getTime(), function(data) {
            // update text
            var quoteObject = data[0];
            var quote = quoteObject.content;
            var author = quoteObject.title;
            $('#quote__text').html(quote);
            $('#quote__author').html(author);
            // update color using Please.js
            // http://www.checkman.io/please/
            var color = Please.make_color()[0]; 
            $('#quote').css({
                "color": color,
                "border-color": color
            });
            $('body').css('background-color', color);
        });
    });

});    