<template>
    <div id="daily-eassay">
        <el-row :gutter="35" type="flex" justify="center">
            <el-col :xs="24" :md="18">
                <el-card>
                    <el-divider>
                        <span class="divider-text">每日毒鸡汤</span>
                    </el-divider>
                    <p class="text-content" v-for="(item,index) in badChicken" :key="index">{{item}}</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    /* eslint-disable */
    import {
        badChickenSoup
    } from "@/services/source.js";
    export default {
        data() {
            return {
                badChickenSoup,
                badChicken: []
            }
        },
        methods: {
            async getBadChicken() {
                const data = await this.$http.get(this.badChickenSoup);
                if(!(data.data.data instanceof Object)) {
                    this.$message.error("文章获取失败");
                }
                this.badChicken = data.data.data;
            }
        },
        created() {
            this.getBadChicken();
        }
    }
</script>

<style lang="less" scoped>
   
    .text-content {
        font-weight: 500;
        font-size: 14px;
        color: #606266;
        letter-spacing: 1px;
        line-height: 1.8em;
        text-align: center;
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
</style>