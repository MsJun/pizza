<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
        <div class="background">
            <h1>欢迎大家品尝pizza!</h1>
            <h2>这里有你非常喜欢的pizza</h2>
            <button @click="goToMenu" class="btn btn-success">Let's order</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  methods:{
    goToMenu(){
        //跳转到上一次浏览的地址
        this.$router.go(-1)
        //指定跳转到哪个地址
        /*this.$router.replace('/meun')*/
        //通过push
        /*this.$router.push('/meun')*/
    }
  }
}
</script>


<style scoped>
#home{background:url('../../src/assets/timg.jpg')center center no-repeat;
height: 85vh;
padding:10%;}
h1,h2{margin:6%;
}
.background{
  background-color: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin:0 auto;
  padding:20px 0;
}
</style>