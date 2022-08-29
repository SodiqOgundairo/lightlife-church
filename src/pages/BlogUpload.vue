<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <div class="col-md-6 offset-md-4">
          <div class="card shadow-lg">
            <p class="h1 card-header">
              LLC <span class="head"> Blog Upload</span>
            </p>
            <div class="card-body">
              <form action="" @submit.prevent="onSubmit()">
                <div class="form-group mt-3">
                  <label class="form-label" for="title">Title</label>
                  <input
                    class="form form-control"
                    type="text"
                    name="title"
                    v-model.trim="title"
                  />
                </div>
                <div class="form-group">
                  <label class="form-label" for="description"
                    >Description</label
                  >
                  <textarea
                    class="form form-control"
                    type="description"
                    name="description"
                    rows="3"
                    v-model.trim="description"
                  >
                  </textarea>
                </div>
                <div class="form-group mt-3">
                  <label class="form-label" for="Image"
                    >Upload Cover Image Image</label
                  >
                  <input
                    accept="image/*"
                    class="form form-control"
                    type="file"
                    data-default-file="../"
                    id="imgInp"
                    @change="uploadImg"
                  />
                </div>
                <div class="my-3">
                  <button
                    type="submit"
                    class="btn btn-lg btn-outline-success shadow-none"
                  >
                    UPLOAD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BlogUpload-vue",

  data() {
    return {
      title: "",
      description: "",
      // image: "",
    };
  },

  methods: {
    async onSubmit() {
      let upload = await axios.post(
        "https://lightlife-church-default-rtdb.firebaseio.com/blog.json",
        {
          title: this.title,
          description: this.description,
          // image: this.image,
        }
      );
      console.log(upload);
      // this.$router.replace('/post')
    },

    uploadImg(event) {
      this.$emit('update:modelValue', event.target.files[0])
    }
  },
};
</script>

<style></style>
