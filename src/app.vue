<template>
  <!-- App -->
  <div id="app">

    <left-panel></left-panel>
    <right-panel></right-panel>

    <!-- Main Views -->
    <!--Show a random background color, picked from mixins data: colors  -->
    <f7-views :class="colors.themes[Math.floor(Math.random() * colors.themes.length)]">
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>{{ appName }}</f7-nav-center>
          <f7-nav-right>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>{{ appName }}</f7-nav-center>
              <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right>
            </f7-navbar>

            <!--Top level techiniques with sub-level exposed through accordion toggle-->
            <techniques-top></techniques-top>

            <f7-fab-speed-dial>
              <!-- Actions -->
              <f7-fab-actions>
                <f7-fab-action v-for="actionIcon in actionIcons" :key="uniqueId(actionIcon)">
                <i class="material-icons" >{{ actionIcon }}</i>
                </f7-fab-action>
              </f7-fab-actions>
              <!-- FAB -->
              <f7-fab>
                <!-- First icon to open Actions -->
                <f7-icon icon="icon-plus"></f7-icon>
                <!-- Second icon to close Actions -->
                <f7-icon icon="icon-close"></f7-icon>
              </f7-fab>
            </f7-fab-speed-dial>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>




  </div>
</template>

<script>
  import myMixins from "./mixins"
  import { db } from "./firebase"

  import leftPanel from "./pages/leftPanel.vue"
  import rightPanel from "./pages/rightPanel.vue"
  import techniquesTop from "./pages/techniquesTop.vue"

  export default {

    data() {
      return {
        appName: "Ask Diary (Beta)",
        actionIcons: [
          "alarm",
          "date_range",
          "mic",
          "videocam",
          "call",
          "email",
          "short_text",
          "near_me",
          "person_add",
          "people"
        ],
        
      }
    },
    components: {
      'left-panel': leftPanel,
      'right-panel': rightPanel,
      'techniques-top': techniquesTop
    },

    firebase: {
    },
    mounted() {

    },
    mixins: [myMixins]
  }

</script>

<style>
  .material-icons {
    color: white;
  }
</style>