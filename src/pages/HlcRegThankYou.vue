<template>
    <div class=" my-3 text-center fat">
        <h1>Thank you for registering for <span class="d-block accent-2"> <b>Higher Life Conference 2025!</b> </span></h1>
        <p>
        We will contact you with further details shortly.
        </p>

        <p class="bg-theme-gradient text-white contact md:w-25 m-auto font-bold py-3 px-4">For more information you can reach us at <a href="mailto:info@lightlifechurch.com" class="text-white">info@lightlifechurch.com</a> </p>
    </div>
</template>
<script>
export default {
    name: 'HlcRegThankYou',
    data() {
        return {
        };
    },
    methods: {
    },
    mounted() {
    }
};
</script>

<style>
.fat {
    padding-block: 200px;
}

@media (max-width: 768px) {
  .contact {
    width: 100vw;
    padding: 0;
  }
  }
</style>