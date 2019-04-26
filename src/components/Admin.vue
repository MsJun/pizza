<template>
    <h1>Admin</h1>
</template>

<script>
export default {
  data () {
    return {
      name:"Henry"
    }
  },
  /*beforeRouteEnter:(to,from,next) =>{
    alert("hello" + this.name)
  }*/
  //离开组件(路由守卫)
  /*beforeRouteLeave(to,from,next) {
    if(confirm("确定离开吗？")  == true){
        next();
    }else{
        next(false)
    }
  }*/
}
</script>


<style scoped>

</style>