var main = function(){
    $('.icon-menu').click(function(){
       $('.menu').animate({
          right: '0px'
       }, 200); 
        $('body').animate({
            left : '-285px'
        },200);
    });
    
    //메뉴 닫을때
    $('.icon-close').click(function(){
       $('.menu').animate({
           right : '-285px'
       },200);
        $('body').animate({
            left:'0px'
        });
    });
   
};
/*이 문서가 로딩이 되면 main을 호출해라*/
$(document).ready(main);