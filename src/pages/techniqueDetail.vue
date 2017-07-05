<template>
    <f7-page>
        <f7-navbar :title="technique.top" back-link="Back" sliding></f7-navbar>

        <f7-block>
            <f7-swiper pagination scrollbar>
                <f7-swiper-slide>
                    <f7-card class="top-card">
                        <f7-card-header id="large-header" :style="{ 'background-color': colors.bgColors[topIndex % 7]}" class="box">
                            {{ detail.main}}
                        </f7-card-header>
                        <f7-card-content>
                            {{ detail.explain }}
                        </f7-card-content>

                        <f7-card-header id="small-header">
                            {{ subTechnique }}
                        </f7-card-header>
                        <f7-card-footer>
                            What can you do?
                        </f7-card-footer>

                    </f7-card>

                </f7-swiper-slide>

                <f7-swiper-slide>
                    <f7-card class="main-card">
                        <f7-card-header :style="{ 'color': colors.fgColors[topIndex % 7]}" class="box">
                            Tips
                        </f7-card-header>
                        <f7-card-content>
                            <p>{{ detail.process.head }}</p>
                            <ul>
                                <li v-for="processItem in detail.process.list" :key="processItem">
                                    {{ processItem }}
                                </li>
                            </ul>
                            <p>{{ detail.process.foot }}</p>
                        </f7-card-content>
                        <f7-card-footer>
                            What can you do?
                        </f7-card-footer>
                    </f7-card>
                </f7-swiper-slide>
            </f7-swiper>
        </f7-block>
    </f7-page>
</template>

<script>
    import myMixins from "../mixins"

    import techniquesData from "../data/techniquesData.json"

    export default {
        mounted() {
        },
        data() {
            let techniques = techniquesData
            let technique = techniques[this.$route.params.index]
            let details = technique.details
            let detail = details[this.$route.params.subIndex]

            let topIndex = this.$route.params.index

            return {
                techniques: techniques,
                technique: technique,
                details: details,
                detail: detail,
                subTechnique: technique.sub[this.$route.params.subIndex],

                topIndex: topIndex
            }
        },
        mixins: [myMixins]
    }

</script>

<style scoped>
    ul {
        margin-left: -1.5em;
    }

    #large-header {
        /*color: white;*/
        font-style: italic;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1.3em;
        padding: 1.1em;
    }

    #small-header {
        /*color: white;*/
        /*background-color: white;*/
        font-style: italic;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1em;
        /*padding: 1.1em;*/
    }

    .card-content {
        /*background-color: rgba(63, 127, 191, 0.07);*/
        /*font-style: italic;*/
        /*padding: 0;*/
    }

    .main-card .card-header {
        background-color: #efefef;
        /*background-color: rgba(63, 127, 191, 0.9);*/
        font-weight: bold;
        /*color: white;*/
        /*padding: 0.2em;*/
        /*font-style: italic;*/
    }

    .button {
        /*text-align: right;*/
        /*margin: ;*/
    }

    .box {
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
    }
</style>