$(function () {
	$('.header-list').on('click',function () {
        $(this).find('.header-list-content').toggle()
    })
    $('.header-list-content li').on('click',function () {
        $('.header-list-content').hide()
    })
})