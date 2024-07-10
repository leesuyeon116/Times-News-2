// 뉴스 API 키
const API_KEY = 'c4bc2b6bdf3c4b1ebb90a08ee97275b4';
let news = [];

const getLatestNews = async () => {
    // API 요청 URL 
    const url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines`); 
    const response = await fetch(url); // API 요청 보내기
    const data = await response.json();
    news = data.articles;
    console.log("ddd", data.articles);
};

getLatestNews();
