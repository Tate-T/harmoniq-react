const fetchArticles = async () => {
  try {
    const API = 'https://69481e8d1ee66d04a44ebf1c.mockapi.io/articles/articles';
    const getArticles = await axios.get(API);
    const getDataToParse = await getArticles.json();
    // .then(response => {
    //   setArticles(response.data);
    //   console.log(response.data);
    // })
    // .catch(error => {
    //   console.error('API ERROR:', error.response);
    // });
  } catch (err) {
    console.log(err);
  }
};

export default fetchArticles;
