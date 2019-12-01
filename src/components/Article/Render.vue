<template>
    <div id="render">
        <p class="another-title">{{article.title}}</p>
        <el-divider>
            <span class="divider-text">{{article.auto}} · {{article.source}}</span>
        </el-divider>
        <div id="article-content" class="article-content" v-html="article.content"></div>
        <br/>
        <div class="back-home">
            <el-link type="primary" target="_blank" :href="article.sourceurl">原文链接</el-link>
            <el-link type="primary" href="./">回到首页</el-link>
        </div>
    </div>
</template>

<script>
    
    import {
        newsDetailAPI
    } from "@/services/source.js";
    export default {
        data() {
            return {
                newsDetailAPI,
                article: {
                    title: "文章没找到哦",
                    auto: "Frog Amuse",
                    source: "ERROR",
                    sourceurl: "./",
                    content: `
                    <div class="__no-class">
                        <div class="img  finish " id="pic_0" style="width:100%;">
                        <div class="placeholder" style="padding-bottom:63.6%;">
                        </div>
                            <img data-class="iflow-img" id="0" src="https://s2.ax1x.com/2019/11/30/QVwe8P.png" />
                        </div>
                    </div>
                    `
                },
                titleLogo: "https://s2.ax1x.com/2019/11/30/QVwe8P.png"
            }
        },
        methods: {
            async getNewsDetail() {
                const data = await this.$http.get(this.newsDetailAPI, {
                    params: {
                        id: this.$route.query.id
                    }
                });
                const res = data.data.data;
                if (!(data.data instanceof Object) || parseInt(data.data.code) !== 1) {
                    return this.$message.error("获取资讯失败，可能是文章ID不正确");
                }
                this.article = res;
                this.titleLogo = res.headpic.substr(0,res.headpic.indexOf("?"));
            }
        },
        created() {
            this.getNewsDetail();
        }
    }
</script>

<style lang="less" scoped>

    img {
        width: 30%;
        margin-top: 40px;
        border-radius: 25px;
        box-shadow: 6px 6px 6px lightgrey;
    }

    .another-title {
        text-align: center;
        font-size: 25px;
    }

    .divider-text {
        color: gray;
        font-size: 15px;
        word-break: keep-all;
    }

    .article-content {
        margin: 0 30%;
    }

    .back-home {
        display: flex;
        justify-content: space-between;
        margin: 0 30%;
        padding-bottom: 25px;
        padding-right: 10px;
    }

    @media screen and (max-width: 1200px) {
        .article-content {
            margin: 0 15%;
        }

        .back-home {
            margin: 0 15%;
        }
    }

    @media screen and (max-width: 750px) {
        .article-content {
            margin: 0 5%;
        }

        .back-home {
            margin: 0 5%;
        }
    }


</style>



