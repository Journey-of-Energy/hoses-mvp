<template>
  <div class="w-full h-32 bg-primary items-center flex justify-center">
    <div class="flex gap-8">
      <div :class="{ menuIndicator: this.currentStep === 0 }" class="menu-item">
        <h2>Hose</h2>
      </div>
      <div class="menu-item" :class="{ menuIndicator: this.currentStep === 1 }">
        <h2>L end</h2>
      </div>
      <div class="menu-item" :class="{ menuIndicator: this.currentStep === 2 }">
        <h2>R end</h2>
      </div>
      <div class="menu-item" :class="{ menuIndicator: this.currentStep === 3 }">
        <h2>Summary</h2>
      </div>
    </div>
  </div>
  <div class="flex mt-8 gap-8">
    <div
      class="w-2/5 h-[75vh] flex-1 bg-primary overflow-scroll no-scrollbar rounded-sm"
    >
      <component :is="currentStepComponent" :hoses="hoses" :ends="ends" />
      <!-- <StepOne :hoses="hoses" /> -->
    </div>
    <div class="w-3/5 h-[75vh] bg-primary rounded-sm">
      <StepFour />
      <div class="flex w-3/5 bottom-12 justify-center absolute gap-8">
        <button
          @click="handlePrev"
          class="w-16 h-8 rounded-md font-semibold button"
        >
          Prev
        </button>
        <button
          @click="handleNext"
          class="w-16 h-8 rounded-md font-semibold button"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../assets/data.json";
import StepOne from "./StepOne.vue";
import StepTwo from "./StepTwo.vue";
import StepThree from "./StepThree.vue";
import StepFour from "./StepFour.vue";
import { useIdStore } from "@/store/idStore";

//import StepOne from "./StepOne.vue";

const data = json.data;

export default {
  data() {
    return {
      hoses: [],
      ends: [],
      currentStep: 0,
    };
  },
  mounted() {
    this.hoses = data.hoses;
    this.ends = data.ends;
  },
  components: {
    //StepOne,
    StepTwo,
    StepFour,
  },

  computed: {
    currentStepComponent() {
      const components = [StepOne, StepTwo, StepThree];

      return components[this.currentStep];
    },
  },
  setup() {
    const idStore = useIdStore();

    function setId(id) {
      idStore.setId(id);
    }
    return { setId, idStore };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep < 3) {
        this.currentStep -= 1;
      }
    },
    handleNext() {
      this.nextStep();
      this.setId("");
    },
    handlePrev() {
      this.prevStep();
      this.setId("");
    },
  },
};
</script>
<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.menuIndicator {
  border-bottom-width: 3px;
  font-weight: 600;
  border-color: yellowgreen;
}
.menu-item {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.button {
  background-color: yellowgreen;
}
</style>
