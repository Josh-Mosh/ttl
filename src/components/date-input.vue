<script type="text/javascript" src="./date-input.js"></script>

<template>
  <md-input
    ref="input"
    v-bind:value="value"
    v-on:input="updateValue($event)"
  ></md-input>
</template>