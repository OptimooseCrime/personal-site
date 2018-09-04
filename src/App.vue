<template>
  <div id="app">
    <Header/>
    
    <div class='routers'> 
      
      <router-link to='About' class='find'  tag='button'>About</router-link>
      <router-link to='Projects' class='find' tag='button'>Projects</router-link>
      <router-link to='Education' class='find' tag='button'>Education</router-link>
    </div>
    <transition name="fade" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in">
    <router-view/>
    <b-col>

    <h3 class="textstuff">Welcome to my portfolio page. A place for you to learn a little bit about myself, a few of my projects I've created (the list continues to grow, I'm enjoying a project I'm building in flutter right now), and the road that got me on the path to becoming a developer, doing what truly makes me happy... something that just a short while ago I never would have even dreamed of pursuing. Feel free to reach out to me with any questions. </h3>
    <img src="" alt="" width="300px" v-b-tooltip.hover title="I thought I was going to be an astronaught"/>
    </b-col>

    </transition>

   
    <Footer/>
    </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Education from './components/Education'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components:{
    Header,
    About,
    Projects,
    Education,
    Footer,
  },
  data(){
    return{

    }
  },
  methods:{
    
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:100');

  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  html{
    width: inherit;
    font-family: 'Raleway', sans-serif;
  }
  #app{
    font-family: 'Raleway', sans-serif;

    width: inherit;
    background-image: url('./assets/stripebackground.png');
    text-align: center;
    color:white;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    background-size: cover;
    height:max-content;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 10px;
  }

  #Footer{
    background-color: #7C00FF;
  }

 /* .page{
   position:fixed;
   width:inherit;
   
 } */

 .router-anim-enter-active{
   animation: coming 0s;
   /* animation-delay: .5s; */
   opacity: 0;
 }

 .router-anim-leave-active{
   animation: going 0s;
 }

 @keyframes going{
   from{
     transform: translateX(0);
   }
   to { 
    transform: translateX(-50px);
    opacity: 0;
   }
 }

  @keyframes coming{
   from{
     transform: translateX(-50px);
     opacity: 0;
   }
   to { 
    transform: translateX(0);
    opacity: 1;
   }
 }
 .find{
   color: blue;
 }
body {
  font-family: 'Raleway', sans-serif;
}
.textstuff{
  font-family: 'Raleway', sans-serif;

}
.find{
  border-radius: 10px;
  background-color: #7C00FF;
  color: white;
  font-family: 'Raleway', sans-serif;
}
</style>
