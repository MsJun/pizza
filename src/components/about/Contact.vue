<template>
  <div class="card text-dark bg-list mb-3">
      <div class="card-header">联系我们</div>
      <div class="card-body">
          <h4 class="car-title">联系我们</h4>
          <p class="card-text">17600209001@163.com</p>
          <router-link to="/personName">联系人</router-link>
          <router-link to="/phone">电话</router-link>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>

</style>