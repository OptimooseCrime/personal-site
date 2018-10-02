<template>
    <div id='Education'>
        <div class='container'>

            <div class="clearfix">
                <b-img left src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAShynZFUq4NXhozYol5nVmc3ei7tcDyDMcWasSVxgqWNlJNR2" alt="left image" />
                <p class=''> {{ gEdu }} </p>
            </div>
            <div class="clearfix">
                <b-img left src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-1/c29.0.200.200/p200x200/11225732_1224101057616837_6681854461574349559_n.jpg?_nc_cat=0&oh=2b435b55d7e125df211abba5ef83e16a&oe=5BCA13CC" alt="left image" />
                <p class='poop'> {{ CMS }} </p>
            </div>
            <div class="clearfix">
                <b-img left src="https://msudenver.edu/media/marketingandcommunications/brandcentral/images/formalformata/MSUDenver_Formal_2CRev_BlueRed_WhBkgd_FormatA_RGB.gif" alt="left image" width="202px"/>
                <p class='poop'> {{ MSUD }} </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Education',
        data(){
            return{
                gEdu:'Learned skills in full stack web development with languages including HTML, CSS, JavaScript, and SQL. Frameworks and tools include React, Vue, Angular, Knex, PostgreSQL, Express, Git, Node. Above all else I learned great learning habits to move my career in web development forward as I continue to learn languages and frameworks such as Flutter.',
                CMS:'To expand on my love for radio, I left MSUD to focus more on the broadcasting side of digital media. While there, I learned valuable skills in social media management, radio production, film production and advertising. I also my first time touching code at all. And where I built  my first site using WordPress.',
                MSUD:'Metropolitan State University of Denver. Attended from 2010 - 2012. I majored in journalism until I found a love for radio and digital broadcasting.'
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    #Education{
    font-family: 'Raleway', sans-serif;
   
    /* position:fixed; */
    width:inherit;
    padding: 10px;
    }
    .clearfix{
        padding: 10px;
    }
</style>
