<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="mt-5 mb-5">
          <h1>A Price To Suit Everyone</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <h2>$40</h2>
          <p class="mt-2">UI Design Kit</p>
          <p class="p3">See, One price. Simple.</p>
          <button class="btn btn-success mb-5">Purchase Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Price",
};
</script>

<style scoped>
.container {
  background-image: url("../assets/Rect.png");
  height: 550px;
  margin-top: 50px;
}

h1 {
  font-family: Roboto;
  height: 36;
  color: #091133;
  margin-top: 150px;
  text-align: center;
}

p {
  text-align: center;
  width: 16;
  font-family: Roboto;
  color: #222f65;
  margin-top: 20px;
  text-decoration: bold;
}
h2 {
  text-align: center;
  margin-top: 50px;
  font-family: Roboto;
  color: #6f7cb2;
  width: 50;
}

.p3 {
  color: #5d6970;
  margin-top: 10px;
  width: 14;
}
</style>
