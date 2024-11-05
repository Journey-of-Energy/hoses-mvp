import { defineStore } from "pinia";

export const useConfigurationStore = defineStore("configuration", {
  state: () => ({
    configuration: {
      title: "",
      params: {
        l_params: {
          end_parameters: {
            material: "",
            thread_type: "",
            size: "",
            features: [""],
          },
        },
        r_params: {
          end_parameters: {
            material: "",
            thread_type: "",
            size: "",
            features: [""],
          },
        },
      },
    },
  }),
  actions: {
    editTitle(title) {
      this.configuration.title = title;
    },
    setMaterial(material) {
      this.configuration.material = material;
    },
    setLeftParams(params) {
      this.configuration.params.l_params = params;
    },
    setRightParams(params) {
      this.configuration.params.r_params = params;
    },
  },
});
