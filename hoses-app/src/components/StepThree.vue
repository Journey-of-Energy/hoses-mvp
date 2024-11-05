<template>
  <div><h1>Step 3</h1></div>
  <div class="px-[2vw] py-8 flex flex-col gap-4">
    <div v-for="end in ends" :key="end.end_type">
      <EndCard :end="end" :set-params="setRightParams" />
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

    function setRightParams(params) {
      configurationStore.setRightParams(params);
    }

    return { configurationStore, setRightParams };
  },
};
</script>
<style></style>
