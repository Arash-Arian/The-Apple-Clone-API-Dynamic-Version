const mainFunctions = async () => {
    let darkMode = document.getElementById("darkMode")
    let flag = true
    darkMode.addEventListener("click", function () {
        if (flag) {
            document.getElementById("html").setAttribute("class", "dark")
            flag = false
        } else {
            document.getElementById("html").removeAttribute("class")
            flag = true
        }
    })
    let cols = document.querySelectorAll("div.column")
    cols.forEach(value => {
        window.addEventListener("resize", function () {
            if (197 > value.clientWidth && value.clientWidth > 142) {
                flag_footer = true
                value.querySelectorAll("div.column>span.the_plus").forEach(value1 => {
                    value1.style = ""
                })
                value.querySelectorAll("div.column>h5").forEach(value1 => {
                    value1.style = ""
                })
                value.querySelectorAll("div.column>ul").forEach(value1 => {
                    value1.style = ""
                    value1.style = ""
                })
                value.querySelectorAll("div.column>ul>li").forEach(value1 => {
                    value1.style = ""
                    value1.style = ""
                    value1.classList.remove("animate__animated")
                    value1.classList.remove("animate__fadeInDown")
                })
            }
        })
        let flag_footer = true
        value.querySelector("div.column>h5:nth-of-type(1)").addEventListener("click", function () {
            if (value.clientWidth <= 709 && !(197 > value.clientWidth && value.clientWidth > 141)) {
                if (flag_footer) {
                    value.querySelectorAll("div.column>span.the_plus").forEach(value1 => {
                        value1.style.transform = "rotate(45deg)"
                    })
                    value.querySelectorAll("div.column>h5").forEach(value1 => {
                        value1.style.display = "block"
                    })
                    value.querySelectorAll("div.column>ul").forEach(value1 => {
                        value1.style.display = "block"
                        value1.style.height = "auto"
                    })
                    value.querySelectorAll("div.column>ul>li").forEach(value1 => {
                        value1.style.height = "auto"
                        value1.style.margin = "0.75rem 0"
                        value1.classList.add("animate__animated")
                        value1.classList.add("animate__fadeInDown")
                    })
                    flag_footer = false

                } else {
                    value.querySelectorAll("div.column>span.the_plus").forEach(value1 => {
                        value1.style.transform = "rotate(0deg)"
                    })
                    value.querySelectorAll("div.column>h5").forEach(value1 => {
                        value1.style.display = "none"
                    })
                    value.querySelector("div.column>h5:nth-of-type(1)").style.display = "block"
                    value.querySelectorAll("div.column>ul").forEach(value1 => {
                        value1.style.display = "none"
                        value1.style.height = "0"
                    })
                    value.querySelectorAll("div.column>ul>li").forEach(value1 => {
                        value1.style.height = "0"
                        value1.style.margin = "0 0"
                    })
                    flag_footer = true
                }
            }
        })
    })

    let menu = document.querySelector("div.burger_menu")
    let header = document.querySelector("header")
    window.addEventListener("resize", function () {
        if (header.clientWidth >= 1007) {
            menu.querySelector("div.burger_menu>div:nth-of-type(1)").classList.remove("burger_menu_div1")
            menu.querySelector("div.burger_menu>div:nth-of-type(2)").classList.remove("burger_menu_div2")
            header.classList.add("header_fullvh_off")
            header.classList.remove("header_fullvh")
            header.querySelector("header>nav>div.burger_menu_content").classList.add("animate__animated")
            header.querySelector("header>nav>div.burger_menu_content").classList.add("animate__faster")
            header.querySelector("header>nav>div.burger_menu_content").classList.add("animate__fadeOutUp")
            header.querySelector("header>nav>div.bag").classList.remove("animate__fadeOutUp")
            header.querySelector("header>nav>div.bag").classList.add("animate__fadeInDown")
        }
    })
    menu.addEventListener("click", function () {
        if (header.className !== "header_fullvh") {
            header.classList.remove("header_fullvh_off")
            header.classList.add("header_fullvh")
            header.querySelector("header>nav>div.burger_menu_content").classList.add("burger_menu_content_on")
            header.querySelector("header>nav>div.burger_menu_content").classList.remove("animate__fadeOutUp")
            header.querySelector("header>nav>div.burger_menu_content").classList.add("animate__animated")
            header.querySelector("header>nav>div.burger_menu_content").classList.add("animate__fast")
            header.querySelector("header>nav>div.burger_menu_content").classList.add("animate__fadeInDown")
            menu.querySelector("div.burger_menu>div:nth-of-type(1)").classList.add("burger_menu_div1")
            menu.querySelector("div.burger_menu>div:nth-of-type(2)").classList.add("burger_menu_div2")
            header.querySelector("header>nav>div.bag").classList.add("animate__animated")
            header.querySelector("header>nav>div.bag").classList.add("animate__fadeOutUp")
            bag_info.classList.remove("shopping-bag_info_on")
        } else {
            menu.querySelector("div.burger_menu>div:nth-of-type(1)").classList.remove("burger_menu_div1")
            menu.querySelector("div.burger_menu>div:nth-of-type(2)").classList.remove("burger_menu_div2")
            header.classList.add("header_fullvh_off")
            header.classList.remove("header_fullvh")
            header.querySelector("header>nav>div.burger_menu_content").classList.add("animate__animated")
            header.querySelector("header>nav>div.burger_menu_content").classList.add("animate__faster")
            header.querySelector("header>nav>div.burger_menu_content").classList.add("animate__fadeOutUp")
            header.querySelector("header>nav>div.bag").classList.remove("animate__fadeOutUp")
            header.querySelector("header>nav>div.bag").classList.add("animate__fadeInDown")


        }
    })

    let bag = document.querySelector("div.bag")
    let bag_info = document.querySelector("div.shopping-bag_info")
    bag.addEventListener("click", function () {
        bag_info.classList.toggle("shopping-bag_info_on")
        if (search_bar.classList.contains("animate__fadeInLeft")) {
            search_bar.classList.toggle("animate__fadeOutRight")
            search_bar.classList.toggle("animate__fadeInLeft")
        }
    })

    let search_icon = document.querySelector("div.search_icon")
    let search_bar = document.querySelector("div.search_bar")
    search_icon.addEventListener("click", function () {
        search_bar.classList.add("search_bar_on")
        search_bar.classList.toggle("animate__fadeOutRight")
        search_bar.classList.toggle("animate__fadeInLeft")
        if (bag_info.classList.contains("shopping-bag_info_on")) {
            bag_info.classList.remove("shopping-bag_info_on")
        }
    })

    window.addEventListener("resize", function () {
        if (this.innerWidth <= 1023) {
            search_bar.classList.remove("animate__fadeInLeft")
            search_bar.classList.add("animate__fadeOutRight")
        }
    })

    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 16,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 40,
            slideShadows: true,
            depth: 100
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            enabled: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });
}
export default mainFunctions;