<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FilmGenres'
}
</script>

<style scoped>
div {
  color: wheat;
  margin-left: .5vw;
}
@media (max-width: 1199px) {
  div {
    font-size: smaller;
  }
}
</style>