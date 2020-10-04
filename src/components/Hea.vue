<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img alt="Vue logo" width="30" height="30" src="../assets/logo.png" />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item primary">
          <a class="nav-link" href="#">Project</a>
        </li>
        <li class="nav-item mr-2">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"
            >About</a
          >
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 mr-auto">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <button type="button" class="btn btn-light mr-2">Sign In</button>
      <button type="button" class="btn btn-success">Sign Up</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Hea",
};
</script>

<style></style>
