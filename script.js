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
        // update tweet url
        var tweetText = ('"' + $('#quote__text').text().trim() + '" ' + $('#quote__author').text().trim()).replace(/\s+/g, ' ');
        $('#button-tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + tweetText);
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
        if (quote.length > 500 || quote.lineBreaks() > 17) fontSize = '30%';
        else if (quote.length > 400 || quote.lineBreaks() > 15) fontSize = '50%';
        else if (quote.length > 350 || quote.lineBreaks() > 12) fontSize = '55%';
        else if (quote.length > 300 || quote.lineBreaks() > 9) fontSize = '60%';
        else if (quote.length > 250 || quote.lineBreaks() > 6) fontSize = '75%';
        else if (quote.length > 200 || quote.lineBreaks() > 5) fontSize = '70%';
        else if (quote.length > 150 || quote.lineBreaks() > 4) fontSize = '75%';
        else if (quote.length > 100 || quote.lineBreaks() > 3) fontSize = '80%';
        $('#quote__content').css('font-size', fontSize);
        // restore quote size
        $('#quote').removeClass('quote--collapsed');
        $('#quote__container').removeClass('quote__container--collapsed');
        });
};

String.prototype.lineBreaks = function() {
    return (this.match(/\<br\>/g) || []).length;
}