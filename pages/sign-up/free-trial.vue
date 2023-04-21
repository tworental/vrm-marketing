<template>
  <div class="page--auth">
    <main class="main">
      <a class="logo" href="/">
        <img src="/img/logo-color.svg" alt="TwoRentals">
      </a>

      <div class="auth -shadow">
        <template v-if="success">
          <SuccessMessage />
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
                  Claim your {{ trial }}-Days FREE Trial now!
                </h1>
                <p class="auth__description">
                  You’re less than a minute away from effective property
                  management
                </p>
              </header>

              <div class="form-item">
                <ValidationProvider
                  v-slot="{ errors, classes, failedRules }"
                  name="firstName"
                  mode="eager"
                  :rules="{ required: true, min: 2, max: 100 }"
                >
                  <div class="control-wrapper">
                    <input
                      v-model="formData.firstName"
                      class="control"
                      :class="classes"
                      placeholder="First Name"
                      type="text"
                      maxlength="100"
                      data-cy="field-firstName"
                    >
                    <div v-if="errors.length" class="label-error">
                      {{
                        failedRules.regex
                          ? "Please provide your First Name"
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
                  v-slot="{ errors, classes, failedRules }"
                  name="lastName"
                  mode="eager"
                  :rules="{ required: true, min: 2, max: 100 }"
                >
                  <div class="control-wrapper">
                    <input
                      v-model="formData.lastName"
                      class="control"
                      :class="classes"
                      placeholder="Last Name"
                      type="text"
                      maxlength="100"
                      data-cy="field-lastName"
                    >
                    <div v-if="errors.length" class="label-error">
                      {{
                        failedRules.regex
                          ? "Please provide your Last Name"
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
                  name="password"
                  mode="eager"
                  rules="required|min:8|max:100"
                >
                  <div class="control-wrapper">
                    <input
                      v-model="formData.password"
                      class="control"
                      :class="classes"
                      placeholder="Your Password"
                      maxlength="100"
                      type="password"
                      name="password"
                      data-cy="field-password"
                    >
                    <div v-if="errors.length" class="label-error">
                      {{ errors[0] }}
                    </div>
                    <div class="tooltip-wrapper">
                      <div class="tooltip">
                        <span class="tooltip__icon" />
                        <span class="tooltip__text">
                          <span
                            class="tooltip__heading"
                          >Password security requirements:</span>
                          <ul class="tooltip__requirements">
                            <li>use at least 8 characters</li>
                            <li>mix letters and numbers</li>
                            <li>mix lower and uppercase</li>
                            <li>use special characters (e.g. @)</li>
                          </ul>
                        </span>
                      </div>
                    </div>
                  </div>
                </ValidationProvider>
              </div>

              <div class="form-item">
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  name="identifier"
                  mode="eager"
                  :rules="{
                    required: true,
                    min: 4,
                    max: 30,
                    regex: /^[a-z0-9\-]{4,30}$/i
                  }"
                >
                  <div class="control-wrapper -control-has-subdomain">
                    <input
                      v-model="formData.identifier"
                      class="control"
                      :class="classes"
                      placeholder="Your TwoRentals Subdomain"
                      type="text"
                      maxlength="30"
                      data-cy="field-identifier"
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
                    <span class="suffix">.{{ domain }}</span>
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
                data-cy="button-signup"
                :disabled="loading"
              >
                {{ loading ? "Submiting..." : "Start Your Free Trial" }}
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

import SuccessMessage from '../../components/SuccessMessage.vue'
import { signupRequest } from '../../services/api.service'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    SuccessMessage
  },

  data: () => ({
    trial: 7,
    domain: process.env.NUXT_ENV_DOMAIN_NAME,
    loading: false,
    success: false,
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      identifier: '',
      phoneNumber: '',
      promoCode: '',
      termsAccepted: false
    }
  }),

  mounted () {
    const matches = window.location.search.match(
      new RegExp('[?&]promoCode=([^&]+)')
    )

    if (matches) {
      const [, coupon] = matches

      this.formData.promoCode = coupon
    }
  },

  methods: {
    async onSubmit () {
      this.loading = true

      const locale = navigator.languages
        ? navigator.languages[0]
        : navigator.language || navigator.userLanguage

      const timezone =
        Intl.DateTimeFormat().resolvedOptions().timeZone || 'en-UK'
      const language = locale.split(/-|_/)[0]

      const results = await signupRequest({
        promoCode: this.formData.promoCode,
        identifier: this.formData.identifier,
        email: this.formData.email,
        password: this.formData.password,
        phoneNumber: this.formData.phoneNumber,
        firstName: this.formData.firstName,
        lastName: this.formData.lastName,
        timezone,
        locale,
        language
      })

      if (results.status === 201) {
        this.success = true
      } else if (results.status === 400) {
        const { error } = await results.json()

        if (error.code === 'VALIDATION_FAILED') {
          if (error.errors.identifier) {
            const identifier = error.errors.identifier.includes('exists')
              ? ['Company already exists!']
              : error.errors.identifier
            this.$refs.form.setErrors({ identifier })
          }
        }
      }

      this.loading = false
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
  max-width: 32em;
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
