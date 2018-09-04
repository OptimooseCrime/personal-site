<template>
    <div id="Header">
        <b-col></b-col>
        <b-col class='poop'>
            <h1 class="header-text">
                ADAM BASILA | WEB DEVELOPER
            </h1>

            <img src="../assets/sarawww.png" width="300px" v-b-tooltip.hover title='Me with the president of the good boys club'/>
         

        </b-col>
        <b-col></b-col>
    </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
     @import url('https://fonts.googleapis.com/css?family=Raleway');
     
    .poop {
        padding: 10px;
        font-family: 'Raleway', sans-serif;
    }

</style>
