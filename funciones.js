document.getElementById("text_one").innerHTML = "<h1>Ibeth Ortega</h1>"
document.getElementById("text_two").innerText = "<h1>Ibeth Ortega</h1>"

//librerias por  ejemplo sweetAlert2
Swal.fire({
    icon:'success',
    title: 'Ibeth Ortega',
    text: 'Estudiante de la UFPSO',
    footer: name,
    timer: 4000
});
//declaracion de variables
let number_one = 10;
let number_two = 5.5;
//string
let text = "soy un texto";
//booleanos
let boolean = true;
//array
let array_num =[1,2,3,4,5];

let array_mixto=[1.5,"a",10,"b"];
let array_mul=[
    {name:"ibeth",lata_name:"ortega",age:19},
    {name:"vero",lata_name:"sanchez",age:20},
    {name:"maye",lata_name:"araque",age:23},
    {name:"dariana",lata_name:"rojas",age:26}
];

//operaciones basicas
// suma
var resta= number_one + number_two;
console.log("Suma = "+ resta);
// resta
var suma= number_one - number_two;
console.log("Resta = "+suma);
//multiplicacion
var multiplicacion = number_one * number_two;
console.log("Multiplicacion = "+ multiplicacion);
//division
var division= number_one / number_two;
console.log("Division = "+ division);
division=division.toFixed(2);
//modulo
var modulo= number_one % number_two;
console.log("Modulo = "+ modulo);

console.log(
"Suma"  + suma + "\n"+
    "Resta"  + resta + "\n"+
    "Multiplicacion"  + multiplicacion + "\n"+
    "Division" + division+ "\n"+
    "Modulo"  + modulo
)

respuesta = "Suma"  + suma + "Resta"  +resta + "Multiplicacion"  + multiplicacion + "Division" + division+ "Modulo"  + modulo

Swal.fire({
    icon:'success',
    title: 'Resultados',
    html: respuesta
});
