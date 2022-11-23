import Assignements from "./Assignements.js";
// import Panel from "./Panel.js";

export default {
  components: {
    Assignements,
    // Panel,
  },
  template: `
      <div class="grid gap-6">
      <assignements></assignements>
      </div>
  `,

  props: {
    add: Object,
  },
};
