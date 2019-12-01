<template>
    <div>
        <p>{{text}}</p>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            default: 'Frog Amuse © 2019 -- 2020'
        }
    }
}
</script>
<style lang="less" scoped>
    div {
        padding: 15px;
        p {
            text-align: center;
            color: grey;
        }
    }
</style>