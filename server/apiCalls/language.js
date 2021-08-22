const googleLanguage = require("@google-cloud/language"),
  LANGUAGE_API_KEY = process.env.GOOGLE_APPLICATION_CREDENTIALS,
  LANGUAGE_API_URL = process.env.GOOGLE_LANGUAGE_API,
  axios = require("axios");

exports.singlePostRequest = async (text) => {
  try {
    const textData = await axios.post(
      `${LANGUAGE_API_URL}${LANGUAGE_API_KEY}`,
      {
        document: {
          content: text,
          type: "PLAIN_TEXT",
        },
        features: {
          extractDocumentSentiment: true,
          extractEntitySentiment: true,
          extractEntities: true,
        },
        encodingType: "UTF8",
      }
    );
    text = { ...text, documentSentiment: textData.data.documentSentiment };
    return text;
  } catch (e) {
    return null;
  }
};

exports.mapPostRequests = async (obj) => {
  try {
    const textData = await axios.post(
      `${LANGUAGE_API_URL}${LANGUAGE_API_KEY}`,
      {
        document: {
          content: obj.body,
          type: "PLAIN_TEXT",
        },
        features: {
          extractDocumentSentiment: true,
          extractEntitySentiment: true,
          extractEntities: true,
        },
        encodingType: "UTF8",
      }
    );
    obj.documentSentiment = textData.data.documentSentiment;
    // console.log(obj);
    return obj;
  } catch (e) {
    return null;
  }
};

exports.mapWrapper = async (array) => {
  console.log("inside map wrapper");
  const promisesArray = array.map(async (item) => {
    return mapPostRequests(item);
  });
  const resultsArray = await Promise.all(promisesArray);
  return resultsArray;
};

exports.verbalyzeNews = async (req, res) => {
  console.log("inside verbalyzeNews");
  try {
    let { news } = req.body;
    const sentimentScores = await mapWrapper(news);
    res.json(sentimentScores);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
