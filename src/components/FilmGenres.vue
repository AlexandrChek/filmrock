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

<style scoped lang="scss">
div {
  color: wheat;
  margin-left: .5vw;
  @media (max-width: 1199px) {
    font-size: smaller;
  }
}
</style>