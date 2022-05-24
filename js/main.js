document.addEventListener('DOMContentLoaded', function() {
    
    var allTabs = document.querySelectorAll('.tabs-list__item');
    // Текст
    var allText = document.querySelectorAll('.text-info');
    for (var i = 0; i < allTabs.length; i++) {
        allTabs[i].addEventListener('click', function(event){
            // Для Табов
            var activeTabs = document.querySelector('.tabs-list__item_active');
            activeTabs.classList.remove('tabs-list__item_active');
            event.target.classList.add('tabs-list__item_active');
            // Для Текста
            var activeText = document.querySelector('.text-info_active');
            activeText.classList.remove('text-info_active');

            var textValue = event.target.dataset.tab;
            var changeText = document.querySelector('article[data-text="' + textValue + '"]');
            changeText.classList.add('text-info_active');
        });
    }

    let captionsList = document.querySelectorAll('.caption-item');
    let unitsList = document.querySelectorAll('.unit');

    captionsList.forEach(function (item, index) {
    item.addEventListener('mouseover', function () {
        unitsList[index].classList.add('hovered');
    });
    
    item.addEventListener('mouseout', function () {
        unitsList[index].classList.remove('hovered');
    });
    });
});


//Select
jQuery(($) => {
	$('.select').on('click', '.select__head', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).next().hide();
		} else {
			$('.select__head').removeClass('open');
			$('.select__popup').hide();
			$(this).addClass('open');
			$(this).next().show();
		}
	});

	$('.select').on('click', '.select__item', function () {
		$('.select__head').removeClass('open');
		$(this).parent().parent().hide();
		$(this).parent().parent().prev().text($(this).text());
		$(this).parent().parent().prev().prev().val($(this).text());
	});

	$(document).click(function (e) {
		if (!$(e.target).closest('.select').length) {
			$('.select__head').removeClass('open');
			$('.select__popup').hide();
		}
	});
});