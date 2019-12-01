<template>
    <div id="local-news">
        <el-divider>
            <span class="divider-text">本地新闻 · {{user.city}}</span>
        </el-divider>

        <el-row :gutter="15">
            <el-col :xs="24" :sm="12" :lg="6" v-for="item in news" :key="item.docid">
                <el-card :body-style="{padding: 0}">
                    <a :href="item.url" target="_blank">
                        <img v-img-stop-drag :src="item.imgsrc" :alt="item.title" />
                    </a>
                    <center>
                        <el-link :href="item.url" target="_blank">{{item.title}}</el-link>
                    </center>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="12" :lg="6">
                <el-card :body-style="{padding: 0}" v-loading="loading">
                    <a href="javascript:;" @click="getMoreNews">
                        <img v-img-stop-drag :src="morePicture" alt="更多新闻" />
                    </a>
                    <p @click="getMoreNews" style="text-align: center">更多本地新闻</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { morePicture } from "@/services/source.js";
    export default {
        data() {
            return {
                morePicture,
                page: 0,
                news: [],
                newsDocs: [],
                user: {},
                loading: true
            }
        },
        methods: {
            async getNewsList() {
                const prov = window.localStorage.getItem("province");
                const city = window.localStorage.getItem("city");
                const res = await this.$http.get('News/local_news', {
                    params: {
                        name: prov + '_' + city,
                        page: this.page
                    }
                });
                if (!(res.data.data instanceof Array)) return this.$message.error("获取本地新闻失败");
                this.filterNews(res.data.data);
            },

            filterNews(data) {
                for(let i in data) {
                    if(this.newsDocs.includes(data[i].docid)) {
                        continue;
                    } else {
                        this.newsDocs.push(data[i].docid);
                        this.news.push(data[i]);
                    }
                }
                this.loading = false;
            },

            getMoreNews() {
                this.loading = true;
                this.page++;
                this.getNewsList();
            }
        },

        created() {
            this.getNewsList();
            this.user.city = window.localStorage.getItem("city");
            this.user.prov = window.localStorage.getItem("province");
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