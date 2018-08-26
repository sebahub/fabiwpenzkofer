$(document).ready(function(){

    console.log('hello');


    $('h2').click(function() {
        $(this).next('.tooltip').toggleClass('hidden');
        $(this).parent().parent().find('.hidden-content').toggleClass('hidden');

    
     });

     


});