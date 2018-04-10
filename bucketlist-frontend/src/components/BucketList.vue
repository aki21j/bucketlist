<template>
  <div id="bucketList">
    <h1>Bucket List</h1>
    <table class="table">
      <thead>
        <th>#</th>
        <th>ID</th>
        <th>Name</th>
        <th>Created</th>
        <th>Modified</th>
      </thead>
      <tbody>
        <tr v-for="(value, index) in all_data" :key="index">
          <td>{{ index + 1}}</td>
          <td>{{ value.id }}</td>
          <td>{{ value.name }}</td>
          <td>{{ value.date_created }}</td>
          <td>{{ value.date_modified }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import bucket from '../api/bucket'
export default {
  name:"bucketList",
  data:() => ({
    all_data:[],

  }),
  methods:{
    getAllBucketLists(){
      const vm = this;
      bucket.getAllBucketLists()
        .then(response => {
          console.log(response);
          vm.all_data = response.data;
        })
    }
  },
  created(){
    this.getAllBucketLists();
  }
}
</script>

<style>

</style>
