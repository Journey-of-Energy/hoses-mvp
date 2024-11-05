<template>
  <div class="w-full h-full">
    <div class="px-[2vw] py-8 flex flex-col justify-between">
      <div class="w-1/3 flex items-center mb-16">
        <h1 class="font-medium text-xl">Hose type:</h1>
        <p>{{ configurationStore.$state.configuration.title }}</p>
      </div>

      <!-- Left params -->
      <div class="text-left w-1/3 mb-16">
        <h1 class="font-medium text-xl mb-4">Left end:</h1>
        <p>
          <span class="description-heading">Typ: </span
          >{{ params.l_params.end_type }}
        </p>
        <p>
          <span class="description-heading">Material: </span
          >{{ params.l_params.end_parameters.material }}
        </p>
        <p>
          <span class="description-heading">Závit: </span
          >{{ params.l_params.end_parameters.thread_type }}
        </p>
        <p>
          <span class="description-heading">Veľkosť: </span
          >{{ params.l_params.end_parameters.size }}
        </p>
        <ul class="description-heading">
          Vlastnosti:
          <li
            class="font-light"
            v-for="feature in params.l_params.end_parameters.features"
            :key="feature"
          >
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Right params -->
      <div class="text-left w-1/3 mb-16">
        <h1 class="font-medium text-xl mb-4">Right end:</h1>
        <p>
          <span class="description-heading">Typ: </span
          >{{ params.r_params.end_type }}
        </p>
        <p>
          <span class="description-heading">Material: </span
          >{{ params.r_params.end_parameters.material }}
        </p>
        <p>
          <span class="description-heading">Závit: </span
          >{{ params.r_params.end_parameters.thread_type }}
        </p>
        <p>
          <span class="description-heading">Veľkosť: </span
          >{{ params.r_params.end_parameters.size }}
        </p>
        <ul class="description-heading">
          Vlastnosti:
          <li
            class="font-light"
            v-for="feature in params.r_params.end_parameters.features"
            :key="feature"
          >
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { useConfigurationStore } from "@/store/configuration";
export default {
  setup() {
    const configurationStore = useConfigurationStore();
    const params = configurationStore.$state.configuration.params;
    return { configurationStore, params };
  },
};
</script>
<style>
.description-heading {
  font-weight: bold;
}
</style>
