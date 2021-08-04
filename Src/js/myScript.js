$(document).ready(function () {

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.title_container');
    elements.each((i, el) => {
        observer.observe(el);
    });

    let options_1 = {
        threshold: [0.5]
    };
    let observer_1 = new IntersectionObserver(onEntry_1, options_1);
    let elements_1 = $(".element-picture");
    elements_1.each((i, el) => {
        observer_1.observe(el);
    });
    let options_2 = {
        threshold: [0.5]
    };
    let observer_2 = new IntersectionObserver(onEntry_2, options_2);
    let elements_2 = $(".spin");
    elements_2.each((i, el) => {
        observer_2.observe(el);
    });

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $(".section").each((i, el) => {
            if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });

                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }

        });

    });
    let type_price = 0;
    let device_price = 0;
    let design_price = 0;
    let matrix = [
    [10000, 15000, 20000],
    [5000, 3000, 1000],
    [6000, 12000, 18000]
];
    $(".t1").click(function () {
        $("type_price").attr("type_price", [10000]);
    });
    $(".t2").click(function () {
        type_price = matrix[0][1];
    });
    $(".t3").click(function () {
        type_price = matrix[0][2];
    });
    console.log(type_price);
    $(".a1").click(function () {
        type_price = matrix[2][0];
    });
    $(".a2").click(function () {
        type_price = matrix[2][1];
    });
    $(".a3").click(function () {
        type_price = matrix[2][2];
    });
    $(".d1").click(function () {
        type_price = matrix[1][0];
    });
    $(".d2").click(function () {
        type_price = matrix[1][1];
    });
    $(".d3").click(function () {
        type_price = matrix[1][2];
    });
    let summ = type_price + device_price + design_price;
    console.log(summ);
    $(".s").change(function () {
        $('.s').text('Стоимость ' + $('summ'))
    });
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show-element');
        }
    });
}

function onEntry_1(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            $(".element-picture").attr("src", "../Src/img/cases_pic.png")
        }
    });

}

function onEntry_2(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('crement');
        }
    });
    $(".crement").spincrement({
        duration: 2000
    });
}
