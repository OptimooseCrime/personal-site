<template>
  <div id="app">
    <b-button-group class='links'>
            <b-button id='email-btn' href='mailto:adamcbasila@gmail.com'>Email Me</b-button>
            <b-button target="_blank" href='https://drive.google.com/open?id=1VzirMAccBmD8Ou0BoTmdl9SJhj_kRs_0'>Resume</b-button>
            <b-button target="_blank" href='https://www.linkedin.com/in/badadam/'>LinkedIn</b-button>
            <b-button id='github-btn' target="_blank" href='https://github.com/optimoosecrime'>GitHub</b-button>
          </b-button-group> <br>
    <Header/>
    <div class='routers'> 
      <router-link to='About' class='find'  tag='button'>About</router-link>
      <router-link to='Projects' class='find' tag='button'>Projects</router-link>
      <router-link to='Education' class='find' tag='button'>Education</router-link>
    </div>
    <transition name="fade" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in">
    <router-view/>
    <b-col class="b-container">
      <h4 class="textstuff"><h1> {{ welcomeHeader }} </h1> {{ introP }} </h4> 

      <h2 class="textstuff"> {{ contactInvite }} </h2> 
      <h2></h2>
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
      welcomeHeader:'Welcome to my portfolio page.',
      introP: 'A place for you to learn a little bit about myself, a few of the projects I\'ve created, and the road that got me on the path to becoming a developer. Where I\'m doing what truly makes me happy... something that just a short while ago I never would have even dreamed of pursuing.',
      contactInvite: 'Feel free to contact me with feedback and questions.',
      Thanx:' Thank you for viewing.'
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
    width: 100%;
    height: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    min-width: 100%;
    min-height: 100%;
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
.routers{
  padding: 15px;
}
body {
  font-family: 'Raleway', sans-serif;
}
.textstuff{
  font-family: 'Raleway', sans-serif;
  padding: 15px;
  text-shadow: 0 1px black;

}
.find{
  border-radius: 10px;
  background-color: #7C00FF;
  color: white;
  font-family: 'Raleway', sans-serif;
}
.links{
  border-radius: 10px;
  background-color: #7C00FF;
  color: white;
  font-family: 'Raleway', sans-serif;
}


</style>
