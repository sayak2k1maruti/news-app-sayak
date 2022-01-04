import NewsAPI from 'newsapi'
const newsAPI = new NewsAPI('f734fa053fcd40d99d62e219842af20d',{ corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });
export default newsAPI