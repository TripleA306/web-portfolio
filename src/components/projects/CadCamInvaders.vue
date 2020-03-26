<template>
    <b-container fluid>
        <b-jumbotron v-bind:header="project.name" />
        <b-button to="/portfolio">Go back</b-button>
        <b-img :src="project.image[0]"></b-img>
        <b-img :src="project.image[1]"></b-img>
        <b-img :src="project.image[2]"></b-img>
        <b-img :src="project.image[3]"></b-img>
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
                        title: "cadcaminvaders",
                        name: "CADCAM Invaders",
                        description: "I made this",
                        image: [CADCAMimg,img2, img3, img4]

                    }
            }
        },
    }
</script>

<style scoped>

</style>