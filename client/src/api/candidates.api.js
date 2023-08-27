import api from "@/api/Api.js";

const resource = "/candidates";

export default {
  getAllCandidates(page, perPage) {
    return api.get(`${resource}/?page=${page}&per_page=${perPage}`);
  },
};
