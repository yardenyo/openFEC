import api from "@/api/Api.js";

const resource = "/candidates";

export default {
  getAllCandidates() {
    return api.get(`${resource}`);
  },
};
