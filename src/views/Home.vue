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
            Forward deployed engineer who scopes, builds, and demos enterprise software. 
          </p>
          <p>
            3+ years shipping full stack projects (TS/Vue, Java, Python, Docker) integrating with national customers and replacing legacy solutions. 
          </p>
          <p>
            Co-architected Toshiba's first fuel &amp; convenience product opening a $1B vertical. 
            Runs live demos and integration workshops for 16+ retailers including Whole Foods and Meijer — closing 4 million-dollar deals. 
          </p>
          <p>
            Looking to leverage my technical and academic background in the startup space.
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