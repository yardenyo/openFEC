<template>
  <div class="candidates">
    <div class="title">Candidates</div>
    <div class="table">
      <DataTable
        :loading="state.loading"
        :value="state.candidates"
        v-model:filters="filters"
        stripedRows
        scrollable
        scrollHeight="80vh"
        tableStyle="min-width: 50rem"
      >
        <template #header>
          <div class="flex justify-content-between">
            <Button
              type="button"
              icon="pi pi-filter-slash"
              label="Clear"
              outlined
              @click="clearFilter()"
            />
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                placeholder="Keyword Search (Per Page)"
              />
            </span>
          </div>
        </template>
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
        <Column
          field="office_full"
          header="Office"
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
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { FilterMatchMode, FilterOperator } from "primevue/api";

const candidatesStore = useCandidatesStore();
const { state } = storeToRefs(candidatesStore);
const filters = ref();

async function changePage(event) {
  await candidatesStore.getAllCandidates(event.page + 1, event.rows);
}

function getSeverity(data) {
  return data.has_raised_funds ? "success" : "danger";
}

function initFilters() {
  filters.value = {
    global: {
      value: null,
      matchMode: FilterMatchMode.CONTAINS,
    },
    fields: {
      candidate_id: {
        value: null,
        matchMode: FilterMatchMode.EQUALS,
      },
      name: {
        value: null,
        matchMode: FilterMatchMode.CONTAINS,
      },
      has_raised_funds: {
        value: null,
        matchMode: FilterMatchMode.EQUALS,
      },
    },
  };
}

function clearFilter() {
  initFilters();
}

initFilters();

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
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .table {
    width: 90vw;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .flex {
      display: flex;
    }

    .justify-content-between {
      justify-content: space-between;
    }
  }
}
</style>
