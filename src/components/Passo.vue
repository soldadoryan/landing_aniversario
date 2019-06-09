<template>
  <div class="wrap-passo">
    <div class="container-fluid f-h">
      <div class="row f-h">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}

</script>

<style lang="scss">
  .wrap-passo {
    height: 100%;
    background-color: #434bdf;

    .f-h {
      height: 100%;
    }
  }
</style>
