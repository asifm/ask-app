<template>
    <div>
        <f7-block>
         <p class="buttons-row">
            <f7-button raised>Why ask?</f7-button>
            <f7-button raised>Random</f7-button>
            <f7-button raised>Saved</f7-button>
            </p>
            <f7-accordion v-for="(technique, index) in techniques" :key="technique.top">
                <f7-accordion-item>
                    <f7-accordion-toggle>
                        <f7-card>
                            <f7-card-header :style="{ 'background-color': bgColors[index % 7]}">{{ technique["top"] }}</f7-card-header>
                            <f7-card-content>{{ technique["top-expand"] }}</f7-card-content>
                        </f7-card>
                    </f7-accordion-toggle>
                    <f7-accordion-content>
                        <f7-list>
                            <f7-list-item :style="{ 'color': colors[index % 7]}" v-for="subTechnique, subIndex in technique['sub']" :key="subTechnique"
                                :link="'/techniqueDetail/' + index + '/' + subIndex"
                                :title="subTechnique">
                            </f7-list-item>
                        </f7-list>
                    </f7-accordion-content>
                </f7-accordion-item>
            </f7-accordion>
        </f7-block>
    </div>
</template>

<script>
    import techniquesData from "./data.json"
    export default {
        data() {
            return {
                techniques: techniquesData,
                bgColors: [
                    "rgba(127, 191, 63, 0.6)",
                    "rgba(191, 63, 63, 0.6)",
                    "rgba(63, 127, 191, 0.6)",
                    "rgba(127, 63, 191, 0.6)",
                    "rgba(191, 127, 63, 0.6)",
                    "rgba(63, 191, 63, 0.6)",
                    "rgba(63, 63, 191, 0.6)",
                ],
                colors: [
                    "rgba(127, 191, 63, 1)",
                    "rgba(191, 63, 63, 1)",
                    "rgba(63, 127, 191, 1)",
                    "rgba(127, 63, 191, 1)",
                    "rgba(191, 127, 63, 1)",
                    "rgba(63, 191, 63, 1)",
                    "rgba(63, 63, 191, 1)",
                ],
            }
        }
    }

</script>

<style scoped>
    .card-header {
        font-weight: bold;
        font-size: 1.4em;
    }

    .card-content {
        background-color: rgba(170, 160, 160, 0.1);
    }

    .list-block {
        /*background-color: rgba(170, 160, 160, 0.1);*/
        font-size: 1.3em;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-style: italic;
    }
</style>