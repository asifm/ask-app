<template>
    <f7-page>
        <f7-navbar :title="detail.main" back-link="Back" sliding></f7-navbar>


        <f7-block>
            {{ detail.process }}
            <f7-link back>back</f7-link>
        </f7-block>
    </f7-page>
</template>

<script>
    // import techniquesTop from "./techniquesTop.vue";

    export default {
        mounted() {
            console.log(this.detail)

        },
        data() {
            let detail = JSON.parse(decodeURIComponent(this.$route.params.techniqueDetail))
            return {
                detail: detail
            }
        },
        props: ["ind", "sind"]
    }

</script>

<style>

</style>