const googleLanguage = require("@google-cloud/language"),
  LANGUAGE_API_KEY = process.env.GOOGLE_APPLICATION_CREDENTIALS,
  LANGUAGE_API_URL = process.env.GOOGLE_LANGUAGE_API;
axios = require("axios");

exports.verbalyzeUserInput = async (req, res) => {
  const { text } = req.body;
  const textData = await axios.post(`${LANGUAGE_API_URL}${LANGUAGE_API_KEY}`, {
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
  });
  res.json(textData.data);
};
