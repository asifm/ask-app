<template>
    <div>
            <f7-searchbar cancel-link="Cancel" placeholder="Search" :clear-button="true" id="search"></f7-searchbar>
        <f7-block>
            <f7-block>
                <f7-grid>
                    <f7-col>
                        <f7-button raised style="background-color:#efefef" @click="getRandomCard()" :href="randomCard">
                            Random card
                        </f7-button>
                    </f7-col>
                    <f7-col>
                        <f7-button raised style="background-color:#efefef" href="/aboutCards/">
                            How to use
                        </f7-button>
                    </f7-col>
                </f7-grid>
            </f7-block>

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
                            <f7-list-item :style="{ 'color': colors.fgColors[index % 7]}" v-for="subTechnique, subIndex in technique['sub']" :key="subTechnique"
                                :link="'/techniqueDetail/' + index + '/' + subIndex" :title="subTechnique">
                            </f7-list-item>
                        </f7-list>
                    </f7-accordion-content>
                </f7-accordion-item>
            </f7-accordion>
        </f7-block>

        <!--test-->

        <!--test ends-->

    </div>
</template>

<script>
    import myMixins from "../mixins"

    import techniquesData from "../data/techniquesData.json"

    export default {
        data() {
            return {
                fruits: ['apple', 'banana', 'orange'],
                randomCard: '',
                techniques: techniquesData
            }
        },
        methods: {
            getRandomCard() {
                let numTopTechniques = this.techniques.length
                let randomTopIndex = Math.floor(Math.random() * numTopTechniques)
                let numSubTechniques = this.techniques[randomTopIndex].sub.length
                let randomSubIndex = Math.floor(Math.random() * numSubTechniques)

                this.randomCard = '/techniqueDetail/' + randomTopIndex + '/' + randomSubIndex
            }
        },
        mounted() {
            this.getRandomCard();
        },
        mixins: [myMixins]
    }

</script>

<style scoped>
    .searchbar {
        /*background-color: white;*/
    }
/*
    .searchbar-input {
        color: black;
    }*/

    #search {
        color: black;
        /*background-color: white;*/
    }

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