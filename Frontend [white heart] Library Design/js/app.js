$(function() {

    $('#themeBtnLight').on('click', function() {
        $('#root').toggleClass('light-theme');
        $('#root').toggleClass('dark-theme');
        $(this).css('display', 'none');
        $('#themeBtnDark').css('display', 'block');

    });
    $('#themeBtnDark').on('click', function() {
        $('#root').toggleClass('light-theme');
        $('#root').toggleClass('dark-theme');
        $(this).css('display', 'none');
        $('#themeBtnLight').css('display', 'block');
    });



});
