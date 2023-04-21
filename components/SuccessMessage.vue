<template>
  <div class="auth__success">
    <h1>Thank you for your registration!</h1>
    <p>An activation link will be sent to your specified email address shortly. Please follow this link to activate your account.</p>
    <a href="/">Countinue to tworentals.com</a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.auth__success {
  text-align: center;

  h1 {
    margin: 1em 0 0.8em;
  }
}

h1::before {
  content: '\2713';
  display: block;
  margin: 0 auto 1em;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  line-height: 1;
  padding: 1em;
  color: #69bbaa;
  background-color: rgba($color: #69bbaa, $alpha: 0.2);
}
</style>
