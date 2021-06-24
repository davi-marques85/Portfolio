$(() => {

    
    const menu = $('.container-menu')
    abrirMenu();
    fecherMenu();

    function abrirMenu() {
        const botao = $('.botao-menu')
        $(botao).click(function(e){
            $(menu).fadeIn()
            e.stopPropagation()
        })
    }
    function fecherMenu() {
        const pagina = $('body, .fechar-menu')
        $(pagina).click(function(){
            $(menu).fadeOut()
        })
        $(menu).click(function(e){
            e.stopPropagation()
        })
    }

   

   

});



