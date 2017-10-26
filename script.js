$(function(){

    updateQuote();

    $('#button-update').click(updateQuote);

});

var updateQuote = function() {
    // collapse quote
    $('#quote').addClass('quote--collapsed');
    $('#quote__container').addClass('quote__container--collapsed');
    // get new quote
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
        // adjust font size for long text
        var fontSize = '100%';
        if (quote.length > 400) fontSize = '50%';
        else if (quote.length > 350) fontSize = '55%';
        else if (quote.length > 300) fontSize = '60%';
        else if (quote.length > 250) fontSize = '75%';
        else if (quote.length > 200) fontSize = '70%';
        else if (quote.length > 150) fontSize = '75%';
        else if (quote.length > 100) fontSize = '80%';
        $('#quote__content').css('font-size', fontSize);
        // restore quote size
        $('#quote').removeClass('quote--collapsed');
        $('#quote__container').removeClass('quote__container--collapsed');
        });
};