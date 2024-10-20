import fetchPosts from "./fetchPosts.js";
import mainFunctions from "./main.js";

const fetchStart = async () => {
    try {
        await fetchPosts.fetchSection5()
        await mainFunctions()
        await fetchPosts.fetchHeader()
        await fetchPosts.fetchSection1()
        await fetchPosts.fetchSection2()
        await fetchPosts.fetchSection3()
        await fetchPosts.fetchSection4()
        await fetchPosts.fetchFooter1()
        await fetchPosts.fetchFooter2_column1()
        await fetchPosts.fetchFooter2_column2()
        await fetchPosts.fetchFooter2_column3()
        await fetchPosts.fetchFooter2_column4()
        await fetchPosts.fetchFooter2_column5()
    }catch (e) {
        console.error(e.message)
    }
    
}

export default fetchStart()
