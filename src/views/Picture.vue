<template>
    <div id="picture">
        <br/>
        <Logo 
            src="https://s2.ax1x.com/2019/11/30/QVVODe.png"
            :show="false"
        />
        <br/>
        <List></List>
    </div>
</template>

<script>
    import Logo from '@/components/Logo.vue';
    import List from '@/components/Picture/List.vue';
    export default {
        components: {
            Logo,
            List
        }
    }
</script>