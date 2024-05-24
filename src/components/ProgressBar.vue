<template>
  <div class="progress-bar-container">
    <div class="progress-bar">
      <div class="sections">
        <div class="section"></div>
        <div class="section"></div>
        <div class="section"></div>
        <div class="section"></div>
        <div class="section"></div>
        <div class="section"></div>
        <div class="section"></div>
      </div>
      <div class="arrow" :style="{ left: arrowPosition + '%' }"></div>
    </div>
    <div class="labels">
      <span
        v-for="(section, index) in sections"
        :key="index"
        class="label"
        :style="{ left: `calc(${section.start + section.width / 2}% - 1.5vw)` }"
      >
        {{ section.label }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    sections() {
      return [
        { label: 'G', color: '#FF0000', start: 0, width: 20 },  // Red
        { label: 'F', color: '#FF4000', start: 20, width: 15 },
        { label: 'E', color: '#FF8000', start: 35, width: 15 },
        { label: 'D', color: '#FFBF00', start: 50, width: 15 },
        { label: 'C', color: '#FFFF00', start: 65, width: 15 },  // Yellow
        { label: 'B', color: '#BFFF00', start: 80, width: 10 },
        { label: 'A', color: '#00FF00', start: 90, width: 10 }   // Green
      ];
    },
    arrowPosition() {
      // Calcular la posición de la flecha dentro de la barra de progreso
      return this.value;
    }
  }
};
</script>

<style scoped>
.progress-bar-container {
  margin-top: 10%;
  margin-left: 10%;
  width: 80%;
  position: relative;
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10%;
}

.sections {
  display: flex;
  height: 100%;
}

.section {
    height: 100%;
  }
  .section:nth-child(1) {
    background-color: #FF0000;
    width: 20%;
  }
  .section:nth-child(2) {
    background-color: #ff5d27;
    width: 15%;
  }
  .section:nth-child(3) {
    background-color: #ff8d1c;
    width: 15%;
  }
  .section:nth-child(4) {
    background-color: #FFBF00;
    width: 15%;
  }
  .section:nth-child(5) {
    background-color: #FFFF00;
    width: 15%;
  }
  .section:nth-child(6) {
    background-color: #BFFF00;
    width: 10%;
  }
  .section:nth-child(7) {
    background-color: #00FF00;
    width: 10%;
  }

.labels {
  position: relative;
  width: 100%;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  margin-left: 7%;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  font-size: 1rem;
}

.label {
  position: absolute;
  transform: translateX(-50%);
  background-color: rgb(61, 61, 61);
  color: white;
  border-radius: 50%;
  width: 1.5vw;
  height: 1.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  position: absolute;
  margin-bottom: 5.8%;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid black;
  transform: translateX(-50%);
}
</style>
