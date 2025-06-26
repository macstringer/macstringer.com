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
          spotifyLinks: ["https://open.spotify.com/embed/playlist/37i9dQZF1FoCg2QTi4nwR1", "https://open.spotify.com/embed/playlist/37i9dQZF1Fag9AiERcbpcL",
                         "https://open.spotify.com/embed/album/7I42wZ3TW926k1DXrotD1M", "https://open.spotify.com/embed/album/6jQfrdXytY9eCPVul96Oc6",
                         "https://open.spotify.com/embed/album/6Wpawdx7fSuBAKY0t793fx", "https://open.spotify.com/embed/playlist/5LYs2SDWXwxa1GPg8rH4AQ",
                         "https://open.spotify.com/embed/playlist/5WMPo5ELwaXnBaESqdwYXC", "https://open.spotify.com/embed/playlist/3dgRB5bRoXlgKJ259Ibh8L"
          ]
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

