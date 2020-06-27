<template>
    <b-container fluid style="width: 100%">
        <b-jumbotron fluid header="Resume" class="shadow-sm"></b-jumbotron>
        <b-row >
            <b-col class="col-md-6 col-sm-12 col-12">
                <h1>Skills</h1>
                <b-card v-for="skill in skills" v-bind:key="skill.id" class="shadow-sm" style="margin-top: 1rem;">
                    <b-card-title>{{skill.name}}</b-card-title>
                    <b-card-text>
                        <ul v-for="detail in skill.info" v-bind:key="detail">
                            <li>{{detail}}</li>
                        </ul>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col >
                <h1>Education</h1>
                <b-card v-for="edu in education" v-bind:key="edu.id" class="shadow-sm" style="margin-top: 1rem;">
                    <b-card-sub-title>{{edu.year}}</b-card-sub-title>
                    <b-card-title>{{edu.course}}</b-card-title>
                    <b-card-sub-title>{{edu.where}}</b-card-sub-title>
                    <b-card-text>
                        <ul v-for="extra in edu.extras" v-bind:key="extra">
                            <li>{{extra}}</li>
                        </ul>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Resume",
        data:function()
        {
            return {
                skills: [
                    {
                        id: 1,
                        name: "Full Stack Development",
                        info: [ "Developed UI elements that interact with back-end databases using API calls" ,
                            "Developed methods and queries used to display specific information on front-end",
                            "Created exhaustive tests for each new feature to prove their intended functions"]
                    },
                    {
                        id: 2,
                        name: "Problem Solving",
                        info:[ "Identifying the entities involved and their unique properties" ,
                            "Build relations and behaviors for each entity to allow for proper functionality",
                            "Work with the resources available to complete the task at hand"]
                    },
                    {
                        id: 3,
                        name: "Persistence",
                        info:[ "Determined to complete any task requested",
                            "Any skill or toolset I consider mediocre, I will strive to gain a better understanding and proficiency until I am satisfied with my performance"]
                    }
                ],
                education: [
                    {
                        id: 1,
                        year: 2020,
                        course: "Computer Systems Technology Diploma",
                        where: "Saskatchewan Polytechnic, Saskatoon, SK",
                        extras: ["Java, C#, C, ASP.Net Core" ,
                            "Excel" ,
                            "HTML 5, CSS, JS, PHP, Vue.js" ,
                            "SQL, Oracle PL-SQL" ,
                            "Computer Networking" ,
                            "Installing and Configuring Operating Systems" ,
                            "Windows Server 2016 – 2019" ,
                            "SCCM" ,
                            "Linux – Administration and Scripting"]
                    },

                    {
                        id: 2,
                        year: 2010,
                        course: "Grade 12 Diploma",
                        where: "Carlton Comprehensive High School, Prince Albert, SK",
                        extras:[ "Calculus" ,
                            "Auto CAD engineering and architecture" ,
                            "Electrical A30" ,
                            "Biology Chemistry and Physics 30"]
                    }
                ]


            }
        },
    }
</script>

<style scoped>

</style>