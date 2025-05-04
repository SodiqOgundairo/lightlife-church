<template>
    <div class="container py-5 mt-5">
      <h1 class="text-center">Higher Life Conference Attendance</h1>
      <div class="text-right my-3">
        <!-- <button class="btn btn-primary" @click="downloadExcel">Download as Excel</button> -->
      </div>
      <div class="table-responsive">
        <!-- <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Member</th>
              <th>Other Church</th>
              <th>Role</th>
              <th>Heard From</th>
              <th>Attended Before</th>
              <th>Expectations</th>
              <th>Special Needs</th>
              <th>Volunteer</th>
              <th>Volunteer Capacity</th>
              <th>Accommodation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="registration in registrations" :key="registration.id">
              <td>{{ registration.fullName }}</td>
              <td>{{ registration.gender }}</td>
              <td>{{ registration.phoneNumber }}</td>
              <td>{{ registration.email }}</td>
              <td>{{ registration.isMember }}</td>
              <td>{{ registration.otherChurch }}</td>
              <td>{{ registration.role }}</td>
              <td>{{ registration.heardFrom }}</td>
              <td>{{ registration.attendedBefore }}</td>
              <td>{{ registration.expectations }}</td>
              <td>{{ registration.specialNeeds }}</td>
              <td>{{ registration.isVolunteer }}</td>
              <td>{{ registration.volunteerCapacity }}</td>
              <td>{{ registration.accommodation }}</td>
            </tr>
          </tbody>
        </table> -->
      </div>
     
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'HlcRegAttendance',
    data() {
      return {
        registrations: []
      };
    },
    // async created() {
    //   try {
    //     const response = await axios.get('https://lightlifechurch.com/php/hlcRegRetrieve.php');
    //     this.registrations = response.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

    mounted() {
        axios.get ('https://lightlifechurch.com/php/hlcRegRetrieve.php')
        .then((response) => {
            this.registrations = response;
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    },
    // methods: {
    //   downloadExcel() {
    //     const data = XLSX.utils.json_to_sheet(this.registrations);
    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, data, 'Attendance');
    //     XLSX.writeFile(workbook, 'hlc_attendance.xlsx');
    //   }
    // }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>