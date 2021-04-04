const Entry = require("../db/models/entry");

exports.createEntry = async (text, textData) => {
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
    return e;
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
