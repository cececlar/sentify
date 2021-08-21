const NEWS_API = process.env.NEWS_API,
  NEWS_API_KEY = process.env.NEWS_API_KEY,
  axios = require("axios");

exports.searchNews = async (req, res) => {
  try {
    const { searchQuery } = req.body;
    const newsArticles = await axios.get(
      `${NEWS_API}?q=${searchQuery}&pageNumber=1&pageSize=20&autoCorrect=true&withThumbnails=true`,
      {
        headers: {
          "x-rapidapi-key": NEWS_API_KEY,
        },
      }
    );
    res.json(newsArticles.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
