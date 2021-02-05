<template>
  <div class="ui-footer">
    <div class="ui-footer__item">
      <p class="ui-footer__item__title">Category</p>
      <ul class="ui-footer__item__list-link">
        <li>Horror</li>
        <li>Action</li>
        <li>Drama</li>
        <li>Commedy</li>
        <li>Romantic</li>
        <li>Colosal</li>
        <li>Thriller</li>
        <li>Others</li>
      </ul>
    </div>
    <div class="ui-footer__item">
      <p class="ui-footer__item__title">About Us</p>
      <ul class="ui-footer__item__list-link">
        <li>About Us</li>
        <li>FAQ</li>
        <li>Terms & Condition</li>
        <li>Our Partner Studio</li>
      </ul>
    </div>
    <div class="ui-footer__item">
      <p class="ui-footer__item__title">Follow Us</p>
      <ul class="ui-footer__item__list-link">
        <li class="ui-footer__item__list-link__socmed">
          <a href="#">
            <img :src="fb_icon" alt="Moovietime Facebook" />
            Movie.time
          </a>
        </li>
        <li class="ui-footer__item__list-link__socmed">
          <a href="#">
            <img :src="ig_icon" alt="Moovietime Instagram" />
            Movie.time
          </a>
        </li>
        <li class="ui-footer__item__list-link__socmed">
          <a href="#">
            <img :src="tw_icon" alt="Moovietime Twitter" />
            Movie.time
          </a>
        </li>
      </ul>
    </div>
    <div class="ui-footer__item">
      <p class="ui-footer__item__title">Get Our Apps</p>
      <ul class="ui-footer__item__list-link">
        <li class="ui-footer__item__list-link__app">
          <a href="#">
            <img :src="ios" alt="Download Movietime App in Apple Store" />
          </a>
        </li>
        <li class="ui-footer__item__list-link__app">
          <a href="#">
            <img :src="playstore" alt="Download Movietime App in Playstore" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        playstore: require('./app.png'),
        ios: require('./ios.png'),
        fb_icon: require('./fb_icon.png'),
        ig_icon: require('./ig_icon.png'),
        tw_icon: require('./tw_icon.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ui-footer {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    background-color: #1da1f2;
    color: #ffffff;
    padding: 2vw;
    &__item {
      flex-basis: 20%;
      flex-grow: 0;
      display: flex;
      flex-direction: column;
      &__title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 0.5em;
      }
      &__list-link {
        list-style: none;
        font-size: 20px;
        padding: 0;
        &__app {
          a {
            img {
              width: 150px;
            }
          }
        }
        &__socmed {
          a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #ffffff;
            &:hover {
              text-decoration: underline;
            }
          }
          img {
            width: 35px;
            margin-right: 20px;
          }
        }
        li {
          margin: 5px 0;
        }
      }
    }
  }
</style>
