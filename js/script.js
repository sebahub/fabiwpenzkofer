$(document).ready(function(){

    console.log('hello');
    let navHeight = $('.werke').height();
    console.log(navHeight);

    $('h2').click(function() {
        $(this).next('.tooltip').toggleClass('hidden');
        $(this).parent().parent().find('.hidden-content').toggleClass('hidden');

    
     });

     $('section').css('margin-top', '+navHeight');
     
   

});
