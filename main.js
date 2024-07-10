// 뉴스 API 키
const API_KEY = 'c4bc2b6bdf3c4b1ebb90a08ee97275b4';
let newsList = [];
const menus = document.querySelectorAll(".menus button");
menus.forEach(menu => menu.addEventListener("click", (event) => getNewsByCategory(event)));

const getLatestNews = async () => {
    // API 요청 URL 
    const url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines`); 
    const response = await fetch(url); // API 요청 보내기
    const data = await response.json();
    newsList = data.articles;
    render();
    console.log("ddd", newsList);
};

const getNewsByCategory = async (event) => {
    const category = event.target.textContent.toLowerCase();
    console.log("category", category);
    const url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?category=${category}`);
    const response = await fetch(url);
    const data = await response.json();
    console.log("ddd", data);
    newsList = data.articles;
    render();
}

const render = () => {
    const newsHTML = newsList.map(
        news => ` <div class="row news">
            <div class="col-lg-4">
                <img class="news-img-size" 
                    src="${news.urlToImage}"
                    onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'; this.onerror=null;" />
            </div>
            <div class="col-lg-8">
                <h2 class="title" target="_blank" href="${news.url}">${news.title}</h2>
                <p>${
                    news.description == null || news.description == 
                    "" ? "내용없음" 
                    : news.description.length > 200 
                    ? news.description.substring(0, 200) + "..." 
                    : news.description
                }</p>
                <div>
                    ${news.source.name || "no source"} ${moment(news.publishedAt).fromNow()}
                </div>
            </div>
        </div>`
    ).join(""); 

    console.log("html", newsHTML);
    document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();
