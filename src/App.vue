<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <br />
    <!--路由复用-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="delivry"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingguide"></router-view>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components:{
    appHeader:Header
  }
}
</script>

<style>

</style>
