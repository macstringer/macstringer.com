<template>
    <div class="container">
        <div class="title">
            <h1> What I'm Listening To </h1>
        </div>

        <div class="contentMain">
            <div class="aSong" v-for="(song, i) in spotifyLinks" :key="i">
                <iframe :src="song" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
      return {
          spotifyLinks: ["https://open.spotify.com/embed/playlist/5vHqiIbE0GLElmib12Eixo", "https://open.spotify.com/embed/playlist/24JE7jsike2IM3TOHHdUAq",
                         "https://open.spotify.com/embed/album/6cx4GVNs03Pu4ZczRnWiLd","https://open.spotify.com/embed/playlist/2SZTBfmiB1WY1TGp1OKHJK",
                         "https://open.spotify.com/embed/playlist/5ybJnbFLxJBmEotARGlzKI", "https://open.spotify.com/embed/playlist/1xpRB92bJjrQOU2ziuuZYz",
                         "https://open.spotify.com/embed/playlist/4p2adTLzdpubjrlZc75odB", "https://open.spotify.com/embed/playlist/2OFAMXaly5l96MLyNjQDGa",
                         "https://open.spotify.com/embed/playlist/2S9EdH6jm3vnwxOIVhitBX", "https://open.spotify.com/embed/playlist/5ybJnbFLxJBmEotARGlzKI", 
                         "https://open.spotify.com/embed/playlist/7g7SLadPhk6h6d2CzhkjrR", "https://open.spotify.com/embed/playlist/0TKwIPo07zZT8e7g3FEmMs"]
      }
    }
    // beforeCreate () {
    //     // console.log("before create");
    //     document.querySelector('body').setAttribute('style', 'background:#121212; color:#f5f5f5;')
    //     document.querySelectorAll('#nav').setAttribute('style', 'color:#bbbbbb;')
    // },
    // beforeDestroy () {
    //     document.querySelector('body').setAttribute('style', 'background:white; color:#2e2e2e;') 
    //     document.querySelector('#nav').setAttribute('style', 'color:#2e2e2e;')
    // }
}
</script>

<style>
.title {
    text-align: center;
}
.container {
    height: 100%;
    padding-top: 1%;
    padding-bottom: 30%;
    background:#121212; 
    color:#f5f5f5;
}
.contentMain {
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.aSong {
    position: relative;
    padding: 1%;
}
</style>