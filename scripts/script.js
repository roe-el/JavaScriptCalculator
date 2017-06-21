$(document).ready(function() {
    var math = [];
    var a = [];
    var b = [];
    $('.btn').hover(function() {
        $(this).addClass("focus");
    }, function() {
        $(this).removeClass("focus");
    });
    //Operators
    $('.ac-button').on('click', function() {
        $('.main-input').text('');
        $('.secondary-input').text('');
    })
    $('.ce-button').on('click', function() {
        $('.main-input').text('');
    })
    $('.div-button').on('click', function() {
        $('.main-input').append('/');
        $('.secondary-input').append($('.main-input').text());
        $('.main-input').text('');
    })
    $('.multiply-button').on('click', function() {
        $('.main-input').append('*');
        $('.secondary-input').append($('.main-input').text());
        $('.main-input').text('');
    })
    $('.subtract-button').on('click', function() {
        $('.main-input').append('-');
        $('.secondary-input').append($('.main-input').text());
        $('.main-input').text('');
    })
    $('.add-button').on('click', function() {
        $('.main-input').append('+');
        $('.secondary-input').append($('.main-input').text());
        $('.main-input').text('');
    })
    $('.neg-button').on('click', function() {
        $('.main-input').append('(-)');
    })
    $('.dec-button').on('click', function() {
        $('.main-input').append('.');
    })
    $('.eql-button').on('click', function() {
        $('.secondary-input').append($('.main-input').text());
        
        var math ='';
        math = eval($('.secondary-input').text());
        $('.main-input').text(math);
        })
        //Numbers
    $('.9-button').on('click', function() {
        $('.main-input').append('9');
    })
    $('.8-button').on('click', function() {
        $('.main-input').append('8');
    })
    $('.7-button').on('click', function() {
        $('.main-input').append('7');
    })
    $('.6-button').on('click', function() {
        $('.main-input').append('6');
    })
    $('.5-button').on('click', function() {
        $('.main-input').append('5');
    })
    $('.4-button').on('click', function() {
        $('.main-input').append('4');
    })
    $('.3-button').on('click', function() {
        $('.main-input').append('3');
    })
    $('.2-button').on('click', function() {
        $('.main-input').append('2');
    })
    $('.1-button').on('click', function() {
        $('.main-input').append('1');
    })
    $('.0-button').on('click', function() {
        $('.main-input').append('0');
    })
});
