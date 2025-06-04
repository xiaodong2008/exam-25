<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <p>This is the main page of the application.</p>
    <RouterLink to="/english/vocab">Go to English Vocab</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
