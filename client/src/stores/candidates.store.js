import { defineStore } from "pinia";
import candidatesApi from "@/api/candidates.api.js";
import { ref, reactive } from "vue";

export const useCandidatesStore = defineStore("useCandidatesStore", () => {
  const state = reactive({
    candidates: [],
  });

  async function getAllCandidates() {
    const response = await candidatesApi.getAllCandidates();
    state.candidates = response.data.results;
  }

  return {
    state,
    getAllCandidates,
  };
});
