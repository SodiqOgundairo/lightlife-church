<template>
    <div class="container mt-5 p-3">
        <div id="loginModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">

                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="loginModalLabel">Login</h5>

                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>
                    <div class="modal-body">

                        <form>
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>

                                <input type="text" class="form-control" id="username" v-model="username">

                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>

                                <input type="password" class="form-control" id="password" v-model="password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn-theme" @click="login()">Login</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isAuthenticated">
            <div class="row">
                <div class="col">
                    <div class="col-md-8 mx-auto">
                        <div class="card shadow-lg ">
                            <p class="h1 card-header px-5 py-3 text-white">
                                SHARE YOUR TESTIMONY
                            </p>
                            <div class="card-body">
                                <form @submit.prevent="onSubmit()" method="post">
                                    <div class="form-group mt-3">
                                        <label class="form-label text-white" for="name">Your Name</label>
                                        <input class="form form-control" type="text" name="name" v-model="name" />
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label text-white" for="content">Your Testimony</label>
                                        <textarea class="form form-control" type="content" name="content" rows="5"
                                            v-model="content"> </textarea>
                                    </div>

                                    <div class="my-3">
                                        <button type="submit" class="btn btn-lg btn-outline-light shadow-none">
                                            Submit Testimony
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-5" v-else>
            <p class="h1">Hello Light 👋,
            </p>
            <p>Welcome to the testimony submission page, to submit your testimony, kindly login below. If you do not have
                the login credentials, please proceed to the protocols office for assistance.
            </p>


            <p>Thank you</p>
            <button type="button" class="btn-theme-gradient" data-bs-toggle="modal" data-bs-target="#loginModal">
                Login to submit testimony
            </button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "BlogUpload",

    data() {
        return {
            username: "",
            password: "",
            isAuthenticated: false,
        };
    },

    //     mounted() {
    //     // Show the login modal automatically
    //     document.getElementById("loginModal").classList.add("show");
    //   },

    methods: {
        async login() {
            // Check if the username and password match the intended user credentials
            if (this.username === "pj" && this.password === "Jesusislord!") {
                // Set the isAuthenticated variable to true
                this.isAuthenticated = true;

                // Hide the login modal
                document.getElementById("loginModal").classList.remove("show");
            } else {
                // Display an error message to the user
                alert("Invalid login credentials.");
            }
            document.querySelector('.modal-backdrop').classList.remove('show');
        },

        async onSubmit() {
            // Create a JSON object from the form data
            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("content", this.content);

            // Post the testimony data to the JSON file in the root folder
            await axios.post("https://lightlifechurch.com/testimony.php", formData);

            // Display a success message to the user
            alert("Testimony submitted successfully!");

            // Clear the form data
            this.name = "";
            this.content = "";
        },
    },
};
</script>
  
  
<style scoped>
.card {
    background-color: #2b002b !important;
}

.modal-backdrop.fade.show {
    opacity: 0;
    display: none;
}
</style>
  