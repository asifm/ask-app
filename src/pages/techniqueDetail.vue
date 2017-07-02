<template>
    <f7-page>
        <f7-navbar :title="technique.top" back-link="Back" sliding></f7-navbar>
        <f7-block>
            <f7-card class="top-card">
                <f7-card-header>
                    {{ detail.main}}
                </f7-card-header>
                <f7-card-content>
                    {{ detail.explain }}
                </f7-card-content>
                <p class="buttons-row">
                    <f7-button big raised color="indigo">
                        Do it
                    </f7-button>
                    <f7-button big raised color="indigo">
                        Discuss
                    </f7-button>
                </p>
            </f7-card>
        </f7-block>
        <f7-block>
            <f7-card class="main-card">
                <f7-card-header>
                    How do I do it?
                </f7-card-header>
                <f7-card-content>
                    <p>{{ detail.process.head }}</p>
                    <f7-list>
                        <f7-list-item v-for="processItem in detail.process.list" :key="processItem">
                            {{ processItem }}
                        </f7-list-item>
                    </f7-list>
                </f7-card-content>
                <f7-card-footer>
                    <p>{{ detail.process.foot }}</p>
                </f7-card-footer>
            </f7-card>
        </f7-block>
    </f7-page>
</template>

<script>
    import techniquesData from "./data.json"

    export default {
        mounted() {
        },
        data() {
            let techniques = techniquesData
            let technique = techniques[this.$route.params.index]
            let details = technique.details
            let detail = details[this.$route.params.subIndex]
            return {
                techniques: techniques,
                technique: technique,
                details: details,
                detail: detail
            }
        }
    }

</script>

<style scoped>
    li {
        /*background-color: #efefef;*/
        background-color: rgba(191, 163, 163, 0.1);
    }

    .top-card .card-header {
        background-color: rgba(127, 191, 63, 1);
        color: white;
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
        background-color: rgba(63, 127, 191, 0.9);
        /*font-weight: bold;*/
        color: white;
        /*padding: 0.2em;*/
        /*font-style: italic;*/
    }
</style>