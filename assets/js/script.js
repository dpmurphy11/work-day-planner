// get document elements
var dayEl = $('#currentDay');
var hourEL9 = $('#9');
var hourEL10 = $('#10');
var hourEL11 = $('#11');
var hourEL12 = $('#12');
var hourEL1 = $('#1');
var hourEL2 = $('#2');
var hourEL3 = $('#3');
var hourEL4 = $('#4');
var hourEL5 = $('#5');

// show today in jumbotron
var today = moment().format('[Date:] dddd, MMMM Do YYYY');
dayEl.text(today);

// get any local storage and print it
for (var i=9; i<18; i++ ) {
    console.log(localStorage.getItem(i));
    $(`#i`).parent().children().attr('id').val(localStorage.getItem(i));
}

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

    // save
    localStorage.setItem($(this).parent().children().attr('id'), $(this).parent().children('.description').val().trim());

}
