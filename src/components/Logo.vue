<template>
    <center>
        <img v-img-stop-drag :src="src" />
        <p v-show="show" v-text="text"></p>
        <slot></slot>
    </center>
</template>

<script>
    import {
        logoSrc,
        title
    } from '../services/source.js';

    export default {
        props: {
            show: {
                default: true
            }, 
            text: {
                default: title
            },
            src: {
                default: logoSrc
            }
        },
        data() {
            return {
                title,
                logoSrc,
            };
        },
        methods: {}
    }
</script>

<style scoped>
    img {
        width: 100px;
        animation: logo-rotate 2s;
    }


    p {
        font-size: 25px;
        margin: 0;
        color: grey;
        animation: text-fade 3s;
    }

    @keyframes logo-rotate {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }



    @keyframes text-fade {
        from {
            opacity: 0;
            font-size: 35px;
        }

        to {
            opacity: 1;
            font-size: 25px;
        }
    }
</style>