<template>
    <!-- Left Panel -->
    <f7-panel left cover class="theme-lime">
        <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
            <f7-navbar v-if="$theme.ios" title="Why Ask?" sliding></f7-navbar>
            <f7-pages>
                <f7-page>
                    <f7-navbar v-if="$theme.material" title="Why Ask?" sliding></f7-navbar>
                    <f7-block>
                        <p>{{ content }}</p>
                    </f7-block>
                </f7-page>
            </f7-pages>
        </f7-view>
    </f7-panel>
</template>

<script>
    export default {
        data() {
            return {
                content: "Dolore tempor elit officia ea ad dolor sit. Nulla dolore amet dolore veniam dolor consectetur. Lorem ullamco amet nisi velit."
            }
        }
    }

</script>