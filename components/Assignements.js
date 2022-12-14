import AssignmentList from "./AssignementList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: { AssignmentList, AssignmentCreate },

  template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress"><assignment-create @add="add"></assignment-create></assignment-list>
            <assignment-list v-if="showCompleted" :assignments="filters.completed" title="Completed" canToggle @toggle="showCompleted = !showCompleted"></assignment-list>
        </section>
    `,

  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1, tag: "math" },
        { name: "Read Chapter 4", complete: false, id: 2, tag: "science" },
        { name: "Turn in Homework", complete: false, id: 3, tag: "math" },
      ],
      showCompleted: true,
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },

  // created() {
  //   fetch("https://taskappvue.vercel.app/db.json")
  //     .then((response) => response.json())
  //     .then((assignments) => {
  //       this.assignments = assignments;
  //     });
  // },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
