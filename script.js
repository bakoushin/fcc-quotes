$(function(){

var getQuote = function() {

    // object for storing all nessesary quote properties
    var quote = {
        "quoteReady": false,
        "colorReady": false,
        "quote": "",
        "author": "",
        "textColor": 0xFFF,
        "backgroundColor": 0x000,
        "ready": function() {
            return this.quoteReady && this.colorReady;
        }
    };

    // get random quote on design
    $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand', function(data) {
        var quoteObject = data[0];
        quote.text = quoteObject.content;
        quote.author = quoteObject.title;
        quote.quoteReady = true;
        updateQuote(quote);
    });

    // get random color scheme
    $.getJSON('http://www.colr.org/json/scheme/random', function(data) {
        var colors = data.schemes[0].colors;
        quote.backgroundColor = colors[colors.length - 1];
        quote.textColor = colors[0];
        quote.colorReady = true;
        updateQuote(quote);
    });

}

var updateQuote = function(quote) {
    if (quote.ready()) {
        $('#quote__text').html(quote.text);
        $('#quote__author').html(quote.author);
        $('#quote__text').css('color', quote.textColor);
        $('body').css('background-color', quote.backgroundColor);
    }
}

$('#get-quote').click(getQuote);

});    