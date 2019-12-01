<template>
    <div id="weather">
        <center>
            <img class="front-icon" v-img-stop-drag :src="imgSrc[0]" alt="天气图片" />
            <p class="front-text">{{today.city}} {{weather[0].weather}}</p>
            <p class="front-text" v-text="weather[0].date"></p>
        </center>
        <br/>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                today: {},
                weather: [
                    [{}]
                ],
                icons: [{
                    icon: "https://s2.ax1x.com/2019/11/29/QEnuf1.png",
                    match: ["晴"]
                }, {
                    icon: "https://s2.ax1x.com/2019/11/29/QEnVw4.png",
                    match: ["多云"]
                }, {
                    icon: "https://s2.ax1x.com/2019/11/29/QEnkOU.png",
                    match: ["小雨"]
                }, {
                    icon: "https://s2.ax1x.com/2019/11/29/QEnFyT.png",
                    match: ["中雨"]
                }, {
                    icon: "https://s2.ax1x.com/2019/11/29/QEnl6K.png",
                    match: ["大雨", "暴雨"]
                }, {
                    icon: "https://s2.ax1x.com/2019/11/29/QEnZTJ.png",
                    match: ["小雪", "中雪"]
                }, {
                    icon: "https://s2.ax1x.com/2019/11/29/QEnEmF.png",
                    match: ["大雪"]
                }, {
                    icon: "https://s2.ax1x.com/2019/11/29/QEnQl6.png",
                    match: ["阴"]
                }, {
                    icon: "https://s2.ax1x.com/2019/11/29/QEnmk9.png",
                    match: ["台风", "飓风"]
                }, {
                    icon: "https://s2.ax1x.com/2019/11/29/QEnMSx.png",
                    match: ["风"]
                }],
                imgSrc: []
            }
        },
        methods: {
            async getWeather() {
                const {
                    data
                } = await this.$http.get("Weather/get_weather", {
                    params: {
                        city: window.localStorage.getItem("city")
                    }
                });
                this.today = {
                    city: data.data.results[0].currentCity,
                    PM25: data.data.results[0].pm25,
                    advice: {
                        clothes: [
                            data.data.results[0].index[0].des,
                            data.data.results[0].index[0].tipt,
                            data.data.results[0].index[0].title,
                            data.data.results[0].index[0].zs
                        ],
                        cars: [
                            data.data.results[0].index[1].des,
                            data.data.results[0].index[1].tipt,
                            data.data.results[0].index[1].title,
                            data.data.results[0].index[1].zs
                        ],
                        flu: [
                            data.data.results[0].index[2].des,
                            data.data.results[0].index[2].tipt,
                            data.data.results[0].index[2].title,
                            data.data.results[0].index[2].zs
                        ],
                        sports: [
                            data.data.results[0].index[3].des,
                            data.data.results[0].index[3].tipt,
                            data.data.results[0].index[3].title,
                            data.data.results[0].index[3].zs
                        ],
                        razor: [
                            data.data.results[0].index[4].des,
                            data.data.results[0].index[4].tipt,
                            data.data.results[0].index[4].title,
                            data.data.results[0].index[4].zs
                        ]

                    }
                };

                this.weather = data.data.results[0].weather_data;
                this.weatherHooks();
            },
            weatherHooks() {
                for (let i in this.weather) {
                    const todayWeather = this.weather[i].weather.indexOf("转") === -1 ?
                        this.weather[i].weather : this.weather[i].weather.substr(0, this.weather[i].weather.indexOf(
                            "转"));

                    for (let j in this.icons) {

                        if (this.icons[j].match.includes(todayWeather)) {
                            this.imgSrc[i] = this.icons[j].icon;
                            break;
                        }

                    }
                }
            }
        },
        created() {
            this.getWeather();
        }
    }
</script>

<style lang="less" scoped>
    .front-icon {
        width: 120px;
        margin-top: 25px;
    }


    .front-text {
        font-size: 18px;
        margin: 10px;
        color: #606266;
    }

    @media screen and (max-width: 768px) {
        .front-icon {
            width: 80px;
        }

        .front-text {
            font-size: 16px;
        }
    }

</style>