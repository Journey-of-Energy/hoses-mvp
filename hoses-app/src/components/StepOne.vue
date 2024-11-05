<template>
  <section>
    <h1>Step one</h1>
    <div class="px-[2vw] py-8 flex flex-col gap-4">
      <div v-for="hose in hoses" :key="hose.id">
        <HoseCard :hose="hose" />
      </div>
    </div>
  </section>
</template>
<script>
import HoseCard from "./details/HoseCard.vue";

export default {
  components: {
    HoseCard,
  },
  props: {
    hoses: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style></style>
