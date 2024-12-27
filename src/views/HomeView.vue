<template>
  <div class="bg-none">
    <Hero />
    <Section1 />
    <Section2 />

    <div v-if="showModal" class="modal fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-75 transition-all duration-300 ease-in-out">
      <div class="modal-dialog mx-auto max-w-md px-4 py-8 rounded-lg bg-white shadow-lg">
        <div class="modal-content border-0">
          <div class=" modal-header border-0 flex justify-between items-center">
            <p class="h4 modal-title accent fw-bold">150 DAYS FASTING AND PRAYER BULLETIN</p>

            <button type="button" @click="showModal = false" class="close" aria-label="Close modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body flex flex-col gap-4">
            <img src="../assets/img/150DaysPrayerBook.jpg" class="img-fluid rounded-lg self-center" alt="PJ" />
            <a :href="'/files/LLC150DaysFastingAndPrayerBook.pdf'" download class="mt-3 btn-theme-gradient" @click="showModal = false">Download now</a>
            <div class="text-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Section1 from "../components/Section1.vue";
import Section2 from "../components/Section2.vue";

export default {
  name: "HomeView",

  components: { Hero, Section1, Section2 },

  data() {
    return {
      showModal: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.showModal = false; //uncomment below to make modal active again
      // this.showModal = true;
    }, 500); // 5 seconds delay
  },

  methods: {
    closeModal(event) {
      // Check if clicked element is not the modal itself
      if (event.target !== event.currentTarget) return;
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.bg-none {
  background: none !important;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  width: 100%;
  max-width: 400px; /* Adjust for larger screens if needed */
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.modal-title {
  margin: 0;
}

.close {
  border: none;
  background: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: #333;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .modal-dialog {
    max-width: 300px; /* Adjust for smaller screens */
  }
}
</style>
