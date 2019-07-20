$(document).ready(function () {

    // Navbar

    var scrollPage = true
    $('#logo-name').click(function (e) {
        scrollPage = false
        $('.nav-link').removeClass('active')
        $('.nav-link img').remove()
        $('.nav-link').filter("[id='home-menu']").addClass('active').prepend('<img src="./img/icon/home.svg" style="width:15px;margin-right:10px;margin-top:-2px;">')
        $('html, body').stop().animate({
            scrollTop: 0
        }, 400);
        e.preventDefault()
    })
    var lastId,
        topMenu = $(".navbar"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight + 90;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if ($(window).width() < 1000) {
        $('.nav-link').each(function (i) {
            var idPage = $('.nav-link').eq(i).attr('id')
            var img
            switch (idPage) {
                case 'home-menu':
                    var img = 'home.svg'
                    break;
                case 'portfolio-menu':
                    var img = 'portfolio.svg'
                    break;
                case 'contact-menu':
                    var img = 'contact.svg'
                    break;
                case 'about-menu':
                    var img = 'about.svg'
                    break;
                case 'timeline-menu':
                    var img = 'timeline-blue.svg'
                    break;

                default:
                    break;
            }
            $(this).prepend('<img src="./img/icon/' + img + '" style="width:15px;margin-right:10px;margin-top:-2px;">')
        })
    } else {
        var lastId,
            topMenu = $(".navbar"),
            topMenuHeight = topMenu.outerHeight() + 15,
            // All list items
            menuItems = topMenu.find("a"),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function () {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight + 90;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        // var idP/age = $('.nav-link').eq(i).attr('id')
        var img
        switch (id) {
            case 'home':
                var img = 'home.svg'
                break;
            case 'portfolio':
                var img = 'portfolio.svg'
                break;
            case 'contact':
                var img = 'contact.svg'
                break;
            case 'about':
                var img = 'about.svg'
                break;
            case 'timeline':
                var img = 'timeline-blue.svg'
                break;

            default:
                break;
        }
        $('.nav-link').filter("[href='#" + id + "']").addClass('active')
            .prepend('<img src="./img/icon/' + img + '" style="width:15px;margin-right:10px;margin-top:-2px;">')
    }

    // Navbar-Menu On Click

    function navbarOnclick() {

    }
    $('.nav-link').each(function (i) {
        $('.nav-link').eq(i).click(function (e) {
            if ($(window).width() >= 1000) {
                scrollPage = false
                if ($('.nav-link').hasClass('active')) {
                    $('.nav-link img').remove()
                    $('.nav-link').removeClass('active')
                }
                var id = $(this).attr('id')
                var img
                $('.nav-link').eq(i).addClass('active')
                switch (id) {
                    case 'home-menu':
                        var img = 'home.svg'
                        break;
                    case 'portfolio-menu':
                        var img = 'portfolio.svg'
                        break;
                    case 'contact-menu':
                        var img = 'contact.svg'
                        break;
                    case 'about-menu':
                        var img = 'about.svg'
                        break;
                    case 'timeline-menu':
                        var img = 'timeline-blue.svg'
                        break;

                    default:
                        break;
                }
                $('.nav-link').eq(i).prepend('<img src="./img/icon/' +
                    img + '" style="width:15px;margin-right:10px;margin-top:-2px;margin-left:-25px;">')
            } else {
                if ($(this).hasClass('active')) {
                    return
                } else {
                    $('.nav-link.active').removeClass('active')
                    $(this).addClass('active')
                    $('.nav-link.active img').remove(':first')
                }
            }
        })

    })

    // Navbar-Menu On Hover
    $('.nav-link').hover(function () {
        var id = $(this).attr('id')
        var img
        switch (id) {
            case 'home-menu':
                var img = 'home.svg'
                break;
            case 'portfolio-menu':
                var img = 'portfolio.svg'
                break;
            case 'contact-menu':
                var img = 'contact.svg'
                break;
            case 'about-menu':
                var img = 'about.svg'
                break;
            case 'timeline-menu':
                var img = 'timeline-blue.svg'
                break;

            default:
                break;
        }
        if ($(this).hasClass('active')) {
            return
        } else {
            $(this).prepend('<img src="./img/icon/' +
                img + '" style="width:15px;margin-right:10px;margin-top:-2px;margin-left:-25px;">')
        }
    }, function () {
        if ($(this).hasClass('active')) {
            return
        } else {
            if ($(window).width() >= 1000) {
                $(this).find('img').hide()
            }
        }
    })

    // Cache selectors
    var lastId,
        topMenu = $(".navbar"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 400);
        e.preventDefault();
    });

    $(window).on('scrollstop', function () {
        scrollPage = true
    })

    // Bind to scroll
    $(window).scroll(function () {
        if (scrollPage == true) {
            navbarScrollpage()
        } else {
            return
        }
    })

    function navbarScrollpage() {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight + 90;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            if ($(window).width() >= 1000) {
                menuItems.removeClass('active')
                menuItems.children().remove()
                switch (id) {
                    case 'home':
                        var img = 'home.svg'
                        break;
                    case 'portfolio':
                        var img = 'portfolio.svg'
                        break;
                    case 'contact':
                        var img = 'contact.svg'
                        break;
                    case 'about':
                        var img = 'about.svg'
                        break;
                    case 'timeline':
                        var img = 'timeline-blue.svg'
                        break;

                    default:
                        break;
                }
                menuItems.filter("[href='#" + id + "']").addClass('active').prepend('<img src="./img/icon/' +
                    img + '" style="width:15px;margin-right:10px;margin-top:-2px;margin-left:-25px;">')
                if (id == 'contact') {
                    $('.contact-content.info').animate({
                        opacity: 1
                    }, 500)
                    $('.contact-content.email').animate({
                        opacity: 1
                    }, 500)
                }
            }
        }
    }

    // End Navbar

    // HomePage

    $('.btn-homepage a').click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 400);
        e.preventDefault();
    });

    $('.jumbotron a').each(function (i) {
        $('.jumbotron a').eq(i).hover(function () {
            var link = $('.jumbotron a').eq(i).attr('href')
            var img
            var text
            switch (link) {
                case '#contact':
                    var img = 'contact-white.svg'
                    var text = 'hire me'
                    break;
                case '#portfolio':
                    var img = 'portfolio-white.svg'
                    var text = 'my project'
                    break;

                default:
                    break;
            }
            $(this).children().remove()
            $(this).html('<img src="./img/icon/' + img + '" alt="" style="margin-top:-70px"> ' + text + '')
            $('.jumbotron a img').eq(i).animate({
                margin: "0px 0px 5px 0px",
            }, "fast")
        }, function () {
            var link = $('.jumbotron a').eq(i).attr('href')
            var img
            var text
            switch (link) {
                case '#contact':
                    var img = 'contact-white.svg'
                    var text = 'hire me'
                    break;
                case '#portfolio':
                    var img = 'portfolio-black.svg'
                    var text = 'my project'
                    break;

                default:
                    break;
            }
            $(this).children().remove()
            $(this).html('<img src="./img/icon/' + img + '" alt="" style="margin-top:-5px"> ' + text + '')
        })
    })

    var subtitleHomepage = ['web developer', 'web programmer', 'front-end developer', 'back-end developer']
    var indexSubtitle = 0
    var lengthSubtitle = subtitleHomepage[indexSubtitle].length

    function typing() {
        $('.home-content h2 span').typewrite({
            actions: [{
                    type: subtitleHomepage[indexSubtitle]
                },
                {
                    delay: 1000
                },
                {
                    remove: {
                        num: lengthSubtitle,
                        type: 'stepped'
                    }
                }
            ]
        })
    }
    typing()

    $('.home-content h2 span').on('typewriteComplete', function () {
        if (indexSubtitle <= 2) {
            indexSubtitle++
            lengthSubtitle = subtitleHomepage[indexSubtitle].length
        } else {
            indexSubtitle = 0
            lengthSubtitle = subtitleHomepage[indexSubtitle].length
        }
        typing()
    })

    // End HomePage

    // About

    $('.about-content a').each(function (i) {
        var idList = $('.about-content a').eq(i).attr('id')
        var iconList
        switch (idList) {
            case 'list-skill-list':
                iconList = 'skill'
                break;
            case 'list-about-list':
                iconList = 'about-list'
                break;
            case 'list-vision-list':
                iconList = 'vision'
                break;
            case 'list-why-list':
                iconList = 'why'
                break;

            default:
                break;
        }
        $('.about-content a').eq(i).on('show.bs.tab', function (e) {
            $(this).css('background', '#36BFC4')
            $('.about-content a img').eq(i).attr('src', './img/icon/' + iconList + '-white.svg')
        })

        $('.about-content a').eq(i).on('hide.bs.tab', function (e) {
            $(this).css('background', '#fff')
            $('.about-content a img').eq(i).attr('src', './img/icon/' + iconList + '.svg')
        })

        $('.about-content a').eq(i).hover(function () {
            if (!$(this).hasClass('active')) {
                $(this).css('background', '#36BFC4')
                $('.about-content a img').eq(i).attr('src', './img/icon/' + iconList + '-white.svg')
            }
            $('.about-content a span').eq(i).css('opacity', '1')
        }, function () {
            if (!$(this).hasClass('active')) {
                $(this).css('background', '#fff')
                $('.about-content a img').eq(i).attr('src', './img/icon/' + iconList + '.svg')
            }
            $('.about-content a span').eq(i).css('opacity', '0')
        })
    })
    // End About

    // Portfolio

    $('.portfolio-content').hover(function () {
        $('.portfolio-content-content').css('opacity', '1')
    }, function () {
        $('.portfolio-content-content').css('opacity', '0')
    })

    $('.zoom').click(function (e) {
        $('.overlay').css({
            'bottom': '0',
            'right': '0',
            'background': 'rgba(0,0,0,0.7)',
            'width': '100%',
            'height': '100%'
        })
        e.preventDefault()
    })

    $('.close').click(function (e) {
        $('.overlay').css({
            'bottom': '',
            'right': '',
            'background': 'rgba(0,0,0,0)',
            'width': '0%',
            'height': '0%'
        })
        e.preventDefault()
    })

    var imgPortfolio = ['Jobdesc_app.png', 'Jobdesc_app_2.png', 'Jobdesc_app_3.png', 'Jobdesc_app_4.png']
    var indexImgPortfolio = 0
    $('.forward-btn a').click(function (e) {
        indexImgPortfolio++
        indexImgPortfolio = indexImgPortfolio == 4 ? 0 : indexImgPortfolio
        $('.overlay-photo img').attr('src', './img/photo/' + imgPortfolio[indexImgPortfolio] + '')
        e.preventDefault()
    })

    $('.back-btn a').click(function (e) {
        indexImgPortfolio--
        indexImgPortfolio = indexImgPortfolio == -1 ? 3 : indexImgPortfolio
        $('.overlay-photo img').attr('src', './img/photo/' + imgPortfolio[indexImgPortfolio] + '')
        e.preventDefault()
    })

    // End Portfolio

    // Contact
    $('.contact-content.info').animate({
        opacity: 1
    }, 500)
    $('.contact-content.email').animate({
        opacity: 1
    }, 500)

    // End Contact


    // Footer

    $('.to-top-btn').click(function (e) {
        scrollPage = false
        $('.nav-link').removeClass('active')
        $('.nav-link img').remove()
        $('.nav-link').filter("[id='home-menu']").addClass('active').prepend('<img src="./img/icon/home.svg" style="width:15px;margin-right:10px;margin-top:-2px;">')
        $('html, body').stop().animate({
            scrollTop: 0
        }, 400);
        e.preventDefault();
    })

    // End Footer
})