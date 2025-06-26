<!-- NavBar.vue -->
<template>
  <div id="nav" :class="navThemeClass">
      <router-link :to="{ name: 'Home' }">jmac</router-link> 
      <router-link :to="{ name: 'cv' }">cv</router-link>
      <router-link :to="{ name: 'spotify' }"> spotify </router-link>
    </div>
</template>

<script>
export default {
    name: "navbar",
    computed: {
        navThemeClass() {
            const routeName = this.$route.name;
            return `nav-theme-${routeName?.toLowerCase() || 'default'}`;
        }
    }
}
</script>

<style>
#nav {
    font-size: 25px;
    text-decoration: none;
    padding: 30px;
    text-align: center;
    transition: all 0.3s ease; /* Smooth transitions */
}

#nav a {
    text-decoration: none;
    margin: 1.75%;
    transition: color 0.3s ease;
}

#nav a.router-link-exact-active {
    font-weight: bold;
}

/* Default theme (Home, CV, etc.) */
#nav.nav-theme-default,
#nav.nav-theme-home,
#nav.nav-theme-cv {
    background-color: #f5f5f5;
    color: #2e2e2e;
}

#nav.nav-theme-default a,
#nav.nav-theme-home a,
#nav.nav-theme-cv a {
    color: #2e2e2e;
}

#nav.nav-theme-default a:hover,
#nav.nav-theme-home a:hover,
#nav.nav-theme-cv a:hover {
    color: #555;
}

/* Spotify theme - dark mode */
#nav.nav-theme-spotify {
    background-color: #121212;
    color: #f5f5f5;
    border-bottom: 1px solid #333;
}

#nav.nav-theme-spotify a {
    color: #bbbbbb;
}

#nav.nav-theme-spotify a:hover {
    color: #1db954; /* Spotify green */
}

#nav.nav-theme-spotify a.router-link-exact-active {
    color: #1db954; /* Spotify green for active link */
    font-weight: bold;
}
</style>