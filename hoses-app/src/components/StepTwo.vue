<template>
  <div><h1>Step 2</h1></div>
  <div class="px-[2vw] py-8 flex flex-col gap-4">
    <div v-for="end in ends" :key="end.end_type">
      <EndCard :end="end" :set-params="setLeftParams" />
    </div>
  </div>
</template>
<script>
import EndCard from "./details/EndCard.vue";
import { useConfigurationStore } from "@/store/configuration";
export default {
  components: {
    EndCard,
  },
  props: {
    ends: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const configurationStore = useConfigurationStore();

    function setLeftParams(params) {
      configurationStore.setLeftParams(params);
    }

    return { configurationStore, setLeftParams };
  },
};
</script>
<style></style>
