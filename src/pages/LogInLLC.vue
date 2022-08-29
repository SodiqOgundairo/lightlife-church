<template>
  <div class="container my-5 p-5">
    <div class="row mt-5">
      <div class="card shadow-sm border-0 shadow-lg border-top border-5">
        <div class="card-header p-4">
          <h5 class="card-title bg-light fw-bold accent">LLC Blog Update</h5>
          <h6 class="card-subtitle mb-2 text-muted fst-italic">
            Please fill signin to continue
          </h6>
        </div>
      </div>

      <div class="card-body bg-accent bg-gradient mt-auto text-light">
        <form class="row g-3 has-validation my-3">
          <div class="col-md-6 m-auto">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model="email"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>

          <div class="col-md-6 m-auto">
            <label for="pwd" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              name="pwd"
              v-model="password"
              required
            />
            <div class="invalid-feedback">Check your password.</div>
          </div>
          <div class="col-12">
            <button class="btn btn-outline-light" @click.prevent="logIn">
              Submit form
            </button>
          </div>
        </form>
        
      </div>
    </div>
  </div>
</template>

<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LogInLLC-vue",

  data() {
    return {
      email: "",
      password: "",
    };
  },



  methods: {
    logIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          alert('skik')
          this.$router.push('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
          alert('error')
        });

      
      console.log (this.email + this.password)
    }
  },
};
</script>

<style></style>
