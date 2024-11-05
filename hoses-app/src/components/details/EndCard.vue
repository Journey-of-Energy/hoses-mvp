<template>
  <div
    class="px-4 py-8 min-w-32 w-full max-h-64 bg-secondary rounded-md shadow-md cursor-pointer card"
    @click="handleClick"
    :class="{ selected: idStore.$state.id === end.id }"
  >
    <h1 class="mb-8 font-bold">{{ end.end_type }}</h1>
    <h2>{{ end.end_parameters.material }}</h2>
  </div>
</template>
<script>
import { useConfigurationStore } from "@/store/configuration";
import { useIdStore } from "@/store/idStore";

export default {
  props: {
    end: {
      type: Object,
      required: true,
    },
    setParams: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.setParams(this.end);
      this.setId(this.end.id);
    },
  },

  setup() {
    const configurationStore = useConfigurationStore();
    const idStore = useIdStore();

    function setId(id) {
      idStore.setId(id);
    }
    return { configurationStore, idStore, setId };
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
