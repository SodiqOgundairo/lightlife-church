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
// import axios from "axios";
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { LOADING_SPINNER_SHOW_MUTATION, LOGIN_ACTION } from '@/store/storeconstants';
import { mapActions, mapMutations } from 'vuex';
import SignUpValidations from '@/services/SignUpValidations';

export default {
  name: "Signin-vue",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {

    
    ...mapActions('auth', {
      login: LOGIN_ACTION
    }),

    
    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION
    }),

    async onLogin() {
      // check validation by checking the services folder for SignUpValidations.js and Validations.js files

      let validations = new SignUpValidations(this.email, this.password);

      this.errors = validations.checkValidations();

      if (this.errors.length) {
        return false;
      }
      this.error = ''


    this.showLoading(true)
      // login check 
      try{
        await this.login({email: this.email, password: this.password})} catch(e) {
          this.error = e
          this.showLoading(false)
        }
          this.showLoading(false)
          this.$router.push('/')
    },
  },
};
</script>

<style></style>
