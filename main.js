// 뉴스 API 키
const API_KEY = 'c4bc2b6bdf3c4b1ebb90a08ee97275b4';
let news = [];

const getLatestNews = async () => {
    // API 요청 URL 
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`); 
    const response = await fetch(url); // API 요청 보내기
    const data = await response.json();
    news = data.articles;
    console.log("ddd", data.articles);
};

getLatestNews();
