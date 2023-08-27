<template>
  <div class="title">Candidates</div>
  <div class="table">
    <DataTable :value="state.candidates" tableStyle="min-width: 50rem">
      <Column field="candidate_id" header="Candidate ID"></Column>
      <Column field="name" header="Candidate Name"></Column>
    </DataTable>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useCandidatesStore } from "@/stores/candidates.store";
import { storeToRefs } from "pinia";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";

const candidatesStore = useCandidatesStore();
const { state } = storeToRefs(candidatesStore);

onMounted(async () => {
  await candidatesStore.getAllCandidates();
});
</script>
<style scoped lang="scss">
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.table {
  margin-top: 2rem;
}
</style>
