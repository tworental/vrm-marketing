<template>
  <div>
    <div class="page-wrap">
      <a class="logo logo--header" href="/">
        <img src="/img/logo-color.svg" alt="TwoRentals">
      </a>
      <main class="main -shadow">
        <article>
          <Nuxt />
        </article>
      </main>
    </div>

    <footer class="footer">
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
</template>

<script>
export default {
  data: () => ({
    date: new Date().getFullYear()
  })
}
</script>

<style lang="scss" scoped>
::v-deep {
  .logo--header {
    margin: 3rem auto;
  }
  .page-wrap {
    max-width: 980px;
  }
  .main {
    padding: 3em;
    margin: 2em 0;
    border-radius: 1rem;
  }
  h1 {
    font-size: 4.8rem;
    text-align: center;
    margin-top: 0.5rem;
  }
  .footer {
    color: #ffffff;
    background-color: #2b2b2b;
    padding: 3rem 0;
  }
  .footer__copy {
    margin: 0 auto;
  }
  .logo-text {
    fill: currentColor;
  }
}
</style>
