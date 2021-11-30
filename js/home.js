$(window).scroll(function(){
    if($(window).scrollTop() >= 50){
        $('.navbar').css('background','white');
        $('.navbar').css('box-shadow','2px 2px 5px grey')
        $('.book').css('border','1px #f3632b solid')

    }
    else {
        $('.navbar').css('background','transparent');       
        $('.book').css('border','none');
        $('.navbar').css('box-shadow','none');

        }
})