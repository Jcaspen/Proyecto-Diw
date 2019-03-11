function cargaInicial() {
    $("body").css({"background-image":"url('./img/flower.jpg')"});
    $("body").append("<h1>Bienvenido a la página de Castillo</h1>");
    $("body").append("<div><p>Crea tu propia página web con 'DIW Castillo', fácil y totalmente personalizable.</p></div>");
    $("h1,p").css({"color": "#478447"});
    $("body").append("<div><a id='btnInicial' class='flotante' href='modCreator2.html' >Presiona aquí y verás el menú.</a>");
}
$(function() {
    $(window).click(function(event) {
        cargaInicial();
        $(window).off( "click");
    });
});
