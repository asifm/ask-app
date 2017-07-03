<template>
    <div>
        <f7-block>
            <f7-accordion v-for="(technique, index) in techniques" :key="technique.top">
                <f7-accordion-item>
                    <f7-accordion-toggle>
                        <f7-card>
                            <f7-card-header :style="{ 'background-color': colors.bgColors[index % 7]}">{{ technique["top"] }}</f7-card-header>
                            <f7-card-content>{{ technique["top-expand"] }}</f7-card-content>
                        </f7-card>
                    </f7-accordion-toggle>
                    <f7-accordion-content>
                        <f7-list>
                            <f7-list-item :style="{ 'color': colors.bgColors[index % 7]}" v-for="subTechnique, subIndex in technique['sub']" :key="subTechnique"
                                :link="'/techniqueDetail/' + index + '/' + subIndex" :title="subTechnique">
                            </f7-list-item>
                        </f7-list>
                    </f7-accordion-content>
                </f7-accordion-item>
            </f7-accordion>
        </f7-block>
    </div>
</template>

<script>
    import techniquesData from "./techniquesData.json"
    import colorsData from "./colorsData.json"

    export default {
        data() {
            return {
                techniques: techniquesData,
                colors: colorsData
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