<template>
  <div id="app">
    <db-sidebar></db-sidebar>
    <db-header></db-header>
    <db-content></db-content>
  </div>
</template>

<script>
import DbContent from './components/DbContent.vue'
import DbSidebar from './components/DbSidebar.vue'
import DbHeader from './components/DbHeader.vue'
export default {
  name: 'App',
  components: {
    DbHeader,
    DbSidebar,
    DbContent
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
