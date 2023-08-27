const axios = require("axios");

const api = "https://api.open.fec.gov/v1/candidates";
const apiKey = process.env.FEC_API_KEY;

const CandidatesController = {
  getAll: async function (req, res) {
    try {
      const headers = {
        "X-API-Key": apiKey,
      };

      const response = await axios.get(
        `${api}/?page=${req.query.page}&per_page=${req.query.per_page}`,
        {
          headers,
        }
      );
      res.json(response.data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = CandidatesController;
