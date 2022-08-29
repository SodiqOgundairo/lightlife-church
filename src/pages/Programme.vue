<template>
  <main class="pt-5">
    <div class="text-center py-5 bg-drk bgg">
      <p class="h1 text-white fs-extra">LLC <span class="head">Programmes</span></p>
    </div>
    <div class="row bg-light">
    <div class="col-md-8 m-auto p-4 bg-white">
    <div class="card-header mt-2">
      <p class="card-title h2 text-center accent head">Weekly Programmes</p>
    </div>
    <div class="card p-3 m-5 shadow-lg border-theme">
    <table class="table table-hover table-inverse table-responsive">
      <thead class="thead-inverse">
        <tr>
          <th>Day</th>
          <th>Programme</th>
          <th>Time</th>
          <th>Duration</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row" rowspan="2">Sunday</td>
            <td>First Service</td>
            <td>7:00 am</td>
            <td>1hr 30mins</td>
          </tr>
          <tr>
            <td scope="row">Second Service</td>
            <td>9:00am</td>
            <td>2hrs 30mins</td>
          </tr>
          <tr>
            <td scope="row" colspan="4" class="text-white text-center fst-italic bg-secondary">Only Second Service is observed on First Sundays of the Month</td>
          </tr>
          <tr>
            <td scope="row" rowspan="">Thursday</td>
            <td>WordFeast</td>
            <td>5:00 am</td>
            <td>1hr 30mins</td>
          </tr>
        </tbody>
    </table>
    </div>
    </div>
    <hr/>
    <div class="col-md-8 m-auto p-4 bg-white">
    <div class="card-header mt-2">
      <p class="card-title h2 text-center theme head">Monthly Programmes</p>
    </div>
    <div class="card p-3 m-5 shadow-lg border-theme">
    <table class="table table-hover table-inverse table-responsive">
      <thead class="thead-inverse">
        <tr>
          <th>Day</th>
          <th>Programme</th>
          <th>Time</th>
          <th>Duration</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1st Sunday of the Month</td>
            <td>Thanksgiving Service</td>
            <td>9:00 am</td>
            <td>1hr 30mins</td>
          </tr>
          <tr>
            <td scope="row">Last Weekend</td>
            <td scope="row">Weekend of Wonders <span class="fw-bold"> (WOW)  </span> </td>
            <td>9:00am</td>
            <td>2hrs 30mins</td>
          </tr>
        </tbody>
    </table>
    </div>
    </div>
    </div>
    
  </main>
</template>

<script>

export default {
  name: "Programme-vue",

};
</script>

<style></style>
