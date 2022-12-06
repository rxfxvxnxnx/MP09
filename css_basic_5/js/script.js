$(window).scroll(function() {
    
    $('.seccio').each(function () {
        // distancia en px de la seccio respecte el top de la web
        let seccio = $(this).offset().top - 400;
        console.log(seccio)

        let check = $(window).scrollTop();

        if(check > seccio) {
        $('body').addClass("seccio" + $(this).data("id"));
        }
        else {
            $("body").removeClass("seccio" + $(this).data("id"));
        }
    });
});

