<template>
  <div class="candidates">
    <div class="title">Candidates</div>
    <div class="table">
      <DataTable
        :loading="state.loading"
        :value="state.candidates"
        stripedRows
        scrollable
        scrollHeight="80vh"
        tableStyle="min-width: 50rem"
      >
        <Column
          field="candidate_id"
          header="Candidate ID"
          sortable
          style="width: 25%"
        ></Column>
        <Column
          field="name"
          header="Candidate Name"
          sortable
          style="width: 25%"
        ></Column>
        <Column header="Has Raised Funds" style="width: 25%">
          <template #body="slotProps">
            <Tag
              :value="slotProps.data.has_raised_funds ? 'Yes' : 'No'"
              :severity="getSeverity(slotProps.data)"
            />
          </template>
        </Column>
      </DataTable>
      <Paginator
        :rows="20"
        :totalRecords="state.candidatesLength"
        :rowsPerPageOptions="[10, 20, 25, 50]"
        @page="changePage"
        @update:rows="changeRows"
      ></Paginator>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useCandidatesStore } from "@/stores/candidates.store";
import { storeToRefs } from "pinia";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Paginator from "primevue/paginator";
import Tag from "primevue/tag";

const candidatesStore = useCandidatesStore();
const { state } = storeToRefs(candidatesStore);

async function changePage(event) {
  await candidatesStore.getAllCandidates(event.page + 1, event.rows);
}

function getSeverity(data) {
  return data.has_raised_funds ? "success" : "danger";
}

onMounted(async () => {
  await candidatesStore.getAllCandidates();
});
</script>
<style scoped lang="scss">
.candidates {
  display: flex;
  flex-direction: column;

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }

  .table {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
}
</style>
