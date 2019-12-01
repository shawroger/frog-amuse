<template>
    <el-drawer
        :visible.sync="show"
        :withHeader="false"
        direction="btt"
        size="100%"
    >
    <div 
        class="modal-div"
    >
        <i class="el-icon-close" @click="closeModal"></i>
        <img :src="src" alt="大屏图片" />
    </div>
    </el-drawer>
</template>

<script>
  
  export default {

    data() {
        return {
            show: false,
            src: ""
        }
    },
    methods: {
        closeModal() {
            this.show = false;
        },
        openModal() {
            this.show = true;
        }
    }
  }
</script>

<style lang="less" scoped>
    .modal-div {
        width: 100%; 
        height: 100%;
        background-color: black;
        display: flex;
        align-items: center;
    }

    img {
        width: 100%; 
        height: 100%;
    }

    i {
        font-size: 35px;
        position: absolute;
        top: 40px;
        right: 40px;
        cursor: pointer;
        background: white;
        border-radius: 50%;
        padding: 5px;
        z-index: 99;
        border: solid white thin;
    }


    @media screen and (max-width: 1200px) {  
        img {
            width: 100%; 
            height: auto;        
        }
    }

</style>
