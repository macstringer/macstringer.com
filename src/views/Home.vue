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
            Runs live demos and integration workshops for 16+ retailers including for Whole Foods and Meijer — closing 4 million-dollar deals. 
          </p>
          <p>
            Looking to leverage my technical and academic background in the startup space.
          </p>
          <!-- and understanding how the world works? -->
        </div>
        <div class="social-links">
          <a href="https://github.com/macstringer" target="_blank" rel="noopener" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/macstringer/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:jmacstringer@gmail.com" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="social-icon">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>
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
.social-links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 36px;
  margin: 5%;
}
.social-icon {
  width: 38px;
  height: 38px;
  fill: #2e2e2e;
  transition: fill 0.2s;
}
.social-links a:hover .social-icon {
  fill: #555555;
}
</style>