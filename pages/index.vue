<template>
  <div>
    <!-- Header with nav -->
    <header id="header" class="header">
      <div class="header__content">
        <a class="logo" href="#top-page">
          <img src="/img/logo-color.svg" alt="TwoRentals">
        </a>

        <nav class="nav">
          <ul class="nav__list -list-reset">
            <li class="nav__item">
              <a v-smooth-scroll class="nav__link" href="#features">Features</a>
            </li>

            <li class="nav__item">
              <a v-smooth-scroll class="nav__link" href="#pricing">Pricing</a>
            </li>

            <li class="nav__item">
              <a
                v-smooth-scroll
                class="nav__link"
                href="#channel-manager"
              >Channel Manager</a>
            </li>
          </ul>
        </nav>

        <div class="header__auth">
          <a
            class="btn btn--inverse -shadow"
            data-cy="button-signin"
            href="/signin/"
          >Log in</a>
          <a
            v-if="signupEnabled"
            class="btn btn--primary -shadow"
            data-cy="button-signup"
            href="/sign-up/free-trial"
          >Start Free Trial</a>
          <a
            v-else
            class="btn btn--primary -shadow"
            data-cy="button-demoRequest"
            href="/demo-request/"
          >Request a Demo</a>
        </div>

        <div class="outer-menu">
          <input id="closeMenuIcon" class="checkbox-toggle" type="checkbox">
          <div class="hamburger">
            <div />
          </div>
          <nav class="menu">
            <div>
              <div>
                <ul class="outer-menu__list -list-reset">
                  <li class="outer-menu__item" @click="closeMenu()">
                    <a
                      v-smooth-scroll
                      class="outer-menu__link"
                      href="#features"
                    >Features</a>
                  </li>

                  <li class="outer-menu__item" @click="closeMenu()">
                    <a
                      v-smooth-scroll
                      class="outer-menu__link"
                      href="#pricing"
                    >Pricing</a>
                  </li>

                  <li class="outer-menu__item" @click="closeMenu()">
                    <a
                      v-smooth-scroll
                      class="outer-menu__link"
                      href="#channel-manager"
                    >Channel Manager</a>
                  </li>
                </ul>
                <ul class="outer-menu__list -list-reset">
                  <li class="outer-menu__auth-item">
                    <a
                      class="btn btn--inverse -shadow"
                      data-cy="button-signin"
                      href="/signin/"
                    >Log in</a>
                    <a
                      v-if="signupEnabled"
                      class="btn btn--primary -shadow"
                      data-cy="button-signup"
                      href="/sign-up/free-trial"
                    >Start Free Trial</a>
                    <a
                      v-else
                      class="btn btn--primary -shadow"
                      data-cy="button-signup"
                      href="/demo-request/"
                    >Request a Demo</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <!-- End Header with nav -->

    <!-- All Content in page -->
    <main class="main">
      <section class="section section--entry">
        <div class="l-media l-media--initial page-wrap entry">
          <div class="l-media__content">
            <h1>Meet Your New Vacation Rental Property Manager!</h1>
            <p class="lead">
              Whether you run a hotel or vacation apartment, TwoRentals is all
              you need to rent and manage your business with ease and
              efficiency. With a flexible online booking system, you can get
              back to focusing on what you do best.
            </p>
            <div>
              <a
                v-if="signupEnabled"
                class="btn btn--primary btn--arrow"
                data-cy="button-signup"
                href="/sign-up/free-trial"
              >Get Started</a>
              <a
                v-else
                class="btn btn--primary btn--arrow"
                data-cy="button-signup"
                href="/demo-request/"
              >Get Started</a>
            </div>
          </div>

          <div class="l-media__figure">
            <div class="figure">
              <div class="entry__template -decoration">
                <img src="/img/template.svg" alt>
                <!-- <div class="messages">
                  <div class="message message--inverse -shadow">
                    Automatic Invoices
                  </div>
                  <div class="message message--primary -shadow">
                    Directly from your Tworentals panel, organize and create
                    invoices for services such as cleaning and property repairs.
                  </div>
                  <div class="messages__icon -shadow">
                    &nbsp;
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="section section--features">
        <section class="features-entry">
          <div class="page-wrap">
            <h2>Channel Manager and Property management system</h2>
            <p class="lead">
              Haven’t found the right reservation software for your needs yet?
              Try TwoRentals, where your guests can book rooms anytime, day or
              night. It’s fast and simple, just the way you like it. TwoRentals
              is cloud-based and completely customized to meet your needs, with
              real-time invoicing, document scanning, statistics, and so much
              more.
            </p>
            <div class="features-entry__template">
              <!-- here will be template -->
              <div class="features-entry__img">
                <img
                  src="/img/template-channel.svg"
                  alt="TwoRentals channel manager: Airbnb, Expedia, Hostelworld, Booking.com"
                >
              </div>
            </div>
          </div>
          <div class="features-bg">
            <img src="/img/waves.svg" alt class="bg-wave">
          </div>
        </section>

        <section id="channel-manager" class="section channel-manager">
          <div class="l-media l-media--initial page-wrap">
            <div class="l-media__content">
              <h3>Channel Manager</h3>
              <p class="lead">
                Create, manage, and share listings on all of the major
                platforms, including Airbnb, Booking.com, HomeAway, TripAdvisor,
                and everything in between.
              </p>
              <p class="lead">
                Maintain all listings from a single consolidated dashboard,
                saving you time by removing the need to jump from account to
                account. It's simple, quick, and handy with Tworentals.
              </p>
            </div>
            <div class="l-media__figure">
              <div class="figure">
                <div class="integrations">
                  <img
                    class="integration-figure"
                    src="/img/channel-manager.svg"
                    alt="Channel Manager"
                  >
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="calendar" class="section calendar">
          <div class="l-media l-media--reverse page-wrap">
            <div class="l-media__content">
              <h3>Calendar</h3>
              <p class="lead">
                Enjoy one simple calendar to keep track of and manage all
                reservations and pertinent information from a single location.
                From the palm of your hand, manage availability, pricing, and
                more.
              </p>
              <p class="lead">
                You can also get a quick overview of your guests' profiles and
                data, allowing you to create guest lists for easier marketing.
                Send personalized offers to specific lists based on their
                preferences.
              </p>
            </div>
            <div class="l-media__figure">
              <div class="figure">
                <div class="calendar__template -decoration">
                  <!-- here will be an icon -->
                  <div class="calendar__img">
                    <img src="/img/calendar.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section guest">
          <div class="l-media l-media--initial page-wrap">
            <div class="l-media__content">
              <h3>Owner's panel</h3>
              <p class="lead">
                Are you renting a home on behalf of the owner and communicating
                with him/her via WhatsApp, email, or Slack?
              </p>
              <p class="lead">
                These days are over, as Tworentals now provides a customized
                dashboard for flat owners that displays all information relating
                to their flat reservations. They have access to their own
                bookings and can make changes to them.
              </p>
              <p class="lead">
                Furthermore, clients are given seasonality statistics for their
                property and can make decisions based on this information.
              </p>
            </div>
            <div class="l-media__figure">
              <div class="figure">
                <div class="guest__template -decoration">
                  <div class="guest-email">
                    <div class="guest-email__header">
                      <div class="avatar">
                        <img class="avatar__img" src="/img/people/1.png" alt>
                      </div>
                      <div class="guest-name">
                        <div class="guest-name__title">
                          Getting Started
                        </div>
                        <div class="guest-name__sub-info">
                          Email Marketing
                        </div>
                      </div>
                    </div>
                    <div class="guest-email__body">
                      <p>
                        Hey Faust,
                        <br>Your property "Owenweg 11, 8003 Zürich" has a new
                        reservation from 03.09.2020 to 10.09.2020.
                      </p>
                      <p>
                        The booking was made through Airbnb with the total
                        amount of 650.50 CHF. An invoice was created
                        automatically and was added to your panel.
                      </p>
                    </div>
                  </div>

                  <div class="percent-table">
                    <div class="percent-item">
                      <div class="percent-item__value">
                        912
                      </div>
                      <div class="percent-item__title">
                        Guest
                      </div>
                      <div class="percent-item__progress">
                        <div class="progress-bar">
                          <span class="progress-bar__value">&nbsp;</span>
                        </div>
                      </div>
                    </div>
                    <div class="percent-item">
                      <div class="percent-item__value">
                        38.6&percnt;
                      </div>
                      <div class="percent-item__title">
                        Booking
                      </div>
                      <div class="percent-item__progress">
                        <div class="progress-bar">
                          <span class="progress-bar__value">&nbsp;</span>
                        </div>
                      </div>
                    </div>

                    <div class="percent-item">
                      <div class="percent-item__value">
                        6.23&percnt;
                      </div>
                      <div class="percent-item__title">
                        Reached
                      </div>
                      <div class="percent-item__progress">
                        <div class="progress-bar">
                          <span class="progress-bar__value">&nbsp;</span>
                        </div>
                      </div>
                    </div>
                    <div class="percent-item">
                      <div class="percent-item__value">
                        5.19&percnt;
                      </div>
                      <div class="percent-item__title">
                        Cancelled
                      </div>
                      <div class="percent-item__progress">
                        <div class="progress-bar">
                          <span class="progress-bar__value">&nbsp;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section statistics">
          <div class="l-media l-media--reverse page-wrap">
            <div class="l-media__content">
              <h3>Intuitive Statistics</h3>
              <p class="lead">
                Tworentals believes that knowledge is power. You'll have access
                to a wide selection of reporting options that you can export in
                a matter of seconds. You'll always have access to your important
                business insights thanks to activity statistics. Tworentals's
                seamless integration with Google Analytics is an added plus.
              </p>
              <p class="lead">
                A specialized workforce will be on hand to assist your guests 24
                hours a day, 7 days a week. Customers are not required to wait
                until your reception opens. They can get aid from Tworentals at
                any time of day or night, which is the ideal strategy to
                outperform your opponents.
              </p>
            </div>
            <div class="l-media__figure">
              <div class="figure">
                <div class="statistics__template -decoration">
                  <!-- here will be an icon -->
                  <div class="statistics__img">
                    <img src="/img/statistics.png" alt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section support">
          <div class="l-media l-media--initial page-wrap">
            <div class="l-media__content">
              <h3>Support</h3>
              <p class="lead">
                We value long-term partnerships with the clients with whom we
                collaborate. Our goal is to help you grow your bookings by
                giving you control over your property and booking management
                system. We make it simple for hotel and property owners to take
                advantage of innovative booking technologies.
              </p>
            </div>
            <div class="l-media__figure">
              <div class="figure">
                <div class="support__template -decoration">
                  <!-- here will be an icon -->
                  <div class="s-card s-card--primary -shadow">
                    <div class="s-card__icon">
                      &nbsp;
                    </div>
                    <h4 class="s-card__title">
                      Make the most of your properties
                    </h4>
                    <p class="s-card__description">
                      Set dynamic prices for your different unit types to
                      optimize your rentals.
                    </p>
                  </div>

                  <div class="s-card s-card--automation -shadow">
                    <div class="s-card__icon">
                      &nbsp;
                    </div>
                    <h4 class="s-card__title">
                      Sync Your Reservations
                    </h4>
                    <p class="s-card__description">
                      Synchronize Airbnb, Booking.com, Expedia and other
                      channels to your TwoRentals panel.
                    </p>
                  </div>

                  <div class="s-card s-card--workflow -shadow">
                    <div class="s-card__icon">
                      &nbsp;
                    </div>
                    <h4 class="s-card__title">
                      Permissions For Your Agents
                    </h4>
                    <p class="s-card__description">
                      Select permissions for your team members and allow them to
                      control your agency from the dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id="pricing" class="section section--pricing">
        <div class="page-wrap pricing">
          <h2>TwoRentals Pricing</h2>
          <p class="lead pricing__lead">
            With a {{ trial }}-day free trial, you can get started right away.
            Do you like it? You are free to use Tworentals without any limits,
            commitments, or hidden fees. You'll never pay for more than you need
            or use with the opportunity to pay as you go.
          </p>

          <div class="plan">
            <div class="plan__cards">
              <div
                id="basic-card"
                class="card -shadow"
                :class="{ 'card--selected': plan === 'basic' }"
                @click="plan = 'basic'"
              >
                <h4 class="card__heading">
                  Basic Package
                </h4>
                <ul class="advatanges -list-reset">
                  <li class="advantages__item">
                    Full Booking Management System
                  </li>
                  <li class="advantages__item">
                    Intuitive Calendar
                  </li>
                  <li class="advantages__item">
                    Automated Invoicing
                  </li>
                  <li class="advantages__item">
                    Full Customer Support
                  </li>
                  <li class="advantages__item">
                    Reporting and Statistics
                  </li>
                  <li class="advantages__item">
                    User roles
                  </li>
                  <li class="advantages__item">
                    Owners panel
                  </li>
                </ul>

                <a
                  v-if="signupEnabled"
                  class="btn btn--primary card__btn"
                  data-cy="button-tryForFree"
                  :href="
                    '/sign-up/free-trial?hostel=' +
                      isHostel +
                      '&amp;plan=basic&amp;units=' +
                      units
                  "
                >7 days for Free</a>
                <a
                  v-else
                  class="btn btn--primary card__btn"
                  data-cy="button-tryForFree"
                  href="/demo-request/"
                >7 days for Free</a>
              </div>

              <div
                id="advanced-card"
                class="card -shadow"
                :class="{ 'card--selected': plan === 'advanced' }"
                @click="plan = 'advanced'"
              >
                <h4 class="card__heading">
                  Advanced package
                </h4>

                <div class="advanced-price">
                  {{ currency }} 10 <span>/ unit</span>
                </div>

                <ul class="advatanges -list-reset">
                  <li class="advantages__item">
                    All features from Basic plan
                  </li>
                </ul>
                <div class="ico-plus">
                  &plus;
                </div>
                <ul class="advatanges -list-reset">
                  <li class="card__subheading advantages__item">
                    Channel Manager
                  </li>
                </ul>
                <ul class="advatanges -list-reset">
                  <li class="advantages__item">
                    Ensure real-time availability with seamless integration
                    across all channels.
                  </li>
                  <li class="advantages__item">
                    No more overbookings. No more headaches.
                  </li>
                </ul>

                <a
                  class="btn btn--primary card__btn"
                  data-cy="button-quote"
                  :href="
                    'mailto:' +
                      email +
                      '?subject=' +
                      quoteSubject +
                      '&body=' +
                      quoteMessage
                  "
                >Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- End All Content in page -->

    <!-- Footer -->
    <div class="page-footer">
      <div class="page-wrap">
        <aside class="prefooter">
          <div class="prefooter__content">
            <h4 class="prefooter__heading h3">
              Grow your Vacation Rental with TwoRentals
            </h4>
            <p class="prefooter__description">
              Your {{ trial }}-day free trial awaits.
            </p>
            <p class="prefooter__description">
              There’s nothing to lose - try it now!
            </p>
          </div>
          <div class="prefooter__content-cta">
            <a
              v-if="signupEnabled"
              class="btn btn--primary btn--arrow"
              data-cy="button-signup"
              href="/sign-up/free-trial"
            >Get Started</a>
            <a
              v-else
              class="btn btn--primary btn--arrow"
              data-cy="button-signup"
              href="/demo-request/"
            >Get Started</a>
          </div>
        </aside>
        <footer class="footer">
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

          <!-- <ul class="footer-nav__list socials -list-reset">
            <li>
              <a
                class="footer-nav__link social"
                href="https://www.facebook.com/tworentals/"
                target="_blank"
                title="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                  <title>Facebook</title>
                  <path
                    d="M13.12,0H1.87A1.87,1.87,0,0,0,0,1.87V13.12A1.88,1.88,0,0,0,1.87,15H7.5V9.84H5.62V7.5H7.5V5.62a2.81,2.81,0,0,1,2.81-2.81h1.88V5.16h-.94c-.52,0-.94,0-.94.46V7.5h2.35l-.94,2.34H10.31V15h2.81A1.88,1.88,0,0,0,15,13.12V1.87A1.88,1.88,0,0,0,13.12,0Z"
                    transform="translate(0 0)"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a class="footer-nav__link social" href="https://twitter.com/tworentals_hq" target="_blank" title="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15.99">
                  <title>Twitter</title>
                  <path d="M20,1.9a8.34,8.34,0,0,1-2.36.64A4.09,4.09,0,0,0,19.46.3a7.94,7.94,0,0,1-2.61,1,4.15,4.15,0,0,0-5.8-.17A4,4,0,0,0,9.86,5,11.77,11.77,0,0,1,1.4.75,4,4,0,0,0,2.67,6.14,4.05,4.05,0,0,1,.81,5.63v0a4.05,4.05,0,0,0,3.29,4,4,4,0,0,1-1.85.07,4.11,4.11,0,0,0,3.83,2.81A8.32,8.32,0,0,1,1,14.25a8.06,8.06,0,0,1-1-.06A11.75,11.75,0,0,0,6.3,16h0A11.49,11.49,0,0,0,18,4.51c0-.17,0-.34,0-.52A8.31,8.31,0,0,0,20,1.9Z" transform="translate(-0.01 -0.01)" />
                </svg>
              </a>
            </li>

            <li>
              <a
                class="footer-nav__link social"
                href="https://www.linkedin.com/company/tworentals/"
                target="_blank"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                  <title>LinkedIn</title>
                  <path
                    d="M0,15H3.74V5.26H0ZM1.83,3.7A1.85,1.85,0,1,0,0,1.85,1.84,1.84,0,0,0,1.83,3.7Zm9.48,1A3.62,3.62,0,0,0,8.24,6.36V5.26h-3V15h3V9.76c0-1.41.74-2.24,2-2.24S12,8.32,12,9.76V15h3V8.68C15,6,13.43,4.7,11.31,4.7Z"
                    transform="translate(0 -0.01)"
                  />
                </svg>
              </a>
            </li>
          </ul> -->

          <div class="footer__copy">
            <a href="/" class="logo">
              <img src="/img/logo-white-accent.svg" alt="TwoRentals">
            </a>
            <p class="footer__copyright">
              Copyright &copy; {{ date }} All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    trial: 7,
    email: 'hello@tworentals.com',
    quoteSubject: 'A quote request',
    quoteMessage:
      'Hello,\nI would like to know more about the advanced plan of TwoRentals.',
    date: new Date().getFullYear(),
    plan: 'basic',
    isHostel: false,
    units: 10,
    basicPricePerBed: 2,
    advancedPricePerBed: 4.0,
    basicPricePerUnit: 10.0,
    advancedPricePerUnit: 12.0,
    currency: '€',
    signupEnabled:
      Boolean(Number(process.env.NUXT_ENV_DEMO_REQUEST_ENABLED)) === false
  }),

  methods: {
    closeMenu () {
      document.getElementById('closeMenuIcon').click()
    },
    getPricePerUnit (units = 1) {
      let price = this.isHostel
        ? this.basicPricePerBed
        : this.basicPricePerUnit

      if (this.plan === 'advanced') {
        price = this.isHostel
          ? this.advancedPricePerBed
          : this.advancedPricePerUnit
      }

      return (price * units).toFixed(2)
    },

    getUnitType (units = 1) {
      if (this.isHostel) {
        if (units > 1) {
          return 'beds'
        }
        return 'bed'
      }

      if (units > 1) {
        return 'units'
      }
      return 'unit'
    }
  }
}
</script>

<style scoped lang="scss">
h1,
h2,
h3,
h4 {
  margin-top: 0;
}
.advanced-price {
  font-size: 40px;
  font-weight: 600;
}
.advanced-price span {
  font-size: 20px;
  font-weight: 500;
}
/* [ range slider ] */
.range {
  position: relative;
  max-width: 1050px;
  margin: auto;
}
.range input[type="range"] {
  appearance: none;
  padding: 0;
  width: 99.4%;
  height: 22px;
  cursor: pointer;
  display: block;
  background: transparent;

  @media all and (max-width: 500px) {
    width: 98%;
  }
}

.range input[type="range"]:focus {
  outline: none;
}
.range input[type="range"][disabled] {
  opacity: 0.3;
  cursor: default;
}
.range .rangeslider {
  position: relative;
  height: 22px;
  cursor: pointer;
  user-select: none;
}
.range .rangeslider::before {
  box-sizing: border-box;
  width: 100%;
  height: 5px;
  background: #e5e5e5;
  border-radius: 100px;
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.range input::-webkit-slider-runnable-track {
  box-sizing: border-box;
  width: 100%;
  height: 5px;
  background: #e5e5e5;
  border-radius: 100px;
  margin: 11px 0;
}
.range input::-moz-range-track {
  box-sizing: border-box;
  width: 100%;
  height: 5px;
  background: #e5e5e5;
  border-radius: 100px;
  margin: 11px 0;
}
.range input::-ms-track {
  box-sizing: border-box;
  width: 100%;
  height: 5px;
  background: #e5e5e5;
  border-radius: 100px;
  color: transparent;
  padding: 11px 0;
  background: transparent;
  border-color: transparent;
}
.range input::-ms-fill-lower,
.range input::-ms-fill-upper {
  box-sizing: border-box;
  width: 100%;
  height: 5px;
  background: #e5e5e5;
  border-radius: 100px;
}
.range input::-ms-fill-lower {
  background: #2e3192;
}
.range .rangeslider-fill-lower {
  background-color: #2e3192;
  border-radius: 100px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 5px;
  will-change: width;
}
.range input::-webkit-slider-thumb {
  box-sizing: border-box;
  box-shadow: 0px 4px 25px rgba(250, 181, 44, 0.3);
  border: 4px solid #2e3192;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  margin-top: 2.5px;
}
.range input::-moz-range-thumb {
  box-sizing: border-box;
  box-shadow: 0px 4px 25px rgba(250, 181, 44, 0.3);
  border: 4px solid #2e3192;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  background: #ffffff;
  cursor: pointer;
}
.range input::-ms-thumb {
  box-sizing: border-box;
  box-shadow: 0px 4px 25px rgba(250, 181, 44, 0.3);
  border: 4px solid #2e3192;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  background: #ffffff;
  cursor: pointer;
}
.range .rangeslider-thumb {
  box-sizing: border-box;
  box-shadow: 0px 4px 25px rgba(250, 181, 44, 0.3);
  border: 4px solid #2e3192;
  height: 30px;
  width: 30px;
  border-radius: 100px;
  background: #ffffff;
  cursor: pointer;
  position: absolute;
  touch-action: pan-x;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  will-change: left;
}
.range .range-output {
  position: absolute;
  left: 11px;
  top: 11px;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  transition: -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.range .range-output .output {
  display: block;
  position: absolute;
  height: 60px;
  line-height: 60px;
  min-width: 32px;
  padding: 0 20px;
  top: -29px;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
  background: #383c42;
  color: #fff;
  border-radius: 100px;
  white-space: nowrap;
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
}
.range .range-output .output::before {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  border: 10px solid #383c42;
  border-bottom: none;
  border-left-color: transparent;
  border-right-color: transparent;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.range__values {
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 3rem 1rem;
  @media all and (max-width: 500px) {
    margin: 3rem 0 3rem 2rem;
  }
}
/* [ switch label ] */
.switch {
  position: relative;
  height: 4.8em;
  /*width: 450px;*/
  max-width: 22em;
  margin: 2rem auto;
  background-color: #f3f6f8;
  user-select: none;
}
.switch,
.switch-selection {
  border-radius: 4.8em;
}
.switch-label {
  color: #909fb0;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  float: left;
  width: 50%;
  line-height: 4.8em;
  cursor: pointer;
}
.switch-input {
  visibility: hidden;
  position: absolute;
}
.switch-selection {
  position: absolute;
  z-index: 1;
  top: 0.2em;
  bottom: 0.2em;
  left: 0.2em;
  display: block;
  width: 50%;
  background-color: #2e3192;
  transition: left 0.15s ease-out;
}
.switch-input:checked + .switch-label {
  color: #ffffff;
  transition: 0.15s ease-out;
  transition-property: color, text-shadow;
}
.switch-input:checked + .switch-label-on ~ .switch-selection {
  left: 10.8em;
  /* Note: left: 50%; doesn't transition in WebKit */
}
@media (min-width: 1024px) {
  .switch {
    font-size: 1.8rem;
    width: 26em;
  }
  .switch-label {
    letter-spacing: 3px;
  }
  .switch-input:checked + .switch-label-on ~ .switch-selection {
    left: 12.8em;
    /* Note: left: 50%; doesn't transition in WebKit */
  }
}
</style>
