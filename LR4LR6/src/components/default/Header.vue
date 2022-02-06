<template>
<!--  В данном хэдере существует навбар, с помощью которого производится роутинг в зависимости нужной нам страницы-->
  <b-navbar  class="border x  nav_color ">
    <div class="ml-5">
      <b-navbar-nav class="d-flex align-items-center">
        <b-nav-item class="d-flex justify-content-center align-items-center logo" :to="{name: 'main'}">
          <span class="nav__font2 logo__font">home</span>
        </b-nav-item>
        <b-nav-item  :to="{name: 'add'}">
          <span class="nav__font">Новое резюме</span>
        </b-nav-item>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>


<style>
/* Header */
/* Navbar */
.nav_color{
  background: #d3c4c4;
  height: 80px;
}

.nav__font {
  font-weight: 400;
  font-size: 16px;
  color: rgb(7, 7, 7);
}
.nav__font:hover {
  color: #bd0808;
}
.nav__font2 {
  font-weight: 400;
  font-size: 16px;
  color: rgb(255, 255, 255);
}
.nav__font2:hover {
  color: #bd0808;
}

.logo {
  width: 70px;
  height: 60px;
  background: #330283;
  border-radius: 50%;
}
.logo a{
  margin-bottom: 5px;
}
.logo__font {
  font-size: 25px;
}
</style>