<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
    <Footer></Footer>   
    <el-tooltip placement="top" content="回到顶部">
      <BackToTop 
        :custom-style="BackToTopStyle"
        transition-name="fade"
      />
    </el-tooltip>
   </div>
</template>

<script>
  /* eslint-disable */
  import {
    cityAPI
  } from '@/services/source.js';
  import Nav from '@/components/Nav.vue';
  import Footer from '@/components/Footer.vue';
  import BackToTop from '@/components/BackToTop.vue';
  export default {
    name: 'app',
    components: {
      Nav, Footer, BackToTop
    },
    data() {
      return {
        cityAPI,
        BackToTopStyle: {
          right: '30px',
          bottom: '40px',
          width: '40px',
          height: '40px',
          borderRadius: '4px',
          lineHeight: '45px', 
          background: '#e7eaf1'
        }
      }
    },
    methods: {
      loadRemoteJS(url, callback = () => {}) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
        script.onload = () => {
          callback.call(this);
        }
      },
      getCity() {
        const provinceAndCity = window['returnCitySN'].cname;
        window.localStorage.setItem("IP", window['returnCitySN'].cip);
        window.localStorage.setItem("postCode", window['returnCitySN'].cid);
        window.localStorage.setItem("province", provinceAndCity.substr(0, provinceAndCity.indexOf('省') + 1));
        window.localStorage.setItem("city", provinceAndCity.substr(provinceAndCity.indexOf('省') + 1));
      }
    },
    created() {
      this.loadRemoteJS(this.cityAPI, () => {
        this.getCity();
      });
    }
  }
</script>

<style>
  #app {
    margin: 0;
  }
</style>