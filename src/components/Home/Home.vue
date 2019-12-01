<template>
    <div id="front">
        <Logo />
    </div>
</template>

<script>
    import Logo from '@/components/Logo.vue';
    export default {
        components: {
            Logo
        }
    }
</script>

<style lang="less" scoped>
    #front {
        padding-top: 30px;
    }
</style>