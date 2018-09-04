<template>
    <div id='Footer'>
        <footer>{{ message }}</footer>
    </div>
</template>


<script>
    export default{
        name:'Footer',
        data(){
            return{
                message:'Adam Basila 2018'
            }
        }
    }   
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    #Footer{
        font-family: 'Raleway', sans-serif;
        background-color: #7C00FF;
        
    }
</style>
