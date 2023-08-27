import { defineStore } from "pinia";
import candidatesApi from "@/api/candidates.api.js";
import { ref, reactive } from "vue";

export const useCandidatesStore = defineStore("useCandidatesStore", () => {
  const state = reactive({
    candidates: [],
    candidatesLength: 0,
    loading: false,
  });

  async function getAllCandidates(page = 1, perPage = 20) {
    state.loading = true;
    const response = await candidatesApi.getAllCandidates(page, perPage);
    state.candidates = response.data.results;
    state.candidatesLength = response.data.pagination.count;
    state.loading = false;
  }

  return {
    state,
    getAllCandidates,
  };
});
