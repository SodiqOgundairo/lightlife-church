<template>
  <footer class="bg-black">
    <div class="row bg-dark p-5 text-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row ">
              <div class="col-md-3 my-4 m-auto">
                <img
                  src="../assets/img/llc.png"
                  alt=""
                  class="img-fluid logo mb-2"
                />
                <p class="h4 accent">LIGHTLIFE CHURCH</p>
                <small class="fw-light fst-italic"
                  >1-2 Funso Adeogun Street, off Quarry Road, Abeokuta, Ogun
                  State</small
                >
              </div>

              <div class="col-md-2 my-4 m-auto">
                <p class="h5">USEFUL LINKS</p>
                <ul class="list-group">
                  <li class="list-unstyled">
                    <router-link
                      to="/about"
                      class="nav-link text-white fw-light"
                      >About LLC
                    </router-link>
                  </li>
                  <li class="list-unstyled">
                    <router-link
                      to="/daily-light-devotional"
                      class="nav-link text-white fw-light"
                      >DLD
                    </router-link>
                  </li>
                  <li class="list-unstyled">
                    <router-link
                      to="/programme"
                      class="nav-link text-white fw-light"
                      >Upcoming Programmes
                    </router-link>
                  </li>
                  <li class="list-unstyled">
                    <router-link
                      to="/support"
                      class="nav-link text-white fw-light"
                      >PJ's Teachings
                    </router-link>
                  </li>
                  <!-- <li class="list-unstyled">
                    <router-link
                      to="/support"
                      class="nav-link text-white fw-light"
                      >Support
                    </router-link>
                  </li> -->
                </ul>
              </div>
              
              <div class="col-md-4 my-4 m-auto">
                <div class="my-2">
                  <p class="h5">JOIN OUR DAILY LIGHT DEVOTIONAL</p>
                  <input type="email" class="form-control" placeholder="email here"> 
                  <router-link to="/ss" class="btn btn-sm bg-accent my-2">Subscribe</router-link>
                  <!-- <button class="btn btn-sm bg-accent my-2">Subscribe</button> -->
                </div>
                <div class="my-2">
                  <p class="h5">CONNECT GROUPS</p>
                  <li class="list-unstyled">
                    <router-link
                      to="/"
                      class="nav-link text-white fw-light"
                      >L.O.V.E Ladies
                    </router-link>
                    <!-- <router-link
                      to="/"
                      class="nav-link text-white fw-light"
                      >God's Guys
                    </router-link> -->
                    <!-- <router-link
                      to="/"
                      class="nav-link text-white fw-light"
                      >Light Life Messages
                    </router-link> -->
                    <a class="nav-link text-white fw-light text-decoration-none" href="https://chat.whatsapp.com/LkUA7FE81sM8Tst9mPurRT" target="_blank" rel="noopener noreferrer">God's Guys</a>
                    <a class="nav-link text-white fw-light text-decoration-none" href="https://t.me/lightlifechurch" target="_blank" rel="noopener noreferrer">LightLife Messages</a>
                    <!-- <router-link
                      to="/"
                      class="nav-link text-white fw-light"
                      >Mixlr
                    </router-link> -->
                    <!-- <router-link
                      to="/"
                      class="nav-link text-white fw-light"
                      >Facebook Live
                    </router-link> -->
                  </li>
                </div>
              </div>

              <div class="col-md-2 my-4 m-auto">
              <div class="mb-4">
              <p class="h5">CONTACT US </p>
              <a href="tel: +2348165271030" class="text-white text-decoration-none d-block"><small> <i class="fa-solid fa-phone me-2"></i> +234(0)-816-527-1030</small> </a>
              <a href="mail:info@lightlifechurch.com" class="text-white text-decoration-none d-block"><small> <i class="fa-solid fa-envelope text-white me-2"></i>info@lightlifechurch.com</small></a>
              </div>
                <div class="my-2">
                  <p class="h5">FOLLOW US</p>
                  <!-- <a href="">
                    <i class="fa-brands fa-twitter text-white-50 mx-2"></i
                  ></a> -->
                  <a href="https://web.facebook.com/LightLifeChurchNG/?_rdc=1&_rdr" target="_blank" rel="noopener" >
                    <i class="fa-brands fa-facebook text-white-50 mx-2"></i>
                  </a>

                  <a href="https://www.youtube.com/@lightlifechurch" target="_blank" rel="noopener" 
                    ><i class="fa-brands fa-youtube text-white-50 mx-2"></i
                  ></a>

                  <a href="https://www.instagram.com/lightlifechurch/" target="_blank" rel="noopener" 
                    ><i class="fa-brands fa-instagram text-white-50 mx-2"></i
                  ></a>

                  <a href="https://t.me/lightlifechurch" target="_blank" rel="noopener" 
                    ><i class="fa-brands fa-telegram text-white-50 mx-2"></i
                  ></a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-light text-center m-auto  py-2 m-auto opacity-50">
      <!-- <div class="col-md-10 "> -->
        <div class="col-md-4 text-center m-auto">
          <small>@LightLife Ministries {{thisYear}}. All rights reserved </small>
        </div>
        <div class="col-md-4 text-center m-auto">
          <small
            >Designed with ❤ by
            <span>
              <a href="https://twitter.com/gr8QM__" class="text-decoration-none" target="_blank" rel="noopener"
                >gr8QM  </a
              >  </span
            >
          </small>
      </div>
        <!-- </div> -->
    </div>
  </footer>
</template>

<script>
// import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
  name: "Footer-vue",

  setup() {
    let date = new Date()
    
    const thisYear = computed(() => {
      return `${date.getFullYear()}`
      // return `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`
    })
 
    return {
      thisYear,
    }
  }
}

</script>

<style scope>
.logo {
  width: 20%;
}
</style>
