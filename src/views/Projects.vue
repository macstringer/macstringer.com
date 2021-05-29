<template>
    <div class="content">
        <div class="head">
            <button class="testButton" v-if="debugMode" v-on:click="printData()">Print Data</button>
            <h1> Projects Page </h1>
            <p> This page displays some of the computer science and web projects that I have completed. </p>
        </div>
        
        <div class="contentMain" v-for="(project, i) in projects" :key="i">

            <projectExample
            :name="project.name"
            :link="project.link"
            :date="project.date"
            :description="project.description"
            :skills="project.skills"
            :gitHub="project.gitHub"
            >
            </projectExample>

        </div>
    </div>
</template>

<script>
import projectExample from '../components/projectExample.vue'
const { exampleStore } = require('../projectData.js');


export default {
  components: { projectExample },
  data () {
      return {
          projects: {},
          debugMode: false
      }
  },
  methods: {
    printData () {
        console.log("Printing projects to console:")
        console.log(this.projects);
    }
  },
  async mounted () {
    this.projects = exampleStore;
    this.printData;
  }
}
</script>

<style scoped>

h1 {
  color: #2e2e2e;
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, sans-serif;
  font-size: 2.25rem;
  text-align: center;
}
h2 {
  color: #2e2e2e;
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, sans-serif;
  font-size: 1.5rem;
}
h3 {
  color: #929292;
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, sans-serif;
  font-size: 1.1rem;  
  font-weight: normal;
}

p {
  font-size: 1.25rem;
  font-family: “Neue Haas Grotesk Display Pro”, “Helvetica Neue”, Helvetica, sans-serif;
  color: #2e2e2e;
  line-height: 1.75rem;
  margin-bottom: 0%;
  margin-top: 1%;
}

.contentMain {
    color: #2e2e2e;
    padding: 5%;
}
.content {
    justify-content: center;
}

.head {
    max-width: 60%;
    text-align: center;
    margin-left: 20%;
}

.element {
    margin-bottom: 3%;
    justify-content: left;
    background-color: #e5e4e2;
    border: 2px solid #696969;
    height: 800px;

    display: flex;
}
.siteWindow {
    width: 70%;
    height: 100%;
}
.description {
    width: 30%;
    height: 100%;
    text-align: center;

    background-color: #e5e4e2;
}
.description > h2 {
    font-size: 2rem;
}
.description > p {
    font-size: 0.75rem;
    padding: 5%;
}
.descFlag {
    background-color: #f5f5f5;
    margin-right: 5%;
    margin-top: 5%;
    padding: 1%;

    border-right: 5px solid #696969;
    border-bottom: 5px solid #696969;

}
.card {
    padding-bottom: 3%;
    padding-left: 3%;
}

a {
    text-decoration: none;
}

</style>