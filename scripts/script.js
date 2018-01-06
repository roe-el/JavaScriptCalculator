/***********************************************************************
 ** Name: Roel Garcia
 ** Date: 1/
/ ** Description: File that contains the code for a simple web based
 ** calc
 ***********************************************************************/
$(document).ready(function() {
    var math = [];
    var equal, equal2 = false;
    $('.btn').hover(function() {
        $(this).addClass("focus");
    }, function() {
        $(this).removeClass("focus");
    });
    //Operators
    $('.ac-button').on('click', function() {
        $('.main-input').text('');
        $('.secondary-input').text('');
    });
    $('.ce-button').on('click', function() {
        $('.main-input').text('');
    });
    $('.op-btn').on('click', function() {
        addOn();
        if ($(this).text() === "x") {
            $('.main-input').append("*");
            $('.secondary-input').append($('.main-input').text());
            $('.main-input').text('');
        } else {
            $('.main-input').append($(this).text());
            $('.secondary-input').append($('.main-input').text());
            $('.main-input').text('');
        }
    });
    $('.dec-button').on('click', function() {
        newCalc();
        if ($('.main-input').text() === '') {
            $('.main-input').append('0.');
        } else {
            $('.main-input').append('.');
        }
    });
    $('.eql-button').on('click', function() {
        $('.secondary-input').append($('.main-input').text());

        math = '';
        try {
            math = eval($('.secondary-input').text());
            console.log("Math: " + math);
            $('.main-input').text(math);
            equal = equal2 = true;
        } catch (err) {
            $('.main-input').text("Error");
            equal2 = true;
            console.log(err);
        }
    });

    function addOn() {
        if (equal === true) {
            $('.secondary-input').text('');
            equal = equal2 = false;
        }
    }

    function newCalc() {
        if (equal2 === true) {
            $('.main-input').text('');
            $('.secondary-input').text('');
            equal2 = false;
        }
    }
    //Numbers
    $('.key').on('click', function() {
        newCalc();
        $('.main-input').append($(this).text());
    });
});
