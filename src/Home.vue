<template>
<div>
    <h2 v-if="count>=3" :class="{over:(count>5)}" id = "shw">{{count}}</h2>
    <hr>
    <button  id = "btn" @click = 'increase'>count</button>
    <d-nav-bar></d-nav-bar>

</div>
</template>
<script>
export default {
  name :'home',
  data:function(){
    return {count:0};
  },
  methods:{
    increase:function(){
      this.count++;
    }
  }
}
</script>
<style scoped>
  #btn{
    color:white;
    background-color:rgb(0, 0, 0);
    height:40px;
    width:80px;
    text-align: center;
    font-weight: 0;
    font-size:25px;

  }
  #btn:hover{
    color:rgb(255, 0, 43);
    background-color: rgb(13, 44, 44);

  }
  #show{
    color:rgb(90, 16, 16);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 60px;

  }
  .over{
    color:blueviolet;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 60px;
  }
</style>
