<template>
  <div id="home">
    <Weather></Weather>
    <!--
    <TopNews></TopNews>
    -->
    <LocalNews></LocalNews>
  </div>
</template>

<script>
  import Weather from '@/components/News/Weather.vue';
  //import TopNews from '@/components/News/TopNews.vue';
  import LocalNews from '@/components/News/LocalNews.vue';
  export default {
    components: {
      Weather, LocalNews
    }
  }
</script>