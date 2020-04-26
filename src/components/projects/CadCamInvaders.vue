<template>
    <b-container fluid >
        <b-jumbotron fluid header-level="3"  v-bind:header="project.name" />
        <b-button to="/portfolio">Go back</b-button>
        <b-row style="margin-top: 1rem">
            <b-col class="col-md-6 col-sm-12 col-12" style="width: 50%">
                <b-carousel
                        id="carousel-1"
                        :interval="4000"
                        controls
                        indicators
                        img-width="50%"
                        style="text-shadow: 1px 1px 2px #333;"

                >
                    <b-carousel-slide v-for="img in project.image" v-bind:key="img.id">
                        <template v-slot:img>
                            <img    fluid
                                    class="d-block img-fluid w-100"
                                    width="1024"
                                    height="480"
                                    v-bind:src=img.img
                                    alt="image slot"
                            >
                        </template>
                        <h1>{{img.caption}}</h1>
                    </b-carousel-slide>
                </b-carousel>
            </b-col>
            <b-col>
                <b-card>
                    <h1 class="cardFont">Details</h1>
                    <p class="cardFont">This project was created in Java by myself and Bubba Chabot.</p>
                    <p class="cardFont">It was a simple 2D shooter that would require the player to shoot flying saucers to progress to the next stage.</p>
                    <p class="cardFont">Each stage would increase the spawn count and movement speed of the enemies.</p>
                    <p class="cardFont">The game would end if you somehow beat level 10 or if a saucer made it to the bottom of the screen.</p>
                    <p class="cardFont">The GameOver screen would loop through the complete animation of the Doomguy sprites (my favourite part of the project).</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import CADCAMimg from "../../assets/images/CADCAM Invaders.png";
    import img2 from "../../assets/images/cadcamImg/CADCAM Invaders2.png"
    import img3 from "../../assets/images/cadcamImg/CADCAM Invaders3.png"
    import img4 from "../../assets/images/cadcamImg/cadAbout.jpg"

    export default {
        name: "CadCamInvaders",
        data:function()
        {
            return {
                project:
                    {
                        id: 2,
                        name: "CADCAM Invaders",
                        image: [
                            {
                                id: 1,
                                caption: "Splash Screen",
                                img: CADCAMimg
                            },
                            {
                                id: 2,
                                caption: "Gameplay",
                                img: img2
                            },
                            {
                                id: 3,
                                caption: "Death Screen with Doomguy",
                                img: img3
                            },
                            {
                                id: 4,
                                caption: "About Screen",
                                img: img4
                            }]

                    }
            }
        },
    }
</script>

<style scoped>
    .cardFont{
        font-family: 'Avenir', Helvetica, Arial, sans-serif
    }
</style>