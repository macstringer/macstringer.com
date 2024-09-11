<template>
  <div class="home">
    <div class="homePanels">
      <div class="pic">
        <img id="macpic" src="@/assets/headshot.jpg" alt="A picture of me">
      </div>
      <div class="description">
        <div>
          <h1 class="spacer">Jeffrey "Mac" Stringer</h1>
        </div>
        <div>
          <p>
            Hi I'm Mac! Welcome to my website! 
          </p>
          <p>
            A creative and organized team player, with experience in development and customer relations.
            Studied computer science, political science, and Chinese.
          </p>
          <p>
            I'm obsessed with adventure, maps, and understanding new and complex systems. 
          </p>
          <!-- and understanding how the world works? -->
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
#macpic {
  max-width: 100%;
  clip-path: circle(40%);
}
.homePanels {
  display: flex;
  flex-wrap: wrap;

  background-color: #cecece;
  padding-top: 0%;
  padding-left: 10%;
  padding-right: 10%;

}
.homePanels > div {
  /*background-color: DodgerBlue;*/
  text-align: center;
}
.pic {
  min-width: 40%;
  max-width: 40%;
}
.description {
  max-width: 60%;
  flex-grow: 1;
  align-self: center
}

.description > div {
  margin: 5%;
}
</style>