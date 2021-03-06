// get document elements
var dayEl = $('#currentDay');

// show today in jumbotron
var today = moment().format('[Date:] dddd, MMMM Do YYYY');
dayEl.text(today);

// get any item in local storage and populate blocks
$('.hour').each(function() {
    $(this).parent().children('.description').val(localStorage.getItem($(this).parent().children().attr('id')));
});

// colorize blocks
var timerInterval = setInterval(function() {
    // get the current hour
    const hourNow = moment().hours();

    $('.hour').each(function() {
        var hourEl = $(this).attr('id');
        // console.log($(this));
        $(this).parent().removeClass('future');
        $(this).parent().removeClass('present');
        $(this).parent().removeClass('past');

        if (hourNow > hourEl) {
            $(this).parent().addClass('past');
        } else if (hourNow < hourEl) {
            $(this).parent().addClass('future');
        } else {
            $(this).parent().addClass('present');
        }
        
    });
}, 1000);

// add event listener for button
$('.btn').on('click', handleSave);

function handleSave(event) {
    event.preventDefault();

    // save to local storage
    localStorage.setItem($(this).parent().children().attr('id'), $(this).parent().children('.description').val().trim());
};
