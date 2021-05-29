<template>
  <div class="element">
    <div class="windowWindow">
        <iframe
        class="siteWindow"
        frameBorder="0"
        :src="this.link"
        >
        </iframe>
    </div>
    <div class="description">
      <a :href="this.link">
        <div class="descFlag">
          <h2>{{this.name}}</h2>
        </div>
        </a>
        <h3>{{this.date}}</h3>
        <p>
          {{this.description}}
        </p>

        <div class="skillsBlock">
          <div class="skillFlagTitle"> <h3> Skills Utilized: </h3> </div>
          <div class="skillFlag" v-for="(skill, j) in skills" :key="j"> <h3> {{skill}} </h3> </div>
        </div>

        <a :href="this.gitHub">
            <div class="gitHubLink">
                <img src="@/assets/gh_mark.png">
                <h2> GitHub Repo </h2>
            </div>
        </a>
    </div>
  </div>
</template>



<script>
export default {
  name: "projectExample",
  props: {
    name: String,
    date: String,
    description: String,
    link: String,
    gitHub: String,
    skills: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<style scoped>

.element {
  margin-bottom: 3%;
  justify-content: left;
  background-color: #e5e4e2;
  border: 2px solid #696969;
  height: 800px;

  display: flex;
  overflow: hidden;
}
.windowWindow {
    width: 100%;
}
.siteWindow {
  width: 100%;
  height: 100%;
}
iframe {
    overflow: hidden;
}

.description {
  position: relative;
  left: -15px;

  width: 30%;
  height: 100%;
  text-align: center;

  background-color: #e5e4e2;
}
.description > h2 {
  font-size: 2rem;
}
.description > p {
  font-size: 1rem;
  padding: 5%;
  background-color: #cecece;
}
.descFlag {
  background-color: #f5f5f5;
  margin-right: 5%;
  margin-top: 5%;
  padding: 1%;

  box-shadow: 2px 0px 5px 0px grey;
}
.skillsBlock{
    max-width: 100%;
}
.skillFlagTitle {
    max-width: 60%;
    margin-left: 20%;
    padding-top: 10%;
    padding-bottom: 5px;

    /* border-bottom: 3px solid black; */
}
.skillFlagTitle > h3 {
    padding: 0%;
    margin: 0%;
}
.skillFlag {
    background-color: #f5f5f5;
    max-width: 60%;
    margin-left: 20%;
    transform:skewX(-20deg);
    /* border: 1px solid grey; */
    margin-top: 3%;
    margin-bottom: 3%;

    box-shadow: 2px 0px 5px 0px grey;
}
.skillFlag > h3 {
    transform:skewX(20deg);
    margin: 0%;
    padding: 0%;
}
.gitHubLink {
    background-color: #f5f5f5;
    position: absolute;
    bottom: 5%;
    padding: 3%;

    line-height: 0;
    vertical-align: middle;

    box-shadow: 2px 0px 5px 0px grey;
}
.gitHubLink > img {
    height: 15%;
    width: 15%;
}
.gitHubLink > h2 {
    float: right;
    margin-right: 15%;
}

.card {
  padding-bottom: 3%;
  padding-left: 3%;
}

a, a:visited {
  text-decoration: none;
  color: #2e2e2e;
}

</style>