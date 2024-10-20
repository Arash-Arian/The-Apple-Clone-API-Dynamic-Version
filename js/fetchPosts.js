class fetchPosts {
    static fetchHeader = async () => {
        const main = document.querySelectorAll("div.dynamicMenu>a")
        const mobile = document.querySelectorAll("li.dynamicMenu>a")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                method: "GET",
                headers: {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const header = data.record.header;
                header.map((value, index) => {
                    main[index].innerHTML = value.title
                    mobile[index].innerHTML = value.title
                })
            })
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchSection1 = async () => {
        const section = document.querySelector("section.section1")
        const h2 = document.querySelector("section.section1>div.slogan_black>h2")
        const h3 = document.querySelector("section.section1>div.slogan_black>h3")
        const link1 = document.querySelector("section.section1>div.slogan_black>div.addlinks_black>a:nth-of-type(1)")
        const link2 = document.querySelector("section.section1>div.slogan_black>div.addlinks_black>a:nth-of-type(2)")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                method: "GET",
                headers: {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const section1 = data.record.section1;
                section.style.backgroundImage = `url(${section1[0].bg})`
                h2.innerHTML = section1[0].h2
                h3.innerHTML = section1[0].h3
                link1.innerHTML = section1[0].link1
                link2.innerHTML = section1[0].link2
            })
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchSection2 = async () => {
        const section = document.querySelector("section.section2")
        const h2 = document.querySelector("section.section2>div.slogan_white>h2")
        const h3 = document.querySelector("section.section2>div.slogan_white>h3")
        const link1 = document.querySelector("section.section2>div.slogan_white>div.addlinks_white>a:nth-of-type(1)")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                method: "GET",
                headers: {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const section2 = data.record.section2;
                section.style.backgroundImage = `url(${section2[0].bg})`
                h2.innerHTML = section2[0].h2
                h3.innerHTML = section2[0].h3
                link1.innerHTML = section2[0].link1
            })
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchSection3 = async () => {
        const section = document.querySelector("section.section3")
        const img = document.querySelector("section.section3>div.slogan_white>img")
        const h3 = document.querySelector("section.section3>div.slogan_white>h3")
        const h6 = document.querySelector("section.section3>div.slogan_white>h6")
        const link1 = document.querySelector("section.section3>div.slogan_white>div.addlinks_white>a:nth-of-type(1)")
        const link2 = document.querySelector("section.section3>div.slogan_white>div.addlinks_white>a:nth-of-type(2)")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                method: "GET",
                headers: {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const section3 = data.record.section3;
                section.style.backgroundImage = `url(${section3[0].bg})`
                img.src = section3[0].img
                h3.innerHTML = section3[0].h3
                h6.innerHTML = section3[0].h6
                link1.innerHTML = section3[0].link1
                link2.innerHTML = section3[0].link2
            })
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchSection4 = async () => {
        const product = document.querySelectorAll("section.section4>div.product")
        const img = document.querySelectorAll("div.product>div>img")
        const h4 = document.querySelectorAll("div.product>div>h4")
        const h5 = document.querySelectorAll("div.product>div>h5")
        const link1 = document.querySelectorAll("div.product>div>div>a:nth-of-type(1)")
        const link2 = document.querySelectorAll("div.product>div>div>a:nth-of-type(2)")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                "method": "GET",
                "headers": {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const section4 = data.record.section4;
                section4.map((value, index) => {
                    switch (value.title) {
                        case "product1": {
                            product[index].style.backgroundImage = `url(${value.bg})`
                            img[index].remove()
                            h4[index].innerHTML = value.h4
                            h5[index].innerHTML = value.h5
                            link1[index].innerHTML = value.link1
                            link2[index].innerHTML = value.link2
                            return
                        }
                        case "product2": {
                            product[index].style.backgroundImage = `url(${value.bg})`
                            img[index].remove()
                            h4[index].innerHTML = value.h4
                            h5[index].innerHTML = value.h5
                            link1[index].innerHTML = value.link1
                            link2[index].innerHTML = value.link2
                            return
                        }
                        case "product3": {
                            product[index].style.backgroundImage = `url(${value.bg})`
                            img[index].src = value.img
                            h4[index].innerHTML = value.h4
                            h5[index].innerHTML = value.h5
                            link1[index].innerHTML = value.link1
                            link2[index].remove()
                            return
                        }
                        case "product4": {
                            product[index].style.backgroundImage = `url(${value.bg})`
                            img[index].src = value.img
                            h4[index].remove()
                            h5[index].innerHTML = value.h5
                            link1[index].innerHTML = value.link1
                            link2[index].innerHTML = value.link2
                            return
                        }
                        case "product5": {
                            product[index].style.backgroundImage = `url(${value.bg})`
                            img[index].src = value.img
                            h4[index].remove()
                            h5[index].innerHTML = value.h5
                            link1[index].innerHTML = value.link1
                            link2[index].innerHTML = value.link2
                            return
                        }
                        case "product6": {
                            product[index].style.backgroundImage = `url(${value.bg})`
                            img[index].remove()
                            h4[index].innerHTML = value.h4
                            h5[index].remove()
                            link1[index].innerHTML = value.link1
                            link2[index].innerHTML = value.link2
                            return
                        }
                    }
                })
            })
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchSection5 = async () => {
        const slide = document.querySelectorAll("div.swiper-slide")
        const genre = document.querySelectorAll("div.genre>span:first-child")
        const precis = document.querySelectorAll("div.genre>span:last-child")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                "method": "GET",
                "headers": {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const section5 = data.record.section5;
                section5.map((value, index) => {
                    window.addEventListener("resize", function () {
                        if (window.innerWidth >= 768) {
                            slide[index].style.backgroundImage = `url(${value.thumbnail})`
                        } else {
                            slide[index].style.backgroundImage = `url(${value.thumbnail_sm})`
                        }
                    })
                    if (window.innerWidth >= 768) {
                        slide[index].style.backgroundImage = `url(${value.thumbnail})`
                    } else {
                        slide[index].style.backgroundImage = `url(${value.thumbnail_sm})`
                    }
                    genre[index].innerHTML = value.genre
                    precis[index].innerHTML = value.precis
                })

            })
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchFooter1 = async () => {
        const p = document.querySelectorAll("div.footer1>p")
        const a = document.querySelector("div.footer1>p:last-child>a")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                "method": "GET",
                "headers": {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const footer1 = data.record.footer1;
                footer1.map((value, index) => {
                    p[index].innerHTML = value.para
                })
            })
        } catch (e) {
            console.error(e.message);
        }
    }
    static fetchFooter2_column1 = async () => {
        const h5 = document.querySelectorAll("div.footer2>div.column:nth-of-type(1)>h5")
        const li = document.querySelectorAll("div.footer2>div.column:nth-of-type(1)>ul>li")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                "method": "GET",
                "headers": {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const footer2 = data.record.footer2_column1;
                footer2[0].h5s.map((value, index) => {
                    h5[index].innerHTML = value.h5
                })
                footer2[1].lis.map((value, index) => {
                    li[index].innerHTML = value.li
                })
            })

        } catch (e) {
            console.error(e.message);
        }
    }
    static fetchFooter2_column2 = async () => {
        const h5 = document.querySelectorAll("div.footer2>div.column:nth-of-type(2)>h5")
        const li = document.querySelectorAll("div.footer2>div.column:nth-of-type(2)>ul>li")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                "method": "GET",
                "headers": {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const footer6 = data.record.footer2_column2;
                footer6[0].h5s.map((value, index) => {
                    h5[index].innerHTML = value.h5
                })
                footer6[1].lis.map((value, index) => {
                    li[index].innerHTML = value.li
                })
            })


        } catch (e) {
            console.log(e.message);
        }
    }
    static fetchFooter2_column3 = async () => {
        const h5 = document.querySelectorAll("div.footer2>div.column:nth-of-type(3)>h5")
        const li = document.querySelectorAll("div.footer2>div.column:nth-of-type(3)>ul>li")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                "method": "GET",
                "headers": {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const footer3 = data.record.footer2_column3;
                footer3[0].h5s.map((value, index) => {
                    h5[index].innerHTML = value.h5
                })
                footer3[1].lis.map((value, index) => {
                    li[index].innerHTML = value.li
                })
            })
        } catch (e) {
            console.log(e.message);
        }
    }
    static fetchFooter2_column4 = async () => {
        const h5 = document.querySelectorAll("div.footer2>div.column:nth-of-type(4)>h5")
        const li = document.querySelectorAll("div.footer2>div.column:nth-of-type(4)>ul>li")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                "method": "GET",
                "headers": {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const footer4 = data.record.footer2_column4;
                footer4[0].h5s.map((value, index) => {
                    h5[index].innerHTML = value.h5
                })
                footer4[1].lis.map((value, index) => {
                    li[index].innerHTML = value.li
                })
            })
        } catch (e) {
            console.log(e.message);
        }
    }
    static fetchFooter2_column5 = async () => {
        const h5 = document.querySelectorAll("div.footer2>div.column:nth-of-type(5)>h5")
        const li = document.querySelectorAll("div.footer2>div.column:nth-of-type(5)>ul>li")
        try {
            const data = await fetch("https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13", {
                "method": "GET",
                "headers": {
                    "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then(data => {
                const footer4 = data.record.footer2_column5;
                footer4[0].h5s.map((value, index) => {
                    h5[index].innerHTML = value.h5
                })
                footer4[1].lis.map((value, index) => {
                    li[index].innerHTML = value.li
                })
            })
        } catch (e) {
            console.log(e.message);
        }
    }
}

export default fetchPosts