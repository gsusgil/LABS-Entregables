//iteracion N1 names & inputs

console.log("¡Estoy listo!");

const hackerOne = "Jesus";
console.log("El nombre del controlador es " + hackerOne); 

const hackerTwo = "Armando"
 console.log("El nombre del navegante es " + hackerTwo);

 //iteracion N2 Conditionals
 
 
 if (hackerOne.length > hackerTwo.length) {
   console.log(`El conductor tiene el nombre más largo, tiene ${hackerOne.length} caracteres.`);
 } else if (hackerOne.length < hackerTwo.length) {
   console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hackerTwo.length} caracteres.`);
 } else {
   console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hackerOne.length} caracteres!.`);
 }

// Iterecacion 3 loops

let spaceWord = "";
for (let i = 0; i < hackerOne.length; i++){
    spaceWord += hackerOne[i].toUpperCase () + " ";
}
console.log(spaceWord);

let navigator = hackerTwo.split("");
let turned = navigator.reverse ();
let change = turned.join("");
// Usando `for` para colocarlo en Mayusculas y separado.
let spacing = "";
for (let i = 0; i < change.length; i++){
    spacing += change[i].toUpperCase () + " ";
}
console.log(change);
console.log(spacing);


if (hackerOne.localeCompare(hackerTwo) === -1) {
    console.log(`El nombre del conductor va primero en orden lexicográfico.`);
  } else if (hackerOne.localeCompare(hackerTwo) === 1) {
    console.log(`El nombre del navegante va primero en orden lexicográfico.`);
  } else {
    console.log(`Ambos nombres están en el mismo lugar en el orden lexicográfico.`);
  }

//bonus N1

  let LoremOne = (`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et sodales tellus, malesuada laoreet massa. Quisque a libero vitae erat tincidunt condimentum sit amet ut justo. Vivamus finibus nisi at tellus tincidunt rutrum. Quisque posuere a eros porta placerat. Praesent pharetra nunc turpis, eu rutrum sem pellentesque sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer elit quam, facilisis eget porta lobortis, finibus eu enim. Nam convallis augue nec purus accumsan placerat. Suspendisse facilisis lacinia erat sit amet condimentum. Morbi interdum sapien felis, eu lobortis lectus vestibulum eget. Nulla pulvinar tempus urna id viverra. Nulla sagittis sapien tortor, at finibus felis pellentesque in.

  Curabitur faucibus libero quis ipsum lobortis, sed viverra libero tristique. Duis pellentesque lorem condimentum tellus auctor facilisis. Sed malesuada ultricies nibh, et finibus massa tempor ac. Sed tellus tortor, maximus at pellentesque sed, ornare in odio. Maecenas ultricies dui eros. Cras velit neque, dignissim sit amet malesuada id, sodales vel sapien. Nulla eget justo rhoncus, accumsan velit sed, bibendum libero. Cras dictum volutpat sapien eu suscipit. Nunc sodales ante sed libero lobortis luctus. Etiam rhoncus ac tortor a pulvinar. Phasellus finibus elementum gravida. Aenean in pulvinar diam.
  
  Mauris viverra ornare tincidunt. Mauris ultricies, lacus id venenatis ultrices, tellus diam vulputate diam, sit amet volutpat lectus ante a justo. Duis eget enim at libero sagittis tincidunt. Suspendisse vestibulum non nisl quis convallis. In nunc enim, rutrum nec sapien sed, sodales vestibulum metus. Donec molestie mollis nulla posuere mattis. Nulla velit arcu, vestibulum vitae aliquet vel, placerat vel nulla. Fusce pellentesque libero sit amet tortor tincidunt sagittis. Donec ut iaculis magna. Fusce elementum dui urna, quis dapibus orci accumsan aliquet. Etiam aliquam eu libero porttitor blandit. Duis ac ultrices erat, et laoreet tellus. Donec rutrum vehicula pharetra. Aliquam sit amet viverra est. Praesent et ornare diam.`)

  let wordCount = LoremOne.split ('');
  let numberWord = wordCount.length;
  console.log(numberWord);

  function contar() {
    let wordBreak = Array.from(LoremOne)
    let contador = 0
    // console.log(wordBreak)
    for( i = 0; i < wordBreak.length; i++) {
      if(wordBreak[i] === "et") {
        contador++
      }else{
      }
    }
    return contador
  }
  
  console.log(contar())

  