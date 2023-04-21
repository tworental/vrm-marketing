<template>
  <div class="page--auth">
    <main class="main">
      <a class="logo" href="/">
        <img src="/img/logo-color.svg" alt="TwoRentals">
      </a>

      <div class="auth -shadow">
        <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
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
                Log into Your Account
              </h1>
              <p class="auth__description">
                Enter your subdomain to login.
              </p>
            </header>

            <div class="form-item">
              <ValidationProvider
                v-slot="{ errors, classes }"
                name="identifier"
                mode="aggressive"
                :rules="{
                  required: true,
                  min: 4,
                  max: 30,
                  regex: /^[a-z0-9\-]{4,30}$/i
                }"
              >
                <div class="control-wrapper -control-has-subdomain">
                  <input
                    v-model="identifier"
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
                  <span class="suffix">.{{ domain }}</span>
                </div>
              </ValidationProvider>
            </div>

            <button
              class="btn btn--primary btn--auth"
              type="submit"
              :disabled="invalid"
              data-cy="button-signin"
            >
              Log in now
            </button>
          </form>
        </ValidationObserver>
      </div>
      <nav class="footer-nav">
        <ul class="footer-nav__list -list-reset">
          <li>
            <a
              class="footer-nav__link"
              data-cy="button-privacy"
              href="/privacy-policy/"
            >Privacy Policy</a>
          </li>
          <li>
            <a
              class="footer-nav__link"
              data-cy="button-terms"
              href="/terms/"
            >Terms &amp; Conditions</a>
          </li>
        </ul>
      </nav>
    </main>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { checkCompanyRequest } from '@/services/api.service'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },

  data: () => ({
    domain: process.env.NUXT_ENV_DOMAIN_NAME,
    identifier: null
  }),

  methods: {
    async onSubmit () {
      const results = await checkCompanyRequest({
        identifier: this.identifier
      })

      if (results.status === 400) {
        window.top.location.href = `https://${this.identifier}.${this.domain}`
      } else {
        this.$refs.form.setErrors({
          identifier: ['Invalid Account Subdomain']
        })
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
.footer-nav {
  text-align: center;
  font-size: 1.4rem;
}
.auth {
  max-width: 30em;
  padding: 2em;
  border-radius: 1rem;
  background-color: #ffffff;
  margin: 3em auto 1.5em;
}

.form-item {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-item {
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

.-invalid .label,
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
