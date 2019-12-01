<template>
  <div id="list">
    <el-row :gutter="35" type="flex" justify="center">
      <el-col :xs="24" :md="18">
        <el-card>
          <!-- 新闻标题 -->
          <el-divider>
            <span class="divider-text">NEWS</span>
          </el-divider>

          <!--列表 -->
          <el-table :data="topNews" :show-header="false" style="width: 100%">
            <el-table-column align="center" label="标题">
              <template v-slot="scope">
                <el-link @click="openArticle(scope.row.id)" target="_blank">{{scope.row.title}}</el-link>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    newsAPI
  } from "@/services/source.js";
  export default {
    data() {
      return {
        newsAPI,
        topNews: [],
        count: 10
      }
    },
    methods: {
      async getTopNews() {
        const data = await this.$http.get(this.newsAPI);
        const res = data.data.data;
        if (!(res instanceof Array)) return this.$message.error("新闻获取失败");
        this.topNews = res.slice(0, 10);
      },
      openArticle(id) {
        this.$router.push({
          path: 'article',
          query: {
            id
          }
        });
      }
    },
    created() {
      this.getTopNews();
      //this.getPictures();
    }
  }
</script>


<style lang="less" scoped>
  .el-row {
    background-image: url("https://s2.ax1x.com/2019/11/30/QVrom8.jpg");
    background-size: 100% 100%;
  }

  .el-col {
    margin-bottom: 25px;
  }

  .el-card {
    width: 75%;
    margin: 0 auto;
  }

  @media screen and (max-width: 750px) {
    .el-card {
      width: 95%;
    }
  }

  .divider-text {
    color: grey;
  }
</style>