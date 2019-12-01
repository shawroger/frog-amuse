<template>
    <div id="local-news">
        <el-divider>
            <span class="divider-text">美女图片</span>
        </el-divider>

        <el-row :gutter="15">
            <el-col :xs="24" :sm="12" :lg="6" v-for="item in photos" :key="item.imgurl">
                <el-card :body-style="{padding: 0}">
                    <img class="list-img" @click="openPicture(item)" v-img-stop-drag :src="item.imgurl"
                        :alt="item.imgurl" />
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="12" :lg="6">
                <el-card :body-style="{padding: 0}" v-loading="loading">
                    <a href="javascript:;" @click="getMoreNews">
                        <img class="list-img" v-img-stop-drag :src="morePicture" alt="更多新闻" />
                    </a>
                </el-card>
            </el-col>
        </el-row>
        <showPicture ref="showPicture" />
    </div>
</template>

<script>
    import {
        prettyAPI,
        morePicture
    } from "@/services/source.js";

    import
    showPicture
    from "@/services/showPicture.vue";

    export default {
        components: {
            showPicture
        },
        data() {
            return {
                morePicture,
                page: 0,
                prettyAPI,
                photos: [],
                loading: true,
                photosFilter: ["https://tvax4.sinaimg.cn/images/default_d_w_large.gif#101",
                    "https://tvax4.sinaimg.cn/images/default_d_w_large.gif"
                ],
                requestTimes: 0
            }
        },
        methods: {
            async getPhotosList() {
                const res = await this.$http.get(this.prettyAPI);
                for(let i in res.data) {
                    if(!this.photosFilter.includes(res.data[i].imgurl)) {
                        this.photosFilter.push(res.data[i].imgurl);
                        this.photos.push(res.data[i]);
                    }
                }
                this.requestTimes++;
                this.loading = false;
            },
            getMoreNews() {
                this.loading = true;
                this.getPhotosList();
            },
            openPicture(item) {
                this.$refs.showPicture.src = item.imgurl;
                this.$refs.showPicture.openModal();
            }
        },

        created() {
            this.getPhotosList();
        },
        mounted() {
            document.onkeydown = (e) => {
                if (e.keyCode === 13) {
                    this.getMoreNews();
                }
            }
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

    .list-img {
        width: 100%;
        height: 250px;
    }

    .el-link {
        text-align: center;
        font-size: 16px;
        padding-top: 15px;
    }
</style>