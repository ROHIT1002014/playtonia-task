<template>
  <div class="container">
    <div class="row d-flex justify-content-center mt-5">
      <div v-for="user in user.data" :key="user.id">
        <div class="card m-2" style="width: 22rem; height:15rem">
          <h5 class="card-header">
            <span class="text-capitalize font-weight-bold">User title:</span>
            {{ user.title }}
          </h5>
          <div class="card-body">
            <h5 class="card-title">user ID: {{ user.userId }}</h5>
            <p class="card-text">user complete: {{ user.completed }}</p>
            <p class="card-text">Marks: {{ user.id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters ({
        user: "user",
    }),
  },
  methods: {

  },
  created(){
    this.$store.dispatch('fetchUser');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
