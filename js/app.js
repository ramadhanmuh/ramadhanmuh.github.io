/**
 * Created By Alesser82.github.io
 */

let widthScreen = $(window).width(),
    screenHeight = $(window).height(),
    screenHeightUser = screenHeight - (screenHeight * (40 / 100)),
    imagesLoad = []
    url = $(location).attr('href'),
    partsUrl = url.split("#"),
    lastPartUrl = partsUrl[partsUrl.length - 1],
    navbarMenu = $('nav .nav-item'),
    navbarClick = false;

if (partsUrl.length > 1) {
    let sectionImagesNow = $(`#${lastPartUrl} img`)
}

/**
 * 
 * All Function
 * 
 */

const scrollPage = (element, elementHeight = null) => {
    let height = element.offset().top - 50

    // if (elementHeight < screenHeightUser) {
    //     height -= elementHeight * (45/100)
    // }
    
    // if (element.attr('id') == 'portfolio' && widthScreen < 700) {
    //     height = widthScreen < 700 ? height + 50 : height - screenHeight * (20 / 100)
    //     imagesLoad.filter(function (value, index) {
    //         if (imagesLoad[index].id == 'portfolio' && imagesLoad[index].loaded == false && widthScreen < 700) {
    //             height = element.offset().top
    //         }
    //     })
    // }

    // if (element.attr('id') == 'certificate') {
    //     height = widthScreen < 700 ? height + 50 : height - screenHeight * (20/100)
    //     imagesLoad.filter(function (value, index) {
    //         if (imagesLoad[index].id == 'portfolio' && imagesLoad[index].loaded == false && widthScreen < 700) {
    //             height = widthScreen < 700 ? height + 100 : height + 300
    //         }
    //     })
    // }
    
    let animate = $('html, body').animate({
        scrollTop: height
    }, 500)

    return animate
}

const activeNavbar = (element = null) => {
    $('nav a').removeClass('active')
    element.addClass('active')
}

const typingText = (element, text, index) => {
    let length = text[index].length
    element.typewrite({
        actions: [{
                type: text[index]
            },
            {
                delay: 900
            },
            {
                remove: {
                    num: length,
                    type: 'stepped'
                }
            }
        ]
    })
}

function refreshActiveMenu() {
    let fullUrl = window.location.href,
        splitted = fullUrl.split('#', 2);

    if (splitted.length < 2) {
        return;
    }

    $.each(navbarMenu, (key, value) => {
        navbarMenu.eq(key).removeClass('active');
        if (navbarMenu.eq(key).attr('href') == `#${splitted[1]}`) {
            navbarMenu.eq(key).addClass('active');
        }
    });

}

const hoverAboutSidebar = (element) => {
    element.prev('span').toggleClass('active');
}

const activeAboutContent = (id) => {
    $('#about .content').hide();
    $(`#about #${id}`).fadeIn("slow")
    activeAboutSkill()
}

const activeAboutNavigation = (id, sidebarButton, navbarButton) => {
    $('#about .sidebar button').removeClass('active')
    $('#about .about-navbar a').removeClass('active')

    sidebarButton.each(function (index, value) {
        if ($('#about .sidebar button').eq(index).attr('data-id') === id) {
            $('#about .sidebar button').eq(index).addClass('active')
        }
    })

    navbarButton.each(function (index, value) {
        if ($('#about .about-navbar a').eq(index).attr('href') === `#${id}`) {
            $('#about .about-navbar a').eq(index).addClass('active')
        }
    })
}

const activeAboutSkill = () => {
    let aboutSkillValue = $('#about #skill .value')
    aboutSkillValue.css('width', '0%')
    let percent = 0
    aboutSkillValue.each(function (index, value) {
        percent = aboutSkillValue.eq(index).attr('data-percent');
        aboutSkillValue.eq(index).animate({
            width: `${percent}%`,
        }, 500)
        // aboutSkillValue.eq(index).html(`${percent}%`)
        animateNumber(aboutSkillValue.eq(index), percent)
    })
}

const animateNumber = (element, number) => {
    $({ Counter: 0 }).animate({
        Counter: number
    }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
            element.text(Math.ceil(this.Counter));
            element.append('%')
        }
    });
}

const getPortfolioItems = () => {
    if (widthScreen < 1080 && widthScreen >= 700) {
        return 2
    }

    if (widthScreen < 700) {
        return 1
    }

    return 2
}

const initOwlCarousel = (element, number) => {

    let padding = 25

    if (widthScreen > 1000) {
        padding = 75
    }

    element.owlCarousel({
        nav: true,
        margin: 15,
        items: number,
        loop: false,
        stagePadding: padding
    });

    return true
}

const customOwlCarousel = (element, remove = false) => {
    element.find('button').remove()

    element.append(`
        <button class="owl-nav-custom">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="owl-nav-custom">
            <i class="fas fa-chevron-right"></i>
        </button>
    `);
}

const nextOwl = (element) => {
    element.trigger("next.owl.carousel");
}

const prevOwl = element => {
    element.trigger("prev.owl.carousel");
};

const customEventOwlCarousel = (element) => { 
    
    $('#portfolio .owl-nav-custom').eq(1).click(() => {
        nextOwl(element)
    })

    $('#portfolio .owl-nav-custom').eq(0).click(() => {
        prevOwl(element)
    })
}

const customEventOwlCarousel2 = (element) => {

    $('#certificate .owl-nav-custom').eq(1).click(() => {
        nextOwl(element)
    })

    $('#certificate .owl-nav-custom').eq(0).click(() => {
        prevOwl(element)
    })
}

const checkElementVisible = (element) => {
    let visible = widthScreen > 700 ? element.visible() : element.visible(true)
    return visible
}

const loadSectionImages = (images) => {
    images.each(function (index, value) {
        sourceImage = images.eq(index).attr('data-src')

        if (images.eq(index).attr('src') != sourceImage) {
            images.eq(index).attr('src', sourceImage)
        }
        
    })

    return true
}

const loadAllImages = () => {
    let allImages = $('body').find('img'),
        sourceImage
    
    allImages.each(function (index, value) {
        sourceImage = allImages.eq(index).attr('data-src')
        if (sourceImage != '') {
            allImages.eq(index).attr('src', sourceImage)
        }
    })

}



/**
 * All Event
 */
$(document).ready(() => {
    /**
     * Root
     */
    let section = $('section'),
        navbarClick = false,
        heightToTop = $(window).scrollTop(),
        backgroundImage

    $('#imgBackground').attr('src', './images/home.jpg').on('load', function () {
        $(this).remove(); // prevent memory leaks as @benweet suggested
        $('#home').css('background-image', 'url(./images/home.jpg)');
        setTimeout(() => {
            $('#loaderPage').fadeOut()
        }, 500);
    });

        
    section.each(function (index, value) {

        imagesLoad[index] = {
            id: section.eq(index).attr('id'),
            loaded: true
        }
        
        if ($('section').eq(index).find('img').length > 0) {
            imagesLoad[index].loaded = false
        }
    })        

    loadAllImages()

    /**
     * End Root
     */

     
    /**
     * Start Scroll Event
     */
    // console.log($('#about').offset().top)
    $(window).scroll(() => {
        loadSectionImages($('img.after'))
        
        let scrollTop = false,
            scrollBottom = false,
            widthScrollTop = $(window).scrollTop()

        if (widthScrollTop > heightToTop) {
            scrollTop = true
        } else {
            scrollBottom = false;
        } 

        heightToTop = widthScrollTop

        
        // console.log(heightToTop)
        // if ((heightToTop >= $('#about').offset().top) && (heightToTop <= ($('#about').offset().top + $('#about').height()))) {
        //     $('#about').visible(true);
        // }

        // console.log($('#about').visible());

        
        section.each(function (index, value) {
            let id = section.eq(index).attr('id'),
                elementVisible = checkElementVisible($(`#${id}`))
                // console.log($(`#${id}`));
                // console.table(id, elementVisible);
                
            if (elementVisible) {
                // console.log($(`#${id}`));
                let images = $(`#${id} img`),
                    href = `#${id}`,
                    backgroundImage = $(`#${id}.with-photo`)
                
                if (!navbarClick) {
                    navbarMenu.each(function (index_2, value_2) {
                        if (navbarMenu.eq(index).attr('href') === href) {
                            activeNavbar(navbarMenu.eq(index))
                            // console.log(navbarMenu.eq(index));
                        }
                    })
                }
                
                if (images.length > 0) {

                    // Load Images
                    loadSectionImages(images)

                    // change status imagesLoad
                    imagesLoad.filter(function (value_2, index_2) {

                        if (value_2.id == id) {
                            imagesLoad[index_2].loaded = true
                        }

                    })
                }

                if (backgroundImage.length > 0) {
                    images = backgroundImage.attr('data-src')
                    // console.log(backgroundImage.css('backgroundImage'));
                    if (backgroundImage.css('backgroundImage') != '') {
                        // Load Background Image
                        backgroundImage.css('backgroundImage', `url('${images}')`)
                    }
                }
            }
        })
    })

    /**
     * End Scroll Event
     */

    /**
     * Start Resize Event
     */
    $(window).resize(() => {
        widthScreen = $(window).width()
        screenHeight = $(window).height()
        // let totalItems = getPortfolioItems()
        // if (portfolio.trigger('destroy.owl.carousel')) {
        //     if (initOwlCarousel(portfolio, totalItems)) {
        //         customOwlCarousel()
        //         customEventOwlCarousel(portfolio)
        //     }
        // }
    })
    
    /**
     * Start Navbar Event
     */

    navbarMenu.click(function () {
        navbarClick = true
        let elementHref = $(this).attr('href'),
            elementHeight = $(elementHref).height(),
            images = $(`${elementHref} img`)            
        
        $(".navbar-collapse").collapse("hide");
        activeNavbar($(this))
        scrollPage($(elementHref), elementHeight)

        setTimeout(() => {
            navbarClick = false;
        }, 500);

        // let loading = loadSectionImages(images)

        // if (loading) {
        //     setTimeout(() => {
        //         navbarClick = false;
        //     }, 700);
        // }
        
    })

    $('nav .logo').click(() => {
        navbarClick = true;
        let element = $('nav .nav-item').eq(0),
            id = element.attr('href'),
            images = $(`${id} img`)

        $(".navbar-collapse").collapse("hide");
        activeNavbar(element)
        scrollPage($(id))
        // loadSectionImages(images)
        navbarClick = false;

        // setTimeout(() => {
        //     navbarClick = false
        // }, 700);
    })
    
    /**
    * End Navbar Event
    */

    /**
     * Home Event
     */

    let textType = [],
        indexType = 0;
    $.each($('#home span'), function (i, val) {
        textType.push($('#home span').eq(i).attr('data-typer'));
    });
    
    typingText($('#home span').eq(0), textType, indexType);

    $('#home span').eq(0).on('typewriteComplete', function () {
        indexType++
        if (indexType === textType.length) {
            indexType = 0
            typingText($('#home span').eq(0), textType, indexType)
            return
        }
        
        typingText($('#home span').eq(0), textType, indexType);
    })

    $('#home a').click(function () {
        navbarClick = true;

        let elementHref = $(this).attr("href"),
            elementNavbar = null,
            images = $(`${elementHref} img`),
            elementHeight = $(elementHref).height()

        navbarMenu.each(function (index, value) {
            if (navbarMenu.eq(index).attr('href') === elementHref) {
                elementNavbar = navbarMenu.eq(index);
            }
        })

        activeNavbar(elementNavbar);
        scrollPage($(elementHref), elementHeight);
        navbarClick = false;
        // loadSectionImages(images)
        // setTimeout(() => {
        //     navbarClick = false;
        // }, 700);
    })

    /**
     * End Home Event
     */


    /**
      * Start About Event
      */

    let aboutContentId = $('#about .sidebar button.active').attr('data-id');    
    const aboutSidebarButton = $('#about .sidebar button');
    const aboutNavbarButton = $('#about .about-navbar a');

    activeAboutContent(aboutContentId);
    activeAboutSkill()

    $('#about .sidebar button').hover(function () {
        hoverAboutSidebar($(this))
    })

    $('#about .sidebar button').click(function () {
        aboutContentId = $(this).attr('data-id');
        activeAboutNavigation(aboutContentId, aboutSidebarButton, aboutNavbarButton);
        activeAboutContent(aboutContentId);
    })

    $('#about .about-navbar a').click(function (e) {
        e.preventDefault()
        aboutContentId = $(this).attr('href').split('#')[1];
        activeAboutNavigation(aboutContentId, aboutSidebarButton, aboutNavbarButton);
        activeAboutContent(aboutContentId);
    })

    /**
    * End About Event
    */

    /**
    * Start Portfolio Event
    */

    let portfolio = $('#portfolio .owl-carousel'),
        portfolioTotal = getPortfolioItems()    

    portfolio.on('initialized.owl.carousel', function(event){ 
        customOwlCarousel(portfolio)
    });

    $('.portfolio-image').eq(0).on('load', () => {
        $('#portfolioLoader').removeClass('d-flex')
        $('#portfolioLoader').addClass('d-none')
    })

    initOwlCarousel(portfolio, portfolioTotal)

    customEventOwlCarousel(portfolio)


    /**
    * End Portfolio Event
    */

    /**
    * Start Certificate Event
    */

    let certificate = $('#certificate .owl-carousel'),
        certificateTotal = getPortfolioItems()    

    certificate.on('initialized.owl.carousel', function(event){ 
        customOwlCarousel(certificate)
    });

    $('.certificate-image').eq(0).on('load', () => {
        $('#certificateLoader').removeClass('d-flex')
        $('#certificateLoader').addClass('d-none')
    })

    initOwlCarousel(certificate, certificateTotal)

    customEventOwlCarousel2(certificate)

    refreshActiveMenu()


    /**
    * End Certificate Event
    */
});