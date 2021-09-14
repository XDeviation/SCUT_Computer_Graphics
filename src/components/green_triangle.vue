<template>
  <div>
    <canvas id="greenTriangle"> </canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initCancas();
  },
  methods: {
    initCancas() {
      let canvas = document.getElementById("greenTriangle");
      let ctx = canvas.getContext("2d");
      ctx.beginPath();
      var height = 200 * Math.sin(Math.PI / 3);
      ctx.moveTo(100, 0);
      ctx.lineTo(200, height);
      ctx.lineTo(0, height);
      ctx.fillStyle = "#00ff00";
      ctx.fill();
    },
  },
};
</script>

<style>
</style>