<template>
  <div class="page--auth">
    <main class="main">
      <a class="logo" href="/">
        <img src="/img/logo-color.svg" alt="TwoRentals">
      </a>

      <div class="auth -shadow">
        <template v-if="success">
          <DemoRequestSuccess />
        </template>

        <template v-else>
          <ValidationObserver ref="form" v-slot="{ handleSubmit }">
            <form
              id="auth-form"
              class="auth-form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              @submit.prevent="handleSubmit(onSubmit)"
            >
              <input type="hidden" name="bot-field">

              <header class="auth__header">
                <h1 class="auth__heading">
                  See TwoRentals in Action
                </h1>
                <p class="auth__description">
                  Experience a one-on-one live demo with an expert to see how
                  Guesty can fit your needs.
                </p>
              </header>

              <div class="form-item">
                <ValidationProvider
                  v-slot="{ errors, classes, failedRules }"
                  name="name"
                  mode="eager"
                  :rules="{
                    required: true,
                    max: 200,
                    regex: /^[a-z\.\-]{2,} [a-z\.\-]{2,}$/i
                  }"
                >
                  <div class="control-wrapper">
                    <input
                      v-model="formData.name"
                      class="control"
                      :class="classes"
                      placeholder="Full Name"
                      type="text"
                      maxlength="100"
                      data-cy="field-fullName"
                    >
                    <div v-if="errors.length" class="label-error">
                      {{
                        failedRules.regex
                          ? "Please provide your Name and Surname"
                          : errors[0]
                      }}
                    </div>
                    <div class="tooltip-wrapper">
                      <div class="tooltip">
                        <span class="tooltip__icon" />
                        <span class="tooltip__text" />
                      </div>
                    </div>
                  </div>
                </ValidationProvider>
              </div>

              <div class="form-item">
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  name="email"
                  mode="eager"
                  rules="required|email|min:5|max:255"
                >
                  <div class="control-wrapper">
                    <input
                      v-model="formData.email"
                      class="control"
                      :class="classes"
                      placeholder="E-mail Address"
                      type="email"
                      maxlength="255"
                      data-cy="field-email"
                    >
                    <div v-if="errors.length" class="label-error">
                      {{ errors[0] }}
                    </div>
                    <div class="tooltip-wrapper">
                      <div class="tooltip">
                        <span class="tooltip__icon" />
                        <span class="tooltip__text" />
                      </div>
                    </div>
                  </div>
                </ValidationProvider>
              </div>

              <div class="form-item">
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  name="phoneNumber"
                  mode="eager"
                  rules="required|min:5|max:40"
                >
                  <div class="control-wrapper">
                    <input
                      v-model="formData.phoneNumber"
                      class="control"
                      :class="classes"
                      placeholder="Phone Number"
                      type="text"
                      maxlength="40"
                      data-cy="field-phoneNumber"
                    >
                    <div v-if="errors.length" class="label-error">
                      {{ errors[0] }}
                    </div>
                    <div class="tooltip-wrapper">
                      <div class="tooltip">
                        <span class="tooltip__icon" />
                        <span class="tooltip__text" />
                      </div>
                    </div>
                  </div>
                </ValidationProvider>
              </div>

              <div class="form-item">
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  name="properties"
                  mode="eager"
                  rules="required"
                >
                  <div class="control-wrapper">
                    <input
                      v-model="formData.properties"
                      class="control"
                      :class="classes"
                      placeholder="Number of Rentals Currently Managed"
                      type="number"
                      min="1"
                      data-cy="field-propertiesNumber"
                    >
                    <div v-if="errors.length" class="label-error">
                      {{ errors[0] }}
                    </div>
                    <div class="tooltip-wrapper">
                      <div class="tooltip">
                        <span class="tooltip__icon" />
                        <span class="tooltip__text" />
                      </div>
                    </div>
                  </div>
                </ValidationProvider>
              </div>

              <div class="form-item">
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  name="termsAccepted"
                  :rules="{ required: { allowFalse: false } }"
                  mode="eager"
                >
                  <div class="checkbox-wrapper" :class="classes">
                    <input
                      id="terms"
                      v-model="formData.termsAccepted"
                      class="-checkbox"
                      type="checkbox"
                      name="termsAccepted"
                      data-cy="field-termsAccepted"
                    >
                    <label class="c-label" for="terms">
                      I agree with the
                      <a
                        href="/terms/"
                        target="_blank"
                      >terms &amp; acceptable use policy</a>
                    </label>
                    <div v-if="errors.length" class="label-error">
                      {{ errors[0] }}
                    </div>
                  </div>
                </ValidationProvider>
              </div>

              <button
                class="btn btn--primary btn--auth"
                type="submit"
                data-cy="button-sendRequest"
              >
                Send Request
              </button>

              <p class="sub-info">
                Already have an account?
                <a href="/signin/" data-cy="button-signin">Log in now</a>
              </p>
            </form>
          </ValidationObserver>
        </template>
      </div>
    </main>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

import DemoRequestSuccess from '../components/DemoRequestSuccess.vue'
import { demoRequest } from '../services/api.service'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    DemoRequestSuccess
  },

  data: () => ({
    domain: process.env.NUXT_ENV_DOMAIN_NAME,
    success: false,
    formData: {
      name: '',
      email: '',
      properties: '',
      phoneNumber: '',
      termsAccepted: false
    }
  }),

  methods: {
    async onSubmit () {
      const { status } = await demoRequest({
        email: this.formData.email,
        name: this.formData.name,
        phone: this.formData.phoneNumber,
        propertiesCount: this.formData.properties
      })

      if (status === 200) {
        this.success = true
      } else {
        this.$toast.error('Something went wrong. Try again latter!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/*---------------------------------------------------------------------------------------------
[ Register ]
*/
.page--auth {
  display: table;
  width: 100%;
  min-height: 100vh;

  .main {
    display: table-cell;
    vertical-align: middle;
    padding-top: 3em;
  }
}
.auth {
  max-width: 30em;
  padding: 2em;
  border-radius: 1rem;
  background-color: #ffffff;
  margin: 3em auto;
}
.page--auth {
  background: url("/img/bg-register.svg") no-repeat 0 96%/50vw auto;
}

.form-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1em 0 2em;
}

.label {
  font-weight: 500;
  display: block;
  margin: 0 0 0.3em;
}
.control-wrapper {
  position: relative;
}
.control {
  border: 1px solid #43537b;
  border-radius: 4px;
  padding: 1em 1.2em;
  width: 100%;
  display: block;
}

.-failed .label,
.-invalid .control {
  color: #fa2c3b;
}

.-invalid .control {
  padding-right: 6em;
  border-color: currentColor;
}

.-invalid .tooltip-wrapper {
  display: block;
}

.-invalid.c-label::before {
  border-color: currentColor;
}

.label-error {
  color: #fa2c3b;
  font-size: 0.75em;
  position: absolute;
}
.failed.control {
  border-color: #fa2c3b;
}
.suffix {
  color: #909fb0;
  position: absolute;
  right: 1.2em;
  top: 0.87em;
}
.-control-has-subdomain {
  .control {
    padding-right: 7em;
  }
}

.tooltip-wrapper {
  position: absolute;
  top: 1em;
  right: 1em;
  display: none;
}

.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip__icon {
  display: block;
  height: 20px;
  width: 20px;
  background: url("/img/ico-info.svg") 50% 50% no-repeat;
}

.tooltip .tooltip__text {
  color: #000000;
  font-size: 1.2rem;
  text-align: left;
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: -480%;
  margin-left: -60px;
  padding: 0.5rem 1rem;
  width: 180px;
  visibility: hidden;
}

.tooltip .tooltip__text::before,
.tooltip .tooltip__text::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 5%;
  margin-left: -5px;
  border: 5px solid transparent;
  border-top-color: #ffffff;
}

.tooltip .tooltip__text::before {
  border-top-color: #d7d7d7;
}

.tooltip .tooltip__text::after {
  margin-top: -1px;
}

.tooltip:hover .tooltip__text {
  visibility: visible;
}

.tooltip__heading {
  display: block;
  font-weight: 500;
  margin-bottom: 1rem;
}

.tooltip__requirements {
  padding: 0 0 0 1.5rem;
  margin: 0;
  text-align: left;
}

.btn--auth {
  display: block;
  margin: 20px auto;
}

.sub-info {
  font-size: 1.4rem;
  text-align: center;
  margin: 2em 0 0;
}
.logo {
  margin: 0 auto;
}
.auth__header {
  text-align: center;
  padding: 2em 0 1em;
}
.auth__heading {
  font-size: 2.4rem;
  margin: 0;
}
.auth__description {
  font-size: 1.4rem;
  margin: 0.5em 0 0;
}
/* End Auth Pages */
</style>
