<template>
    <b-container>
        <b-jumbotron v-bind:header="project.name" />
        <b-button to="/portfolio">Go back</b-button>
    </b-container>
</template>

<script>
    import Cans4Cosmo from "../../assets/images/cans4cosmo_logo.png";
    export default {
        name: "Cans4CosmoProject",
        data:function()
        {
            return {
                project:
                    {
                        id: 1,
                        title: "Cans4CosmoProject",
                        name: "Cans4Cosmo Project",
                        description: "I made this",
                        image: Cans4Cosmo,

                    }


            }
        },
    }
</script>

<style scoped>

</style>