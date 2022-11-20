export default {
  template: `
    <div class="flex gap-2 my-2">
        <button 
            @click="$emit('update:currentTag', tag)"
            v-for="tag in tags" 
            class="border rounded px-2 py-1 text-xs"
            :class="{
            '   border-blue-500 text-blue-500' : tag === currentTag
            }"
        >{{tag}}</button>
  </div>
    `,

  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
