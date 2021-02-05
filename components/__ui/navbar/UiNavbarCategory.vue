<template>
  <div v-if="isShow" class="ui-navbar-category">
    <div class="ui-navbar-category__triangle"></div>
    <ul>
      <li>
        <a href="#">Action</a>
      </li>
      <li>
        <a href="#">Horror</a>
      </li>
      <li>
        <a href="#">Commedy</a>
      </li>
      <li>
        <a href="#">Drama</a>
      </li>
      <li>
        <a href="#">Romantic</a>
      </li>
      <li>
        <a href="#">Colosal</a>
      </li>
      <li>
        <a href="#">Thriller</a>
      </li>
      <li>
        <a href="#">Adventure</a>
      </li>
      <li>
        <a href="#">Fantasy</a>
      </li>
      <li>
        <a href="#">Animation</a>
      </li>
      <li>
        <a href="#">Family</a>
      </li>
      <li>
        <a href="#">Others</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ui-navbar-category {
    background-color: #1da1f2;
    position: absolute;
    top: 125px;
    height: 75px;
    width: 100%;
    left: 0;
    display: flex;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      padding: 0;
      width: 100%;
      &::before {
        content: '\25B2';
        color: #1da1f2;
        position: absolute;
        top: -9px;
        right: calc(28%);
        font-size: 10px;
        transform: scaleX(3);
      }
      li {
        a {
          text-decoration: none;
          color: #fff;
          font-size: 24px;
        }
      }
    }
  }
</style>
