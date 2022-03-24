var anchorClicked = false;

$(window).on('resize', setHeight);

$('.learn-more a').click(function(e) {
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    e.preventDefault();
    $('body,html').animate({
        scrollTop: top
    }, 800, 'swing');

});

function setHeight() {
    if ($(window).width() < 768) {
        $('.screen, .steps').height('auto');
        $('.steps .item').css('top', 0);
    } else {
        $('.screen').css('height', $(window).height());
        $('.steps').css('height', function() {
            return $(this).children().eq(0).outerHeight(true) * $(this).children().length;
        });
        $('.steps .item').css('top', function() {
            return $(this).index() * $(this).outerHeight(true);
        });
    }
}

setHeight();
$(function() {
    $('[data-toggle=popover]').popover();
});
$(function() {
    $('[data-toggle=tooltip]').tooltip();
})
// $('.login-collapse').collapse({toggle:false});
$('.navbar-right')
    .on('show.bs.collapse', function() {
        $('.nav').addClass('faded');
    })
    .on('hide.bs.collapse', function() {
        $('.nav').removeClass('faded');
    });

$('body').addClass('loaded');
$('.how-it-works .item').each(function() {
    var index = $(this).index(),
        el = $(this);


    $(this).affix({
        offset: {
            top: function() {
                var affix = this,
                    height = el.outerHeight(true),
                    offset = $('.steps')
                            .offset()
                            .top + index * height;
                return offset;
            }
        }

    });
});
$(window)
    .one(
    'scroll',
    function() {
        if ($('.web_home-route').length > 0 && !anchorClicked) {
            ga(
                'send',
                'event',
                'input', // category
                'scroll', // action
                'home page scroll' // label
            );
        }
    }
);
$('.web_home-route .caption .btn')
    .on(
    'click',
    function() {
        anchorClicked = true;
        ga(
            'send',
            'event',
            'navigation', // category
            'anchor-click', // action
            'home masthead call to action' // label
        );
    }
);
// $('.selectpicker').selectpicker();

$('#carousel').carousel({interval: 10000})
