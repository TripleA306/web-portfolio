<template>
    <b-container fluid>
        <b-jumbotron header="Hi! I'm Aaron Atkinson." class="shadow-sm ">
            A computer programmer.</b-jumbotron>
        <h1>Welcome to Aarons Home Page</h1>
        <p>This looks fairly empty....</p>
        <div class="pointer" ><font-awesome-icon class="pointer"  @click="testLK" size="4x" :icon="['fab', 'linkedin']"/>
        <font-awesome-icon class="pointer" @click="testGT" size="4x" :icon="['fab', 'github']"/></div>


    </b-container>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            testLK : function () {
                alert("WOW THIS WORKED! FROM LINKEDIN");
            },
            testGT : function () {
                alert("WOW THIS WORKED! FROM GITHUB");
            },
        }
    }
</script>

<style scoped>

    .pointer{
        cursor: pointer;
    }
    .test{
        cursor: progress;
    }

</style>