<template>
  <form @submit.prevent="submitForm">
    <div
      class="form-control"
      :class="{ invalid: isInvalidUsername === 'invalid' }"
    >
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="validateInputUserName"
      />
      <p v-if="isInvalidUsername === 'invalid'">
        Please enter your username before submitting
      </p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <!-- v-model auto cast the value to number for the number input -->
      <!-- However the value from the refs does not type cast it remains in String format -->
      <!-- We can use modifier with the v-model which can be used to make life easier, for ex, trim will trim the strings which not required at the end -->
      <input id="age" name="age" v-model.trim="userAge" type="number" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          value="news"
          type="checkbox"
          v-model="interest"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          value="tutorials"
          type="checkbox"
          v-model="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          value="nothing"
          type="checkbox"
          v-model="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="video courses"
          v-model="how"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blogs"
          v-model="how"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="others"
          v-model="how"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <label>Rating</label>
      <rating-control v-model="rating"></rating-control>
    </div>
    <hr />
    <div class="form-control">
      <input
        type="checkbox"
        id="confirm"
        name="confirm-box"
        v-model="confirmBox"
      />
      <label>Agree to submit the form after reading all the Terms</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl.vue';

export default {
  components: { RatingControl },
  data() {
    return {
      userName: '',
      userAge: null,
      referer: 'Google',
      interest: [],
      how: null,
      confirmBox: false,
      isInvalidUsername: 'pending',
      rating: null,
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted! ' + this.userName);
      this.userName = '';
      this.userAge = null;
      console.log('referrer : ' + this.referer);
      this.referer = 'Google';
      console.log('How? ' + this.how);
      this.how = null;
      console.log('Interest : ' + this.interest);
      this.interest = [];
      // The checkbox with only one input stores the boolean value whereas the check box
      // with multiple value stores the array of values
      console.log('Confirm Box : ' + this.confirmBox);
      this.confirmBox = false;

      console.log('Rating : ' + this.rating);
      this.rating = null;
    },
    validateInputUserName() {
      console.log('Called invalidate methid');
      if (this.userName === '') {
        this.isInvalidUsername = 'invalid';
      } else {
        this.isInvalidUsername = 'valid';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border: 1px solid red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
