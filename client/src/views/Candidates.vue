<template>
  <div class="title">Candidates</div>
  <div class="table">
    <DataTable :value="state.candidates" tableStyle="min-width: 50rem">
      <Column
        field="candidate_id"
        header="Candidate ID"
        style="width: 25%"
      ></Column>
      <Column field="name" header="Candidate Name" style="width: 25%"></Column>
    </DataTable>
    <Paginator
      :rows="20"
      :totalRecords="state.candidatesLength"
      :rowsPerPageOptions="[10, 20, 25, 50]"
      @page="changePage"
      @update:rows="changeRows"
    ></Paginator>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useCandidatesStore } from "@/stores/candidates.store";
import { storeToRefs } from "pinia";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Paginator from "primevue/paginator";

const candidatesStore = useCandidatesStore();
const { state } = storeToRefs(candidatesStore);

async function changePage(event) {
  await candidatesStore.getAllCandidates(event.page + 1, event.rows);
}

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
