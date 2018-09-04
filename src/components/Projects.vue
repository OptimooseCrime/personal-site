<template>
    <div id='Projects'>

            <b-col></b-col>
            <b-col></b-col>
            <b-col>
        <div>
            <b-card title="Skilyft"
            img-src=''
            img-alt="Image"
             img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <img src="@/assets/skilyft.png" alt="" width=275px>
             <b-button class='poop' @click="showModal">
                More Info
            </b-button>
            <b-modal ref="myModalRef" hide-footer title="SkiLyft">
                <div class="d-block text-center">  
                    <h3>Technologies used</h3>
                    <img src="../assets/ReactNative.png" alt="" width=100px v-b-tooltip.hover title="React Native">
                    <img src="../assets/node.png" alt="" width=67px v-b-tooltip.hover title="Node">
                    <img src="../assets/knex.png" alt="" width=100px v-b-tooltip.hover title="Knex">
                    <img src="../assets/express.png" alt="" width=100px v-b-tooltip.hover title="Express">
                    <img src="../assets/postgresql.png" alt="" width=100px v-b-tooltip.hover title="PostgreSQL">
                    <img src="../assets/heroku.png" alt="" width=65px v-b-tooltip.hover title="Heroku">      
                    <p class="card-text">
                    Skilyft is a ride share app made for long distance roadtrips with original implementation to be used to ski resorts, but with applicaton to be used for routes to anywhere such as music festivals. The idea is for a rider to find a driver headed to the same location they are headed to.
                    </p>
                </div>
                <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
            </b-modal>

                
            </b-card>
        </div>
        <div>
            <b-card title="Beerless Pong"
            img-src=""
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <img src="@/assets/beerlessPong.png" width=275px>
              <div>
                <b-button class='poop' @click="showModal2">
                More Info
                </b-button>
                <b-modal ref="myModalRef2" hide-footer title="Beerless Pong">
                <div class="d-block text-center">
                    <h3>Technologies Used</h3>
                    <img src="@/assets/jscript.png" alt="" width=100px v-b-tooltip.hover title="JavaScript">
                    <img src="@/assets/express.png" alt="" width="100px" v-b-tooltip.hover title="Express">
                    <img src="@/assets/heroku.png" alt="" width=100px v-b-tooltip.hover title="Heroku">
                    <img src="@/assets/node.png" alt="" width=100px v-b-tooltip.hover title="Node">
                    <p>A brick-breaker game that stores a highscore.</p>
                </div>
                <b-button href="https://beerless-pong.firebaseapp.com/" variant="primary">Play a game!
                </b-button>
                <b-btn class="mt-3" variant="outline-danger" block @click="hideModal2">Close Me</b-btn>
                </b-modal>
            </div>
            </b-card>

        </div>
        </b-col>
        <b-col></b-col>
        <b-col></b-col>
    </div>
</template>

<script>
    export default{
        name:'Projects',
        methods: {

            
            showModal () {
                this.$refs.myModalRef.show()
            },
            hideModal () {
                this.$refs.myModalRef.hide()
            },
            showModal2 () {
                this.$refs.myModalRef2.show()
            },
            hideModal2 () {
                this.$refs.myModalRef2.hide()
            }
        }
    }
</script>
<style scoped>
    #Projects{
        /* position:fixed; */
        width:inherit;
        display: flex;
        border-radius: 6px;
        color: #7C00FF;
        padding: 10px;
        /* margin: 0 auto 0 auto; */
        justify-content: center;
    }
    .poop{
        padding: 10px;
    }
</style>

