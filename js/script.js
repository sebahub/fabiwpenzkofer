$(document).ready(function(){

    console.log('hello');
    let navHeight = $('.werke').height();
    console.log(navHeight);

    $('svg').click(function() {
        $(this).next('.tooltip').toggleClass('hidden');
        $(this).parent().parent().find('.hidden-content').toggleClass('hidden');

    
     });


     
});
