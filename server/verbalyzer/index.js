const googleLanguage = require("@google-cloud/language"),
  LANGUAGE_API_KEY = process.env.GOOGLE_APPLICATION_CREDENTIALS,
  LANGUAGE_API_URL = process.env.GOOGLE_LANGUAGE_API;
axios = require("axios");
const { createEntry } = require("../controllers/entries");

exports.verbalyzeUserInput = async (req, res) => {
  try {
    const { text } = req.body;
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
    const newEntry = await createEntry(text, textData.data);
    res.json(newEntry);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
