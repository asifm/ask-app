<template>
    <div>
        <!-- right Panel -->
        <f7-panel right cover>
            <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
                <f7-navbar v-if="$theme.ios" :title="title" sliding></f7-navbar>
                <f7-pages>

                    <f7-navbar v-if="$theme.material" :title="title" sliding></f7-navbar>
                    <f7-list>
                        <f7-list-item v-for="menuItem in menuItems" :key="menuItem">{{menuItem}}</f7-list-item>
                    </f7-list>

                </f7-pages>
            </f7-view>
        </f7-panel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Practice your ask",
                menuItems: []
            }
        }
    }

</script>

<style>

</style>