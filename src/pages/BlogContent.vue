<template>
    <main>
        <article>
            <header class="pt-5">
                <div class="text-center bgg">
                    <div class="bg-dark bg-opacity-50 py-5">
                        <p class="h1 text-white fs-bolder">
                            Testimonies
                        </p>
                    </div>
                </div>
            </header>
            
            <div class="m-4">

                <router-link to="/upload" class="btn btn-secondary " >
                Submit your yestimony
            </router-link>
        </div>
            
            <section class=" row my-3 gap-3">
                <div class="container-fluid">
              
         
                    <div class="row mx-2 md:mx-4">
                   
                                

                        <div class="col-md-6 my-3 m-auto" v-for="testimony in testimonies" :key="testimony.id">
                            <div class="card" >
                               <div class="card-header px-3 ">
                                <p class="card-title fw-bold">{{ testimony.name }}</p> 
                               </div>
                               <div class="card-body" > 
                                {{ testimony.content }}
                               </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </article>
    </main>
</template>

<script>
import axios from 'axios';

export default {
    name: "BlogContent-vue",

    data() {
        return{
            testimonies: []
        }
    },

    mounted() {
        axios.get('https://lightlifechurch.com/retrieveTestimony.php')
        .then((response) => {
            this.testimonies = response.data;
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

</script>

<style  scoped>
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

.card {
  height: 100%;
  overflow-y: auto;
}

</style>