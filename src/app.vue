<template>
  <!-- App -->
  <div id="app">

    <left-panel></left-panel>
    <right-panel></right-panel>

    <!-- Main Views -->
    <f7-views :class="mainTheme">
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>{{ appName }}</f7-nav-center>
          <f7-nav-right>
            <f7-link icon="icon-plus" open-panel="right"></f7-link>
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
                <f7-link icon="icon-plus" open-panel="right">
                </f7-link>
              </f7-nav-right>
            </f7-navbar>

            <!--Top level techiniques with sub-level exposed through accordion toggle-->
            <techniques-top></techniques-top>

            <f7-fab color="white">
              <f7-link open-panel="left"><i class="material-icons md-36">fingerprint</i></f7-link>
            </f7-fab>

          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>



  </div>
</template>

<script>
  import leftPanel from "./pages/leftPanel.vue"
  import rightPanel from "./pages/rightPanel.vue"
  import techniquesTop from "./pages/techniquesTop.vue"

  export default {
    data() {
      return {
        appName: "Ask Diary",
        mainTheme: "theme-indigo"
      }
    },
    components: {
      'left-panel': leftPanel,
      'right-panel': rightPanel,
      'techniques-top': techniquesTop
    }
  }

</script>

<style>

</style>