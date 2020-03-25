<template>
    <b-container>
        <b-jumbotron v-bind:header="project.name" />
        <b-button to="/portfolio">Go back</b-button>
    </b-container>
</template>

<script>
    import CADCAMimg from "../../assets/images/CADCAM Invaders.png";

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
                        image: CADCAMimg,

                    }
            }
        },
    }
</script>

<style scoped>

</style>