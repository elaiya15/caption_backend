const { MongoClient } = require("mongodb");

module.exports = {
  selectedDb: {},
  async connect() {
    try {
      const client = await MongoClient.connect(process.env.MONGODB_URL);
      this.selectedDb = client.db("guvi");
      console.log("database connectd succefully");
    } catch (err) {
      console.log(err);
    }
  },
};
