<template>
  <Structure v-bind="details" />
</template>

<script>
import Structure from '../components/Structure'

export default {
  name: "FillForm",
  components: {
    Structure
  },
  data () {
    return {
      details : {
        title : 'NCS Chatbot',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin quam at nunc aliquam ullamcorper. In id volutpat nunc. Vestibulum elementum et dui eget vehicula. Quisque consequat feugiat lectus, sed tempus tortor. Vestibulum sed varius nibh. Curabitur porta lorem vel erat vulputate, posuere pharetra enim tincidunt.'
      }
    }
  }
};
</script>
