<template>
  <div class="container-fluid mt-5 bg-light">
    <div class="row">
      <div class="col">
        <p class="p4 mt-5">©2020 Mencoba Vue</p>
      </div>
      <div class="col">
        <p class="p4 mt-5">
          <img class="img-flu" src="../assets/logo.png" />
        </p>
      </div>
      <div class="col">
        <p class="btn btn-success mt-5">
          PURCHASE ORDER
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.p4 {
  margin-top: 20px;
  color: #939ea4;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
  size: 14;
  margin-right: auto;
}

.img-flu {
  height: 50px;
}
</style>
