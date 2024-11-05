<template>
  <div
    class="p-4 w-full max-h-64 bg-secondary rounded-md shadow-md cursor-pointer border-w-2 card"
    :class="{ selected: idStore.$state.id === hose.id }"
    @click="handleClick"
  >
    <h1 class="mb-4 font-bold text-center">{{ hose.name }}</h1>
    <p
      class="text-left"
      v-for="feature in hose.lengths[0].features"
      :key="feature"
    >
      {{ feature }}
    </p>
  </div>
</template>
<script>
import { useConfigurationStore } from "@/store/configuration";
import { useIdStore } from "@/store/idStore";
export default {
  data() {
    return {
      selectedId: 0,
    };
  },
  props: {
    hose: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const configurationStore = useConfigurationStore();
    const idStore = useIdStore();

    function setId(id) {
      idStore.setId(id);
    }
    function editTitle(title) {
      configurationStore.editTitle(title);
    }

    return { configurationStore, editTitle, setId, idStore };
  },
  methods: {
    setSelectedId(id) {
      this.selectedId = id;
    },
    handleClick() {
      this.editTitle(this.hose.name);
      this.setId(this.hose.id);
    },
  },
};
</script>
<style>
.selected {
  background-color: yellowgreen !important;
}
.card {
  border-width: 4px;
  border-color: transparent;
}
.card:hover {
  border-color: yellowgreen;
}
</style>
