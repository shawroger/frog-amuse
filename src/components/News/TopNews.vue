<template>
    <div id="local-news">
        <el-divider>
            <span class="divider-text">头条新闻</span>
        </el-divider>

        <el-row :gutter="15">
            <el-col :xs="24" :md="12" :lg="6" v-for="item in news" :key="item.docid">
                <el-card :body-style="{padding: 0}">
                    <a :href="item.url" target="_blank">
                        <img v-img-stop-drag :src="item.thumbnail_pic_s" :alt="item.title" />
                    </a>
                    <center>
                        <el-link :href="item.url" target="_blank">{{item.title}}</el-link>
                    </center>
                </el-card>
            </el-col>

            <el-col :xs="24" :md="12" :lg="6">
                <el-card :body-style="{padding: 0}" v-loading="loading">
                    <a href="javascript:;" @click="getMoreNews">
                        <img v-img-stop-drag :src="morePicture" alt="更多新闻" />
                    </a>
                    <p @click="getMoreNews" style="text-align: center">更多头条新闻</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { newsAPI, morePicture } from "@/services/source.js";
    export default {
        data() {
            return {
                newsAPI,
                morePicture,
                page: 0,
                news: [],
                allNews: [],
                loading: true,
                newsEndIndex: 0
            }
        },
        methods: {
            async getNewsList() {
                const res = await this.$http.get(this.newsAPI);
                if (!(res.data.result.data instanceof Array)) return this.$message.error("获取头条新闻失败");
                this.allNews = res.data.result.data;
                this.news = this.allNews.slice(0, 7+8*this.newsEndIndex);
                this.loading = false;
            },

            getMoreNews() {
                this.loading = true;
                this.newsEndIndex++;
                if(7+8*this.newsEndIndex < this.allNews.length) {
                    this.news = this.allNews.slice(0, 7+8*this.newsEndIndex);
                } else {
                    this.news = this.allNews.slice(0, this.allNews.length-1);
                    this.$message("新闻已经加载完了哦");
                }
                this.loading = false;
            }
        },

        created() {
            this.getNewsList();
        }
    }
</script>

<style lang="less" scoped>
    .divider-text {
        color: gray;
        font-size: 15px;
    }

    .el-col {
        margin-bottom: 15px;
    }

    .el-card {
        min-height: 325px;

        img {
            width: 100%;
            height: 250px;
        }
    }

    .el-link {
        text-align: center;
        font-size: 16px;
        padding-top: 15px;
    }
</style>