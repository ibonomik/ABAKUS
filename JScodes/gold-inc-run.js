// GOLD JQ - INCLUDE AND RUN HTML SCRIPT BASI

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = $(this).data('include')
        $(this).load(file)
    })
})

