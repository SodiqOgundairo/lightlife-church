<template>
  <header class="mt-5">
    <div class="text-center bgg">
      <div class="bg-dark bg-opacity-50 py-5">
        <p class="h1 page-title text-white fs-extra">LLC PROGRAMMES</p>
      </div>
    </div>
  </header>

  <section class="">
    <div class="row bg-white py-5">
      <div class="col-md-10 shadow-lg m-auto p-md-5">
        <div class="card border-1 border-theme m-2 p-md-5 my-3">
          <div class="row g-0">
            <div class="col-md-6 gap-3 d-flex align-self-center">
              <div class="card-body">
                <p class="card-text">
                  Follow this page to get more acquianted with our <strong>major programmes</strong> at LLC. All our programmes are Spirit-filled and they will definitly bless you.
                  <!-- <span class="d-block">Thank you!</span> -->
                </p>
              </div>
            </div>
            <div class="col-md-6 d-flex">
              <img
                src="../assets/img/programs.jpg"
                class="img-fluid"
                alt="LLC Programmes
          "
              />
            </div>
          </div>
        </div>

        <!-- WEEKLY PROGRAMMES -->
        
  
        <div
          class="card p-3 my-5 col-md-12 m-auto shadow-lg border-theme"
          style="overflow-x: auto"
        >
          <p class="card-title h2 accent">Weekly Programmes</p>

          <table class="table table-hover table-inverse table-responsive">
            <thead class="thead-inverse">
              <tr>
                <th>Day</th>
                <th>Programme</th>
                <th>Time</th>
                <th>Venue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" rowspan="2">Sunday</td>
                <td>First Service</td>
                <td>8:00 am</td>
                <td>Zion</td>
              </tr>
              <tr>
                <td scope="row">Second Service</td>
                <td>9:30am</td>
                <td>Zion</td>
              </tr>
              <tr>
                <td
                  scope="row"
                  colspan="4"
                  class="text-white text-center fst-italic bg-secondary"
                >
                  Only One Service is observed on First Sundays of every Month
                  starting 9:30am
                </td>
              </tr>
              <tr>
                <td scope="row" rowspan="">Monday</td>
                <td>Love Ladies</td>
                <td>5:00 pm</td>
                <td>Zion</td>
              </tr>
              <tr>
                <td scope="row" rowspan="">Tuesday</td>
                <td>God’s Guys</td>
                <td>9:00 pm</td>
                <td>Google Meet</td>
              </tr>
              <tr>
                <td scope="row" rowspan="">Wednesday</td>
                <td>Relationship Clinic</td>
                <td>6:00 pm</td>
                <td>Zion</td>
              </tr>
              <tr>
                <td scope="row" rowspan="">Thursday</td>
                <td>WordFeast</td>
                <td>6:00 pm</td>
                <td>Zion</td>
              </tr>
              <tr>
                <td
                  scope="row"
                  colspan="4"
                  class="text-white text-center fst-italic bg-secondary"
                >
                  LAST WEEKEND OF THE MONTH: WEEKEND OF WONDERS (WOW)
                </td>
              </tr>
              <tr>
                <td scope="row" rowspan="">Friday</td>
                <td>WOW</td>
                <td>5:00 pm</td>
                <td>Zion</td>
              </tr>
              <tr>
                <td scope="row" rowspan="">Saturday</td>
                <td>WOW</td>
                <td>5:00 pm</td>
                <td>Zion</td>
              </tr>
              <tr>
                <td scope="row" rowspan="">Sunday</td>
                <td>WOW</td>
                <td>8:00 am</td>
                <td>Zion</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </section>

  
  <article class="row bg-light py-5">
    <div class="col-md-10 m-auto">
      <div class="container">
        <p class="card-title h2 accent">SPECIAL PROGRAMMES</p>
        <div class="row">
          <section class="col-md-4 m-auto p-5">
            <div class="card border-0 shadow-lg">
              <img
                src="../assets/img/story.jpeg"
                class="card-img-top img-fluid"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">ThanksGiving Sunday</h5>
                <small class="card-text text-muted"
                  >Sunday 7th August, 2022 is our thanksgiving Sunday. Join us 
                </small>
              </div>
            </div>
          </section>
          <section class="col-md-4 m-auto p-5">
            <div class="card border-0 shadow-lg">
              <img
                src="../assets/img/llc.png"
                class="card-img-top bg-theme img-fluid"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Weekend of Encounter</h5>
                <small class="card-text text-muted"
                  >Night of Encounter now Weekend of Encounters
                </small>
              </div>
            </div>
          </section>
          <section class="col-md-4 m-auto p-5">
            <div class="card border-0 shadow-lg">
              <img
                src="../assets/img/llc.png"
                class="card-img-top bg-theme img-fluid"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Title</h5>
                <small class="card-text text-muted"
                  >Description description description description
                </small>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Programme-vue",
};
</script>

<style>
.bgg {
  /* width: 100%;
  margin: 0px;
  padding: 0px; */
  background-image: url("../assets/img/programs-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: lighten;
}
@media (max-width: 550px) {
  .page-title {
    font-size: xx-large;
  }
}
</style>
