<template>
<article>
  <section class="pt-5">
    <div class="text-center py-5 bg-drk bgg">
      <p class="h1 text-white fs-extra">
        <span class="head"> About</span> LLC
      </p>
    </div>

    <div class="row bg-white py-5">
      <div class="col-md-10 shadow-lg m-auto p-5">
        <div class="card text-center border-1 border-theme p-5">
          <p class="card-title fs-extra accent border-bottom head">Who we are?</p>
          <p class="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ipsa
            natus minima qui praesentium hic odio placeat. Maiores nam ad
            aliquid nulla voluptas autem molestiae quas! Perferendis blanditiis
            maxime quia!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            nobis voluptatum ad porro magni dicta modi sit alias, reprehenderit
            voluptatibus nihil rerum nam, fugiat consequuntur, accusamus saepe
            atque dolores maiores.
          </p>
          <p class="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ipsa
            natus minima qui praesentium hic odio placeat. Maiores nam ad
            aliquid nulla voluptas autem molestiae quas! Perferendis blanditiis
            maxime quia!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            nobis voluptatum ad porro magni dicta modi sit alias, reprehenderit
            voluptatibus nihil rerum nam, fugiat consequuntur, accusamus saepe
            atque dolores maiores.
          </p>
        </div>
      </div>
    </div>
  </section>
  
    <section>
      <div class="row bg-theme py-5">
        <div class="col-md-8 py-5 m-auto">
                  <p class="h5 card-title fs-extra text-white-50 text-center head">Meet Our Pastor</p>
          <div class="card border-0 shadow-lg rounded-0">
            <div class="row g-0">
              <div class="col-md-6 d-flex justify-content-center">
                <img
                  src="../assets/img/juwon.png"
                  class="img-fluid rotate"
                  alt="PJ"
                />
              </div>
              <div class="col-md-6 d-flex align-self-center">
                <div class="card-body ">
                  <p class="h5 card-title fs-1 accent head"> Pastor Juwon Owolabi</p>
                  <p class="card-text">
                    <!-- <span class="accent fw-bold"> Pastor Juwon Owolabi </span>  -->
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia nihil, ab nisi, quibusdam eligendi iusto ut
                    impedit, aliquid at voluptatum reiciendis nam praesentium!
                    Ducimus nostrum, iure magnam dignissimos tempore error?
                    
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia nihil, ab nisi, quibusdam eligendi iusto ut
                    impedit, aliquid at voluptatum reiciendis nam praesentium!
                    Ducimus nostrum, iure magnam dignissimos tempore error?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Ministers />
    </article>
</template>

<script>
import Ministers from '@/components/Ministers.vue';
export default {
    name: "About-vue",
    components: { Ministers }
};
</script>

<style scoped>
/*.card-title::before {
  content: "";
  position: absolute;
  border-top: 2px solid #562250;
  width: 40px;
  top: 25px;
} */

.rotate {
    -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

</style>
