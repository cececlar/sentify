const Entry = require("../db/models/entry"),
  { singlePostRequest } = require("../apiCalls/language");

createEntry = async (text, textData) => {
  try {
    const entryObject = {
      text: text,
      documentSentiment: {
        magnitude: textData.documentSentiment.magnitude,
        score: textData.documentSentiment.score,
      },
    };
    const entry = await new Entry(entryObject);
    await entry.save();
    return entry;
  } catch (e) {
    return e.message;
  }
};

exports.verbalyzeEntry = async (req, res) => {
  try {
    const { text } = req.body;
    const textData = await singlePostRequest(text);
    console.log("inside verbalyzeEntry");
    console.log(textData);
    const newEntry = await createEntry(text, textData);
    res.json(newEntry);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getMaxMagnitude = async (req, res) => {
  try {
    const entries = await Entry.find();
    const max = Math.max(
      ...entries.map((o) => o.documentSentiment.magnitude),
      0
    );
    res.json(max);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
