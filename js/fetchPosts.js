class fetchPosts {
    static fetchHeader = async () => {
        let main = document.querySelectorAll("div.dynamicMenu>a")
        let mobile = document.querySelectorAll("li.dynamicMenu>a")
        try {
            let data = await fetch("http://localhost:3000/header")
            let response = await data.json()
            response.map((value, index) => {
                main[index].innerHTML = value.title
                mobile[index].innerHTML = value.title
            })
        } catch (e) {
            console.log(e.message)
        }
    }
    static fetchSection1 = async () => {
        let section = document.querySelector("section.section1")
        let h2 = document.querySelector("section.section1>div.slogan_black>h2")
        let h3 = document.querySelector("section.section1>div.slogan_black>h3")
        let link1 = document.querySelector("section.section1>div.slogan_black>div.addlinks_black>a:nth-of-type(1)")
        let link2 = document.querySelector("section.section1>div.slogan_black>div.addlinks_black>a:nth-of-type(2)")
        try {
            let data = await fetch("http://localhost:3000/section1")
            let response = await data.json()
            section.style.backgroundImage = `url(${response[0].bg})`
            h2.innerHTML = response[0].h2
            h3.innerHTML = response[0].h3
            link1.innerHTML = response[0].link1
            link2.innerHTML = response[0].link2
        } catch (e) {
            e.message
        }
    }
    static fetchSection2 = async () => {
        let section = document.querySelector("section.section2")
        let h2 = document.querySelector("section.section2>div.slogan_white>h2")
        let h3 = document.querySelector("section.section2>div.slogan_white>h3")
        let link1 = document.querySelector("section.section2>div.slogan_white>div.addlinks_white>a:nth-of-type(1)")
        let link2 = document.querySelector("section.section2>div.slogan_white>div.addlinks_white>a:nth-of-type(2)")
        try {
            let data = await fetch("http://localhost:3000/section2")
            let response = await data.json()
            section.style.backgroundImage = `url(${response[0].bg})`
            h2.innerHTML = response[0].h2
            h3.innerHTML = response[0].h3
            link1.innerHTML = response[0].link1
        } catch (e) {
            e.message
        }
    }
    static fetchSection3 = async () => {
        let section = document.querySelector("section.section3")
        let img = document.querySelector("section.section3>div.slogan_white>img")
        let h3 = document.querySelector("section.section3>div.slogan_white>h3")
        let h6 = document.querySelector("section.section3>div.slogan_white>h6")
        let link1 = document.querySelector("section.section3>div.slogan_white>div.addlinks_white>a:nth-of-type(1)")
        let link2 = document.querySelector("section.section3>div.slogan_white>div.addlinks_white>a:nth-of-type(2)")
        try {
            let data = await fetch("http://localhost:3000/section3")
            let response = await data.json()
            section.style.backgroundImage = `url(${response[0].bg})`
            img.src = response[0].img
            h3.innerHTML = response[0].h3
            h6.innerHTML = response[0].h6
            link1.innerHTML = response[0].link1
            link2.innerHTML = response[0].link2
        } catch (e) {
            e.message
        }
    }
    static fetchSection4 = async () => {
        let product = document.querySelectorAll("section.section4>div.product")
        let img = document.querySelectorAll("div.product>div>img")
        let h4 = document.querySelectorAll("div.product>div>h4")
        let h5 = document.querySelectorAll("div.product>div>h5")
        let link1 = document.querySelectorAll("div.product>div>div>a:nth-of-type(1)")
        let link2 = document.querySelectorAll("div.product>div>div>a:nth-of-type(2)")
        try {
            let data = await fetch("http://localhost:3000/section4")
            let response = await data.json()
            response.map((value, index) => {
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
                        return;
                    }
                    case "product3": {
                        product[index].style.backgroundImage = `url(${value.bg})`
                        img[index].src = value.img
                        h4[index].innerHTML = value.h4
                        h5[index].innerHTML = value.h5
                        link1[index].innerHTML = value.link1
                        link2[index].remove()
                        return;
                    }
                    case "product4": {
                        product[index].style.backgroundImage = `url(${value.bg})`
                        img[index].src = value.img
                        h4[index].remove()
                        h5[index].innerHTML = value.h5
                        link1[index].innerHTML = value.link1
                        link2[index].innerHTML = value.link2
                        return;
                    }
                    case "product5": {
                        product[index].style.backgroundImage = `url(${value.bg})`
                        img[index].src = value.img
                        h4[index].remove()
                        h5[index].innerHTML = value.h5
                        link1[index].innerHTML = value.link1
                        link2[index].innerHTML = value.link2
                        return;
                    }
                    case "product6": {
                        product[index].style.backgroundImage = `url(${value.bg})`
                        img[index].remove()
                        h4[index].innerHTML = value.h4
                        h5[index].remove()
                        link1[index].innerHTML = value.link1
                        link2[index].innerHTML = value.link2
                        return;
                    }
                }
            })
        } catch (e) {
            e.message
        }
    }
    static fetchSection5 = async () => {
        let slide=document.querySelectorAll("div.swiper-slide")
        let genre=document.querySelectorAll("div.genre>span:first-child")
        let precis=document.querySelectorAll("div.genre>span:last-child")
        try {
            let data = await fetch("http://localhost:3000/section5")
            let response = await data.json()
            response.map((value,index)=>{
                window.addEventListener("resize",function () {
                    if (window.innerWidth>=768){
                        slide[index].style.backgroundImage=`url(${value.thumbnail})`
                    }else{
                        slide[index].style.backgroundImage=`url(${value.thumbnail_sm})`
                    }
                })
                if (window.innerWidth>=768){
                    slide[index].style.backgroundImage=`url(${value.thumbnail})`
                }else{
                    slide[index].style.backgroundImage=`url(${value.thumbnail_sm})`
                }
                genre[index].innerHTML=value.genre
                precis[index].innerHTML=value.precis
            })
        } catch (e) {
            e.message
        }
    }
    static fetchFooter1 = async () => {
        let p=document.querySelectorAll("div.footer1>p")
        let a=document.querySelector("div.footer1>p:last-child>a")
        try {
            let data = await fetch("http://localhost:3000/footer1")
            let response = await data.json()
            response.map((value,index)=>{
            p[index].innerHTML=value.para
            })
        } catch (e) {
            console.log(e.message);
        }
    }
    static fetchFooter2_column1 = async () => {
        let h5=document.querySelectorAll("div.footer2>div.column:nth-of-type(1)>h5")
        let li=document.querySelectorAll("div.footer2>div.column:nth-of-type(1)>ul>li")
        try {
            let data = await fetch("http://localhost:3000/footer2_column1")
            let response = await data.json()
            response[0].h5s.map((value,index)=>{
                h5[index].innerHTML=value.h5
            })
            response[1].lis.map((value,index)=>{
                li[index].innerHTML=value.li
            })

        } catch (e) {
            console.log(e.message);
        }
    }
    static fetchFooter2_column2 = async () => {
        let h5=document.querySelectorAll("div.footer2>div.column:nth-of-type(2)>h5")
        let li=document.querySelectorAll("div.footer2>div.column:nth-of-type(2)>ul>li")
        try {
            let data = await fetch("http://localhost:3000/footer2_column2")
            let response = await data.json()
            response[0].h5s.map((value,index)=>{
                h5[index].innerHTML=value.h5
            })
            response[1].lis.map((value,index)=>{
                li[index].innerHTML=value.li
            })

        } catch (e) {
            console.log(e.message);
        }
    }
    static fetchFooter2_column3 = async () => {
        let h5=document.querySelectorAll("div.footer2>div.column:nth-of-type(3)>h5")
        let li=document.querySelectorAll("div.footer2>div.column:nth-of-type(3)>ul>li")
        try {
            let data = await fetch("http://localhost:3000/footer2_column3")
            let response = await data.json()
            response[0].h5s.map((value,index)=>{
                h5[index].innerHTML=value.h5
            })
            response[1].lis.map((value,index)=>{
                li[index].innerHTML=value.li
            })

        } catch (e) {
            console.log(e.message);
        }
    }
    static fetchFooter2_column4 = async () => {
        let h5=document.querySelectorAll("div.footer2>div.column:nth-of-type(4)>h5")
        let li=document.querySelectorAll("div.footer2>div.column:nth-of-type(4)>ul>li")
        try {
            let data = await fetch("http://localhost:3000/footer2_column4")
            let response = await data.json()
            response[0].h5s.map((value,index)=>{
                h5[index].innerHTML=value.h5
            })
            response[1].lis.map((value,index)=>{
                li[index].innerHTML=value.li
            })

        } catch (e) {
            console.log(e.message);
        }
    }
    static fetchFooter2_column5 = async () => {
        let h5=document.querySelectorAll("div.footer2>div.column:nth-of-type(5)>h5")
        let li=document.querySelectorAll("div.footer2>div.column:nth-of-type(5)>ul>li")
        try {
            let data = await fetch("http://localhost:3000/footer2_column5")
            let response = await data.json()
            response[0].h5s.map((value,index)=>{
                h5[index].innerHTML=value.h5
            })
            response[1].lis.map((value,index)=>{
                li[index].innerHTML=value.li
            })

        } catch (e) {
            console.log(e.message);
        }
    }
}

export default fetchPosts