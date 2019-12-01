<template>
  <div id="home">
    <Home></Home>
    <el-divider></el-divider>
    <DailyEassy></DailyEassy>
    <br/><br/>
    <List></List>
  </div>
</template>

<script>
  import Home from '@/components/Home/Home.vue';
  import List from '@/components/Home/List.vue';
  import DailyEassy from '@/components/Home/DailyEassy.vue';
  export default {
    components: {
      Home, List, DailyEassy
    }
  }
</script>