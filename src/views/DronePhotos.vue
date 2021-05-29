<template>
    <div class="container">
        <img class="dronePhoto" src="../assets/clouds.jpg" alt="dronePhoto">
        <img class="dronePhoto" src="../assets/tcrock.jpg" alt="dronePhoto">
        <img class="dronePhoto" src="../assets/tcstella.jpg" alt="dronePhoto">
        <img class="dronePhoto" src="../assets/tenting.jpg" alt="dronePhoto">
        <img class="dronePhoto" src="../assets/wanny.jpg" alt="dronePhoto">
    </div>
</template>

<script>
export default {
    data () {
      return {
          photoNames: ["clouds","tcrock","tcstella","tenting","wanny"],
          photoSource: "../assets/clouds.jpg",
          debugMode: false
      }
  },
  methods: {
  },
    mounted () {
        
  }
}

/*
I tried and failed here to implement some vue logic that would take the name of the file in the photoNames list, 
convert it to an image source link, and use that as a prop in an images v-for. 

I should try again.
*/
</script>

<style>
.dronePhoto {
    max-width: 90%;
    margin-left: 5%;
}
</style>