<template>
  <div class="page-content">
    <div class="page-wrap">
      <h1>404</h1>
      <h2>not found</h2>
      <p>These aren't the Droids you're looking for ...</p>
      <router-link class="btn btn-lg btn-outline" to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* COLORS
https://www.google.com/design/spec/style/color.html#color-color-palette

Blue Grey
300 = #90A4AE;
500 = #607D8B;

=================================== */
.page-content {
  background: #607d8b;
  /* font-family: "Lato", serif; */
  color: #fff;
  margin: 0;
  padding: 0;
  position: absolute;
  min-height: 100vh;
  min-width: 100%;
}
.page-wrap {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}

p {
  font-size: 1em;
}

h2 {
  text-transform: uppercase;
}

/* MEDIA QUERIES
================================================== */

/* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
@media (min-width: 320px) {
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.5em;
  }
}

/* smartphones, Android phones, landscape iPhone */
@media (min-width: 480px) {
  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 1.75em;
  }
}

/* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
@media (min-width: 600px) {
  h1 {
    font-size: 4em;
  }
  h2 {
    font-size: 2em;
  }
}

/* tablet, landscape iPad, lo-res laptops ands desktops */
@media (min-width: 801px) {
  h1 {
    font-size: 5em;
  }
  h2 {
    font-size: 3em;
  }
}

/* big landscape tablets, laptops, and desktops */
@media (min-width: 1025px) {
  h1 {
    font-size: 6em;
  }
  h2 {
    font-size: 4em;
  }
}

/* hi-res laptops and desktops */
@media (min-width: 1281px) {
  h1 {
    font-size: 7em;
  }
  h2 {
    font-size: 5em;
  }
}
</style>