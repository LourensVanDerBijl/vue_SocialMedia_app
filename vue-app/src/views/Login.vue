<template>
  <div id="login">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
      <section>
        <div class="col1" id="about">
          <h1>Team Management App</h1>
          <p>Welcome to the test site of Team Manangement app. This site will allow team managers to sent task to team members, monitor performance, instantly update appointment letters etc.</p>
        </div>

        <div :class="{ 'signup-form': !showLoginForm }" class="col2">

          <!--Log in-->
          <form v-if="showLoginForm" @submit.prevent>
            <h1>Log in to your profile</h1>
              <div>
                <label for="email1">Email</label>
                <input v-model.trim="loginForm.email" type="text" placeholder="Email Address" id="email1" />
              </div>

              <div>
                <label for="password1">Password</label>
                <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
              </div>

              <button @click="login()" class="button">Log In</button>
            
              <div class="extras">
                <a @click="togglePasswordReset()">Forgot Password</a>
                <a @click="toggleForm()">Create an Account</a>
              </div>
          </form>



          <!--Register-->
          <form v-else @submit.prevent>
            <h1>Get Started</h1>
            <div>
              <label for="name">Name</label>
              <input v-model.trim="signupForm.name" type="text" placeholder="Enter Your Name" id="name" />
            </div>
            <div>
              <label for="occupation">Occupation</label>
              <input v-model.trim="signupForm.occupation" type="text" placeholder="Enter Your Occupation" id="title" />
            </div>
            <div>
              <label for="email2">Email</label>
              <input v-model.trim="signupForm.email" type="text" placeholder="Enter Your Email Address" id="email2" />
            </div>
            <div>
              <label for="password2">Password</label>
              <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" />
            </div>
            <button @click="signup()" class="button">Sign Up</button>
            <div class="extras">
              <a @click="toggleForm()">Back to Log In</a>
            </div>
          </form>
        </div>
      </section>
  </div>
</template>

<script>
import PasswordReset from '@/components/PasswordReset'

export default {
  components: {
    PasswordReset
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        occupation: '',
        email: '',
        password: ''
      },
      showLoginForm: true,
      showPasswordReset: false
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    },
    login() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    },
    signup() {
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.occupation
      })
    }
  }
}
</script>
