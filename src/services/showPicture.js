import Vue from 'vue'

export function showPicture(url, options = {
    title: "精选图片",
    button: "看完了"
}) {
    Vue.prototype.$alert(`<img src="${url}" style="width: 100% !important; height: 100% !important"/>`
    , options.title , {
        dangerouslyUseHTMLString: true,
        confirmButtonText: options.button
    });
}
