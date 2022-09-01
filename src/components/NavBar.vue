<template>
  <div id="nav">
      <router-link :to="{ name: 'Home' }">jmac</router-link> 
      <router-link :to="{ name: 'cv' }">cv</router-link>
      <router-link :to="{ name: 'projects' }">projects</router-link>
      <router-link :to="{ name: 'dronePhotos' }"> drone photography </router-link>
      <router-link :to="{ name: 'spotify' }"> spotify playlists </router-link>
    </div>
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style>
#nav {
    font-size: 25px;
    text-decoration: none;
    padding: 30px;
    text-align: center;

}

#nav a {
    text-decoration: none;
    margin: 1.75%;
}

#nav a.router-link-exact-active {
  font-weight: bold;
}

</style>