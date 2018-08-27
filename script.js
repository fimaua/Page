
$('#ccolor').click(function () {
    $('#color').toggle(1500);
});
$('.colors').click(function () {
    var color = $(this).data('color-image');
    $('#img').attr('src', color);
    if (color == "img/white.png") {
        $('.sizes[data-size="M"]').hide(300);
        $('.sizes[data-size="XXL"]').hide(300);
        $('.sizes[data-size="XL"]').show(300);
        $('.sizes[data-size="S"]').show(300);
        $('.sizes[data-size="XS"]').show(300);
        $('.sizes[data-size="L"]').show(300);
    } else if (color == "img/red.png") {
        $('.sizes[data-size="M"]').hide(300);
        $('.sizes[data-size="XXL"]').hide(300);
        $('.sizes[data-size="XL"]').show(300);
        $('.sizes[data-size="S"]').show(300);
        $('.sizes[data-size="XS"]').hide(300);
        $('.sizes[data-size="L"]').show(300);
    } else if (color == "img/blue.png") {
        $('.sizes[data-size="M"]').show(300);
        $('.sizes[data-size="XXL"]').show(300);
        $('.sizes[data-size="XL"]').show(300);
        $('.sizes[data-size="S"]').show(300);
        $('.sizes[data-size="XS"]').show(300);
        $('.sizes[data-size="L"]').hide(300);
    } else if (color == "img/green.png") {
        $('.sizes[data-size="M"]').hide(300);
        $('.sizes[data-size="XXL"]').hide(300);
        $('.sizes[data-size="XL"]').show(300);
        $('.sizes[data-size="S"]').show(300);
        $('.sizes[data-size="XS"]').hide(300);
        $('.sizes[data-size="L"]').hide(300);
    } else if (color == "img/lightblue.png") {
        $('.sizes[data-size="M"]').show(300);
        $('.sizes[data-size="XXL"]').hide(300);
        $('.sizes[data-size="XL"]').hide(300);
        $('.sizes[data-size="S"]').show(300);
        $('.sizes[data-size="XS"]').show(300);
        $('.sizes[data-size="L"]').show(300);
    } else if (color == "img/yellow.png") {
        $('.sizes[data-size="M"]').show(300);
        $('.sizes[data-size="XXL"]').show(300);
        $('.sizes[data-size="XL"]').show(300);
        $('.sizes[data-size="S"]').show(300);
        $('.sizes[data-size="XS"]').show(300);
        $('.sizes[data-size="L"]').show(300);
    } else if (color == "img/brown.png") {
        $('.sizes[data-size="M"]').hide(300);
        $('.sizes[data-size="XXL"]').hide(300);
        $('.sizes[data-size="XL"]').show(300);
        $('.sizes[data-size="S"]').show(300)
        $('.sizes[data-size="XS"]').hide(300)
        $('.sizes[data-size="L"]').show(300)
    } else if (color == "img/black.png") {
        $('.sizes[data-size="M"]').hide(300);
        $('.sizes[data-size="XXL"]').show(300);
        $('.sizes[data-size="XL"]').show(300);
        $('.sizes[data-size="S"]').hide(300);
        $('.sizes[data-size="XS"]').show(300);
        $('.sizes[data-size="L"]').show(300);
    };
});
