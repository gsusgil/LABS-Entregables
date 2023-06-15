class Chronometer {
  constructor() {
    this.currentTime = 0 ;
    this.intervalId = null
  }

  start() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return '0' + value;
      // extra layer of seguridad
    } else {
      return '' + value;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutos = this.computeTwoDigitNumber(this.getMinutes());
    let segundos = this.computeTwoDigitNumber(this.getSeconds());
    // Return  "mm:ss_"

    // RETURN CON DEPENDENCIA DE VARIABLES DE MINUTOS + SEGUNDOS
    return `${minutos}:${segundos}`;

    // Return mas implicito sin dependencia de variables
    // return `${this.computeTwoDigitNumber(
    //   this.getMinutes
    // )}${this.computeTwoDigitNumber(this.getSeconds)}`;

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
