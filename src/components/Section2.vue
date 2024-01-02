<template>
  <article>

    <section>
      <div class="row bg-white py-5">
        <div class="col-md-8 py-5 py-sm-2 m-auto">
          <div class="card border-0 shadow-lg rounded-0">
            <div class="row g-0">
              <div class="col-md-6 d-flex bg-theme">
                <img
                  src="../assets/img/dld.jpg"
                  class="img-fluid"
                  alt="PJ"
                />
              </div>
              <div class="col-md-6 gap-3 d-flex align-self-center">
                
                  <div class="card-body">
                <div>
                  <p class="h5 card-title">DAILY LIGHT DEVOTIONAL</p>
                  <p class="card-text">
                    How you start your day determines the outcome. Start your day with the right words as inspired by the Holy Spirit. You will definitely be blessed by this powerful devotionals.
                  </p>
                  
                </div>
                  <router-link to="/daily-light-devotional" class="my-3 d-block btn-theme"
                  > Read Today's Devotional
                  </router-link>
                  
                  <router-link to="/post" class="  d-block btn-accent-2"
                  > Get DLD of the month
                </router-link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="row bg-accent py-5">
        <div class="col-md-8 py-5 m-auto">
          <div class="card border-0 shadow-lg rounded-0">
            <div class="row g-0">
              <div class="col-md-6 gap-3 d-flex align-self-center">
                <div class="card-body">
                  <p class="h5 card-title">PJ's Teachings</p>
                  <p class="card-text">
                    Get the messages from Pastor Juwon Owolabi right from here
                  </p>
                                    
                  <router-link to="/post" class="  d-block btn-accent-2"
                  > Get PJ's Teachings
                </router-link>
                </div>
              </div>
              <div class="col-md-6 d-flex bg-accent">
                <img
                  src="../assets/img/teachings.jpg"
                  class="img-fluid"
                  alt="PJ"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "AboutHome",

  components: {},

  setup() {
    return {};
  },
};
</script>

<style scoped></style>
