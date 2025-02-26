<template>
  <div class="hlc-reg">
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-10 m-auto">
            <h1 class="text-center mb-4">
              <span class="head">Higher Life Conference 2025</span> Registration
            </h1>
            <div class="card border-1 border-theme p-md-5 my-3">
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label for="fullName" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="fullName" v-model="form.fullName" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Gender</label>
                  <div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="male" value="Male" v-model="form.gender"
                        required>
                      <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="female" value="Female" v-model="form.gender"
                        required>
                      <label class="form-check-label" for="female">Female</label>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="phoneNumber" class="form-label">Phone Number</label>
                  <input type="tel" class="form-control" id="phoneNumber" v-model="form.phoneNumber" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="email" v-model="form.email" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Are you a member of Lightlife Connect Ministry?</label>
                  <div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="memberYes" value="Yes" v-model="form.isMember"
                        required>
                      <label class="form-check-label" for="memberYes">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="memberNo" value="No" v-model="form.isMember"
                        required>
                      <label class="form-check-label" for="memberNo">No</label>
                    </div>
                  </div>
                </div>
                <div class="mb-3" v-if="form.isMember === 'No'">
                  <label for="otherChurch" class="form-label">Which church/ministry do you attend?</label>
                  <input type="text" class="form-control" id="otherChurch" v-model="form.otherChurch">
                </div>
                <div class="mb-3">
                  <label for="role" class="form-label">Role in Church/Ministry</label>
                  <select class="form-select" id="role" v-model="form.role" required>
                    <option value="">Select role</option>
                    <option value="Pastor">Pastor</option>
                    <option value="Worker">Worker</option>
                    <option value="Member">Member</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="heardFrom" class="form-label">How did you hear about Higher Life Conference?</label>
                  <select class="form-select" id="heardFrom" v-model="form.heardFrom" required>
                    <option value="">Select option</option>
                    <option value="Church Announcement">Church Announcement</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friend/Family">Friend/Family</option>
                    <option value="Flyer">Flyer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label">Have you attended this conference before?</label>
                  <div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="attendedYes" value="Yes"
                        v-model="form.attendedBefore" required>
                      <label class="form-check-label" for="attendedYes">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="attendedNo" value="No"
                        v-model="form.attendedBefore" required>
                      <label class="form-check-label" for="attendedNo">No</label>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="expectations" class="form-label">What are your expectations for the conference?</label>
                  <textarea class="form-control" id="expectations" rows="3" v-model="form.expectations"></textarea>
                </div>
                <div class="mb-3">
                  <label class="form-label">Do you have any special needs or concerns?</label>
                  <div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="specialNeedsYes" value="Yes"
                        v-model="form.hasSpecialNeeds" required>
                      <label class="form-check-label" for="specialNeedsYes">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="specialNeedsNo" value="No"
                        v-model="form.hasSpecialNeeds" required>
                      <label class="form-check-label" for="specialNeedsNo">No</label>
                    </div>
                  </div>
                </div>
                <div class="mb-3" v-if="form.hasSpecialNeeds === 'Yes'">
                  <label for="specialNeeds" class="form-label">Please specify your special needs or concerns:</label>
                  <textarea class="form-control" id="specialNeeds" rows="3" v-model="form.specialNeeds"></textarea>
                </div>
                <div class="mb-3">
                  <label class="form-label">Would you like to volunteer as a worker during the event?</label>
                  <div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="volunteerYes" value="Yes"
                        v-model="form.isVolunteer" required>
                      <label class="form-check-label" for="volunteerYes">Yes</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" id="volunteerNo" value="No"
                        v-model="form.isVolunteer" required>
                      <label class="form-check-label" for="volunteerNo">No</label>
                    </div>
                  </div>
                </div>
                <div class="mb-3" v-if="form.isVolunteer === 'Yes'">
                  <label for="volunteerCapacity" class="form-label">In what capacity can you serve?</label>
                  <select class="form-select" id="volunteerCapacity" v-model="form.volunteerCapacity" required>
                    <option value="">Select capacity</option>
                    <option value="Choir">Choir</option>
                    <option value="Media">Media</option>
                    <option value="Sound">Sound</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Welfare">Welfare</option>
                    <option value="Protocol">Protocol</option>
                    <option value="Ushering">Ushering</option>
                    <option value="Greeters">Greeters</option>
                    <option value="Children">Children</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Prayer">Prayer</option>
                    <option value="Sanitation">Sanitation</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="accommodation" class="form-label">Accommodation</label>
                  <select class="form-select" id="accommodation" v-model="form.accommodation" required>
                    <option value="">Select accommodation</option>
                    <option value="Hostel">Hostel (Free)</option>
                    <option value="2 Bedroom Chalet">2 Bedroom Chalet (20,000 per Night)</option>
                    <option value="3 Bedroom Chalet">3 Bedroom Chalet (40,000 per Night)</option>
                  </select>
                </div>
                <div class="text-center mt-4">
                  <button type="submit" class="btn btn-lg btn-theme-gradient px-4 shadow-sm"> Register </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HlcReg',
  data() {
    return {
      form: {
        fullName: '',
        gender: '',
        phoneNumber: '',
        email: '',
        isMember: '',
        otherChurch: '',
        role: '',
        heardFrom: '',
        attendedBefore: '',
        expectations: '',
        hasSpecialNeeds: '',
        specialNeeds: '',
        isVolunteer: '',
        volunteerCapacity: '',
        accommodation: ''
      }
    }
  },
  methods: {
   async submitForm() {
      // Handle form submission here
      const formData = new FormData();
      formData.append('fullName', this.form.fullName);
      formData.append('gender', this.form.gender);
      formData.append('phoneNumber', this.form.phoneNumber);
      formData.append('email', this.form.email);
      formData.append('isMember', this.form.isMember);
      formData.append('otherChurch', this.form.otherChurch);
      formData.append('role', this.form.role);
      formData.append('heardFrom', this.form.heardFrom);
      formData.append('attendedBefore', this.form.attendedBefore);
      formData.append('expectations', this.form.expectations);
      formData.append('hasSpecialNeeds', this.form.hasSpecialNeeds);
      formData.append('specialNeeds', this.form.specialNeeds);
      formData.append('isVolunteer', this.form.isVolunteer);
      formData.append('volunteerCapacity', this.form.volunteerCapacity);
      formData.append('accommodation', this.form.accommodation);
      
      // Send the form data to your server using fetch or axios

      await axios.post("https://lightlifechurch.com/php/hlcRegUpload.php", formData);
      
      
      
      //Send email to registered users
      // const emailData = {
      //   fullName: this.form.fullName,
      //   email: this.form.email,
      //   // subject: 'Lightlife Church Registration Confirmation',
      //   // message: `Thank you for registering for the Lightlife Church Annual Conference. Your registration details are as follows:\n\nFull Name: ${this.form.fullName}\nEmail: ${this.form.email}`
      // }
      // await axios.post("https://lightlifechurch.com/php/sendEmail.php", emailData)
      
      alert('Form submitted successfully!');

      //Redirect to thank you page
      this.$router.push('/thank-you');
      // Reset form fields after submission
      this.form = {
        fullName: '',
        gender: '',
        phoneNumber: '',
        email: '',
        isMember: '',
        otherChurch: '',
        role: '',
        heardFrom: '',
        attendedBefore: '',
        expectations: '',
        hasSpecialNeeds: '',
        specialNeeds: '',
        isVolunteer: '',
        volunteerCapacity: '',
        accommodation: ''
      };

      
      console.log(this.form);
      // You can send this data to your backend or perform any other necessary actions
    }
  }
}
</script>

<style scoped>
.hlc-reg {
  background-color: #f8f9fa;
}

.head {
  color: #007bff;
  font-weight: bold;
}

.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  border: none;
}

.bg-accent-gradient {
  background: linear-gradient(45deg, #007bff, #0056b3);
}

@media (max-width: 768px) {
  form {
    padding: 1rem;
  }
}
</style>