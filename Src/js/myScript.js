"use strict"
$(document).ready(function(){
let type_price = 0;
let device_price = 0;
let design_price = 0;
let matrix = [
    [10000,15000,20000],
    [5000,3000,1000],
    [6000,12000,18000]
];
$(".t1").click(function(){
    type_price = matrix[0][0];
});
$(".t2").click(function(){
    type_price = matrix[0][1];
});
$(".t3").click(function(){
    type_price = matrix[0][2];
});
$(".a1").click(function(){
    type_price = matrix[2][0];
});
$(".a2").click(function(){
    type_price = matrix[2][1];
});
$(".a3").click(function(){
    type_price = matrix[2][2];
});
$(".d1").click(function(){
    type_price = matrix[1][0];
});
$(".d2").click(function(){
    type_price = matrix[1][1];
});
$(".d3").click(function(){
    type_price = matrix[1][2];
});
let summ = type_price + device_price + design_price;
    $(".s").change(function(){
       $('.s').text('Стоимость '+ $('summ')) 
    });
let options = {theshold [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $("element-animation");
    elements.each((i, el) =>{
        observer.observe(el);
    });
 let options = {theshold [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $("element-picture");
    elements.each((i, el) =>{
        observer.observe(el);
    });   
$(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) => {

            if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")){
                        $(el).removeClass("active");

                    }
                });
                
                $('nav li:eq('+ i +')').find('a').addClass('active');
            }

        });

    });
   
function onEntry(entry){
    entry.forEach(change=>{
      if (change.isIntersecting)  {
          change.target.classList.add('show-animation');
      }
    });
}
  
function onEntry(entry){
    entry.forEach(change=>{
      if (change.isIntersecting)  {
          change.target.src = change.target.dataset.src
      }
    });
}
    });
