import { defineStore } from "pinia";

export const useIdStore = defineStore("id", {
  state: () => ({
    id: 0,
  }),
  actions: {
    setId(id) {
      this.id = id;
    },
  },
});
