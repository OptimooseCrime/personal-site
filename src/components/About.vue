<template>
          
    <div id='About'>
        

        <div class="container">
            <p>{{ aboutP1 }}</p>
            <!-- image and centered small text -->
            <p> {{ aboutP2 }} </p>
            <p> {{ aboutP3 }} </p>
            <p> {{ aboutP4 }} </p>
            <p> {{ aboutP5 }}</p>
            <Carousel/>
        </div>
    </div>

</template>

<script>
    import Carousel from '@/components/Carousel'
    export default{
        name:'About' ,
        components:{
            Carousel
        },  
        data() {
            return{
                aboutP1: 'I feel like I did something good for myself by breaking into an industry where I\'m truly doing what makes me happy. In the summer of 2017, I wrote my first function and I haven\'t looked back. The dream became reality for me when saying "I wish there was an app for that." turned into "We can do this!"',
                aboutP2:'In 2006, I joined the military straight out of highschool. My time in service is probably one of the most important moments in my life. It was a time of self discovery, a time of growing up and being on my own, and it gave me a good sense of direction in life. What I gained the most out of it was the confidence to move forward for myself with a sense of pride, motivation, and persistance. I don\'t like giving up.',
                aboutP3:'As a paratrooper serving in the 82nd Airborne,I learned very quickly about moving with a purpose, and just what the mind and body are capable of. I honestly don\'t think I\'d be the person I am today without my experiences.',
                aboutP4:'In my free time, I like to enjoy everything living in the Rockies has to offer. Camping getaways and snowboarding are not out of the norm for me. I stay pretty active in the gym but I also like to unwind at home binge watching a show, jamming some live music, or playing video games even though I\'m terrible at them.',
                aboutP5:'I\'m a people person. I love meeting new people and learning from them. Feel free to drop a line and say hello.'
                }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    #About{
         font-family: 'Raleway', sans-serif;

        /* position:fixed; */
    width:inherit;
    text-shadow: 0 1px black;
    }
</style>
