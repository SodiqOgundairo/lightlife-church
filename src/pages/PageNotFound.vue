<template>
    <div class="container fat m-auto text-center">
        <p class="h1 text-danger  fs-extra">OMG! 😢 </p>
        <p class="h4 fst-italic">The page you're looking is not available. Please check back later </p>
        <p> Let's get you back home <router-link to="/" class="nav-link d-inline" aria-current="page">Home</router-link></p>
        
    </div>
</template>

<script>
export default {
    name: 'PageNotFound-vue',
}
</script>

<style>
.fat {
    padding-block: 200px !important;
}

</style>