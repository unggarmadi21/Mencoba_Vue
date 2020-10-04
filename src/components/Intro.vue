<template>
  <div id="intro" class="container">
    <div class="row">
      <div class="col">
        <h1>Introduce Your Product Quickly & Effectively</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </p>
        <button type="button" class="btn btn-light">Purchase UI Kit</button>
        <button type="button" class="btn btn-success">Learn More</button>
      </div>
      <div class="col">
        <img class="img-fluid" src="../assets/gambar 1.png" alt="Someone" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style scoped>
.container {
  margin-top: 100px;
  font-family: Roboto;
  text-align: left;
}
h1 {
  color: #091133;
  size: 50;
}
button {
  text-align: center;
  height: 36;
  margin-right: 10px;
  margin-top: 10px;
}
p {
  text-align: left;
  margin-top: 10px;
  size: 18;
}
img {
  height: 150;
  width: 150;
}
</style>
