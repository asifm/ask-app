<template>
  <!-- App -->
  <div id="app">

    <why-ask></why-ask>
    <about-us></about-us>

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
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
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

            <!--Top level techiniques with sub-level with accordion toggle-->
            <techniques-top></techniques-top>

            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button big raised open-panel="left">Why Ask?</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button big raised open-panel="right">Random</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
            <f7-fab color="green">
              <f7-icon icon="icon-plus"></f7-icon>
            </f7-fab>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>



  </div>
</template>

<script>
  import whyAsk from "./pages/whyAsk.vue"
  import aboutUs from "./pages/aboutUs.vue"
  import techniquesTop from "./pages/techniquesTop.vue"

  export default {
    data() {
      return {
        appName: "The Ask",
        mainTheme: "theme-indigo"
      }
    },
    components: {
      'why-ask': whyAsk,
      'about-us': aboutUs,
      'techniques-top': techniquesTop
    }
  }

</script>

<style>

</style>