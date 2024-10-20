class fetchPosts {

    static API_URL = "https://api.jsonbin.io/v3/b/67130421acd3cb34a8996c13";
    static HEADERS = {
        "X-Master-Key": "$2a$10$BsyhrlJYVpg5bVNUJ0sggugnelj8xn17tP4nwHSRQaiJ4BAV7UukS",
        "Content-Type": "application/json",
    };

    static async fetchData() {
        try {
            const response = await fetch(this.API_URL, {
                method: "GET",
                headers: this.HEADERS
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            return data.record;
        } catch (e) {
            console.error(e.message)
            throw e;
        }
    }

    static updateArrayData(element, content, property = "innerHTML") {
        element.forEach((value, index) => {
            if (value) {
                value[property] = content[index];
            }
        })

    }

    static fetchHeader = async () => {
        try {
            const data = await this.fetchData();
            const header = data.header;
            const main = document.querySelectorAll("div.dynamicMenu>a");
            const mobile = document.querySelectorAll("li.dynamicMenu>a");
            this.updateArrayData([...main], header.map(value => value.title));
            this.updateArrayData([...mobile], header.map(value => value.title));

        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchSection1 = async () => {
        try {
            const data = await this.fetchData();
            const section1 = data.section1[0];
            const section = document.querySelector("section.section1")
            const h2 = document.querySelector("section.section1>div.slogan_black>h2")
            const h3 = document.querySelector("section.section1>div.slogan_black>h3")
            const link1 = document.querySelector("section.section1>div.slogan_black>div.addlinks_black>a:nth-of-type(1)")
            const link2 = document.querySelector("section.section1>div.slogan_black>div.addlinks_black>a:nth-of-type(2)")

            section.style.backgroundImage = `url(${section1.bg})`
            h2.innerHTML = section1.h2
            h3.innerHTML = section1.h3
            link1.innerHTML = section1.link1
            link2.innerHTML = section1.link2


        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchSection2 = async () => {
        try {
            const data = await this.fetchData();
            const section2 = data.section2[0];
            const section = document.querySelector("section.section2")
            const h2 = document.querySelector("section.section2>div.slogan_white>h2")
            const h3 = document.querySelector("section.section2>div.slogan_white>h3")
            const link1 = document.querySelector("section.section2>div.slogan_white>div.addlinks_white>a:nth-of-type(1)")

            section.style.backgroundImage = `url(${section2.bg})`
            h2.innerHTML = section2.h2
            h3.innerHTML = section2.h3
            link1.innerHTML = section2.link1


        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchSection3 = async () => {
        try {
            const data = await this.fetchData();
            const section3 = data.section3[0];
            const section = document.querySelector("section.section3")
            const img = document.querySelector("section.section3>div.slogan_white>img")
            const h3 = document.querySelector("section.section3>div.slogan_white>h3")
            const h6 = document.querySelector("section.section3>div.slogan_white>h6")
            const link1 = document.querySelector("section.section3>div.slogan_white>div.addlinks_white>a:nth-of-type(1)")
            const link2 = document.querySelector("section.section3>div.slogan_white>div.addlinks_white>a:nth-of-type(2)")

            section.style.backgroundImage = `url(${section3.bg})`
            img.src = section3.img
            h3.innerHTML = section3.h3
            h6.innerHTML = section3.h6
            link1.innerHTML = section3.link1
            link2.innerHTML = section3.link2
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchSection4 = async () => {
        try {
            const data = await this.fetchData();
            const section4 = data.section4;
            const products = document.querySelectorAll("section.section4>div.product")
            const img = document.querySelectorAll("div.product>div>img")
            const h4 = document.querySelectorAll("div.product>div>h4")
            const h5 = document.querySelectorAll("div.product>div>h5")
            const link1 = document.querySelectorAll("div.product>div>div>a:nth-of-type(1)")
            const link2 = document.querySelectorAll("div.product>div>div>a:nth-of-type(2)")

            section4.map((value, index) => {
                products[index].style.backgroundImage = `url(${value.bg})`
                img[index].src = value.img
                if (value.h4) h4[index].innerHTML = value.h4
                if (value.h5) h5[index].innerHTML = value.h5
                link1[index].innerHTML = value.link1
                link2[index].innerHTML = value.link2
            })
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchSection5 = async () => {
        try {
            const data = await this.fetchData();
            const section5 = data.section5;
            const slide = document.querySelectorAll("div.swiper-slide")
            const genre = document.querySelectorAll("div.genre>span:first-child")
            const precis = document.querySelectorAll("div.genre>span:last-child")
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
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchFooter1 = async () => {
        try {
            const data = await this.fetchData();
            const footer1 = data.footer1;
            const p = document.querySelectorAll("div.footer1>p")
            const a = document.querySelector("div.footer1>p:last-child>a")
            fetchPosts.updateArrayData([...p], footer1.map(value => value.para))
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchFooter2_column1 = async () => {
        try {
            const data = await this.fetchData();
            const footer2c1 = data.footer2_column1;
            const h5 = document.querySelectorAll("div.footer2>div.column:nth-of-type(1)>h5")
            const li = document.querySelectorAll("div.footer2>div.column:nth-of-type(1)>ul>li")
            fetchPosts.updateArrayData([...h5], footer2c1[0].h5s.map(value => value.h5))
            fetchPosts.updateArrayData([...li], footer2c1[1].lis.map(value => value.li))
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchFooter2_column2 = async () => {
        try {
            const data = await this.fetchData();
            const footer2c2 = data.footer2_column2;
            const h5 = document.querySelectorAll("div.footer2>div.column:nth-of-type(2)>h5")
            const li = document.querySelectorAll("div.footer2>div.column:nth-of-type(2)>ul>li")
            fetchPosts.updateArrayData([...h5], footer2c2[0].h5s.map(value => value.h5))
            fetchPosts.updateArrayData([...li], footer2c2[1].lis.map(value => value.li))
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchFooter2_column3 = async () => {
        try {
            const data = await this.fetchData();
            const footer2c3 = data.footer2_column3;
            const h5 = document.querySelectorAll("div.footer2>div.column:nth-of-type(3)>h5")
            const li = document.querySelectorAll("div.footer2>div.column:nth-of-type(3)>ul>li")
            fetchPosts.updateArrayData([...h5], footer2c3[0].h5s.map(value => value.h5))
            fetchPosts.updateArrayData([...li], footer2c3[1].lis.map(value => value.li))
        } catch (e) {
            console.error(e.message)
        }
    }
    static fetchFooter2_column4 = async () => {
        try {
            const data = await this.fetchData();
            const footer2c4 = data.footer2_column4;
            const h5 = document.querySelectorAll("div.footer2>div.column:nth-of-type(4)>h5")
            const li = document.querySelectorAll("div.footer2>div.column:nth-of-type(4)>ul>li")
            fetchPosts.updateArrayData([...h5], footer2c4[0].h5s.map(value => value.h5))
            fetchPosts.updateArrayData([...li], footer2c4[1].lis.map(value => value.li))
        } catch (e) {
            console.error(e.message);
        }
    }
    static fetchFooter2_column5 = async () => {
        try {
            const data = await this.fetchData();
            const footer2c5 = data.footer2_column5;
            const h5 = document.querySelectorAll("div.footer2>div.column:nth-of-type(5)>h5")
            const li = document.querySelectorAll("div.footer2>div.column:nth-of-type(5)>ul>li")
            fetchPosts.updateArrayData([...h5], footer2c5[0].h5s.map(value => value.h5))
            fetchPosts.updateArrayData([...li], footer2c5[1].lis.map(value => value.li))
        } catch (e) {
            console.error(e.message);
        }
    }
}

export default fetchPosts