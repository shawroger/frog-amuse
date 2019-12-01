<template>
  <div>
    <el-menu :default-active="itemIndex" class="el-menu-demo" mode="horizontal" router>

      <el-menu-item index class="menu-logo">
        <img v-img-stop-drag :src="logoSrc" alt="menu-logo" />
        <a href="./">
          {{title}}
        </a>
      </el-menu-item>

      <template v-if="width>750">
        <template v-for="item in routes">
          <el-menu-item v-if="!item.hasOwnProperty('children')" v-show="!item.invisble" :key="item.path"
            :index="item.path" class="right-item">
            {{item.name}}
          </el-menu-item>
          <el-submenu v-else class="right-item" :key="item.path" v-show="!item.invisble">
            <template slot="title">{{item.name}}</template>
            <el-menu-item v-for="subItem in item.children" v-show="!subItem.invisble" :index="subItem.path"
              :key="subItem.path">
              {{subItem.name}}
            </el-menu-item>
          </el-submenu>
        </template>
      </template>

      <template v-else>
        <i class="el-icon-menu icon-item right-item" @click="iconClick"></i>
      </template>
    </el-menu>

    <el-drawer :visible.sync="showItems" direction="ltr" title="MENU" size="100%">
      <Logo />

      <el-menu :default-active="itemIndex" class="el-menu-vertical-demo" :router="true" @select="itemsClick">
        <template v-for="item in routes">
          <el-menu-item v-if="!item.hasOwnProperty('children')" v-show="!item.invisble" :index="item.path"
            :key="item.path">
            {{item.name}}
          </el-menu-item>
          <el-submenu v-else :key="item.path" v-show="!item.invisble">
            <template slot="title">{{item.name}}</template>
            <el-menu-item v-for="subItem in item.children" v-show="!subItem.invisble" :index="subItem.path"
              :key="subItem.path">{{subItem.name}}
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>

    </el-drawer>
  </div>
</template>

<script>
  import Logo from './Logo.vue';
  import {
    routes
  } from '@/router/index.js';
  import {
    title,
    logoSrc
  } from '../services/source.js';

  export default {
    components: {
      Logo
    },
    data() {
      return {
        title,
        logoSrc,
        routes,
        width: 0,
        itemIndex: '/',
        showItems: false,
      };
    },
    methods: {
      iconClick() {
        this.showItems = !this.showItems;
      },
      itemsClick(key) {
        if (key) {
          this.iconClick();
        }
      }
    },
    mounted() {
      this.width = document.body.clientWidth;
      window.onresize = () => {
        return (() => {
          this.width = document.body.clientWidth;
        })();
      };
    },
    created() {
      this.itemIndex = this.$route.path;
    }
  }
</script>

<style lang="less" scoped>
  .menu-logo {
    img {
      width: 45px;
      margin-right: 10px;
      transform: translateY(-3px);
    }

    a {
      text-decoration: none;
      font-size: 25px;
      position: relative;
      top: -5px;
    }

  }

  @media screen and (max-width: 750px) {
    .menu-logo {
      img {
        width: 35px;
      }
      a {
        font-size: 20px;
      }
    }
  }

  .el-menu {
    margin-top: 15px;
  }

  .right-item {
    float: right !important;
  }

  .icon-item {
    font-size: 35px;
    position: relative;
    top: 15px;
    color: LightGray;
    right: 5px;
    cursor: pointer;
  }
</style>