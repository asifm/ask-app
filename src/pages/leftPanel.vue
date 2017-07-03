<template>
    <div>
        <!-- Left Panel -->
        <f7-panel left cover>
            <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
                <f7-navbar v-if="$theme.ios" :title="title" sliding></f7-navbar>
                <f7-pages>
                    <f7-page>
                        <f7-navbar v-if="$theme.material" :title="title" sliding></f7-navbar>
                        <f7-list>
                            
                            <f7-list-item v-for="menuItem in menuItems" :key="menuItem"><f7-button>{{menuItem}}</f7-button></f7-list-item>
                        
                        </f7-list>
                    </f7-page>
                </f7-pages>
            </f7-view>
        </f7-panel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            title: "Learn to ask",
                menuItems: ["What is an ask", "Technique cards" , "Why, how, who, and when", "",
                    "Random tip", "On effectuation", "What others say",
                    "Share your thoughts", "", "About"]
            }
        }
    }

</script>
<style>

</style>