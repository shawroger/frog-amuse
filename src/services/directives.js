import Vue from 'vue'

/* v-img-stop-drag */
Vue.directive('img-stop-drag', {
    bind: function (el) {
        el.ondragstart = () => false;
    }
});

