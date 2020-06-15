<template>
  <div class="overlay">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Spinner',
});
</script>

<style lang="scss">
.overlay {
  background-color: rgba(255, 255, 255, 0.788);
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 20;
  justify-content: center;
  align-items: center;
    & .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    & div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid rgb(221, 12, 12);
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: rgb(221, 12, 12) transparent transparent transparent;
      &:nth-child(1) {
        animation-delay: -0.45s;
      }
      &:nth-child(2) {
        animation-delay: -0.3s;
      }
      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
