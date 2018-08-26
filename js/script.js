$(document).ready(function(){

    console.log('hello');


    $('h2').click(function() {
        $(this).next('.tooltip').toggleClass('hidden');

    
     });


});