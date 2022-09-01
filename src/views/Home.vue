<template>
  <div class="home">
    <div class="homePanels">
      <div class="pic">
        <img id="macpic" src="@/assets/macpic.jpg" alt="A picture of me">
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
            A creative and organized team player, who just graduated with a dual computer science / political science degree,
            I'm obsessed with adventure, maps, and figuring out how the world works. 
          </p>
          <p>
            I also like to think I'm good at understanding consumers.
          </p>
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