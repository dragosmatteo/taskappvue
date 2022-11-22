export default {
  template: ` 
    <form  @submit.prevent="add" class="mt-4">
        <div class="border border-gray-600 text-black flex">
            <input v-model="newAssignement" type="text" placeholder="New assignment..." class="p-2 w-52"/>
            <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
    </form>
    `,

  props: {
    assignments: Array,
  },

  data() {
    return {
      newAssignement: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", this.newAssignement);

      this.newAssignement = "";
    },
  },
};
