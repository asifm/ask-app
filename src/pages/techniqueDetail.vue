<template>
    <f7-page>
        <f7-navbar :title="technique.top" back-link="Back" sliding></f7-navbar>
        <f7-block>
            <f7-card class="top-card">
                <f7-card-header :style="{ 'background-color': colors.bgColors[topIndex % 7]}">
                    {{ detail.main}}
                </f7-card-header>
                <f7-card-content>
                    {{ detail.explain }}
                </f7-card-content>
                <p class="buttons-row">
                    <f7-button color="indigo">
                        Do it
                    </f7-button>
                    <f7-button color="indigo">
                        Discuss
                    </f7-button>
                </p>
            </f7-card>
        </f7-block>
        <f7-block>
            <f7-card class="main-card">
                <f7-card-header :style="{ 'color': colors.fgColors[topIndex % 7]}">
                    Tips
                </f7-card-header>
                <f7-card-content>
                    <p>{{ detail.process.head }}</p>
                    <ul>
                        <li v-for="processItem in detail.process.list" :key="processItem">
                            {{ processItem }}
                        </li>
                    </ul>
                </f7-card-content>
                <f7-card-footer>
                    <p>{{ detail.process.foot }}</p>
                </f7-card-footer>
            </f7-card>
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

                topIndex: topIndex
            }
        },
        mixins: [myMixins]
    }

</script>

<style scoped>

    .top-card .card-header {
        /*color: white;*/
        font-style: italic;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 1.3em;
        padding: 1.1em;
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
</style>