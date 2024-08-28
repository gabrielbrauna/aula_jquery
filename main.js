$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImg = $('#id-endereco-img-nova').val();

        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImg}" />`).appendTo(novoItem);
        $(`
            <div class="overlay">
                <a href="${enderecoNovaImg}" title="Ver imagem em tamanho original" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
            
            `).appendTo(novoItem);

            $(novoItem).appendTo('ul');

            $(novoItem).fadeIn(1000);

            $('#id-endereco-img-nova').val('');

    })
});