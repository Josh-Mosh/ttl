<script type="text/javascript">
  export default {
    name: 'formatted-date',
    props: ['day']
  };
</script>

<template>
  <span>
      <span v-if="day">{{ day.month }}/{{ day.day }}/{{ day.year }}</span>
      <span v-else>Select Day</span>
  </span>
</template>