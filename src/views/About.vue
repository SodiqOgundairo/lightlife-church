<template>
<article>
  <section class="pt-5">
    <div class="text-center bgg">
      <div class="bg-dark bg-opacity-50 py-5">
        
        <p class="h1 text-white fs-extra">
          <span class="head"> About</span> LLC
        </p>
      </div>
    </div>

    <div class="row bg-white py-5">
      <div class="col-md-10 shadow-lg m-auto p-5">
        <div class="card border-1 border-theme p-5">
          <div class="row g-0">
            <div class="col-md-6 gap-3 d-flex align-self-center">
              <div class="card-body">

                <p class="card-title h2 accent border-bottom head">WHO WE ARE?</p>
                <p class="card-text">
                  LLC is not just a place, it is a people. It is a community where sinners, the destitute, the despondent, the rejected, the depressed, the confused, the hurting people can find salvation, love, hope joy, purpose, peace, acceptance and guidance. 
                  LLC is a place for growing and grooming believers into maturity through intentional teaching of the undiluted revelation of the Scripture. We believe that when Christ is unveiled, Saints are empowered. 
                  
                  It is a place of equipping and empowering believers for the end time global harvest and also preparing saints for the age to come. We believe that our core responsibility is not to raise members but disciples. 
              
            </p>
          </div>
          </div>
          <div class="col-md-6 d-flex">
            <img src="../assets/img/about.jpg"
            class="img-fluid"
            alt="About LLC
            "/>

          </div>
          <p class="card-text pt-3">
            
            It is the place your true worth and identity is revealed, valued and expressed. We believe that every believer has a purpose to be fulfilled here on earth. Therefore, we equip believers to succeed in their chosen career, take dominion and leadership in order to be earthly relevant.
            This is our mandate and we a resolved to make it happen with you on our team. 
          </p>
        </div>
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


.bgg {
  /* width: 100%;
  margin: 0px;
  padding: 0px; */
  background-image: url("../assets/img/about-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: lighten;
}

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
