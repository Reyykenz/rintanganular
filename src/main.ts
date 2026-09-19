
// const tubuhUlar = [
//   {
//     x: 100,
//     y: 100
//   }
// ];
// const apel = {
//   x: 380,
//   y: 380
// };
// let panjangUlar: number = 1;

// if (
//   tubuhUlar[0].x === apel.x &&
//   tubuhUlar[0].y === apel.y
// ) {
//   panjangUlar = panjangUlar + 1;
//   console.log("Apel Dimakan");
//   console.log("Panjang Ular: ", panjangUlar);
//   apel.x = Math.floor(Math.random() * 400);
//   apel.y = Math.floor(Math.random() * 400);

//   console.log("posisi Apel baru: ", apel.x, apel.y);
// };
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

let playerX: number = 0;
let playerY: number = 370;
let apelX: number = 300;
let apelY: number = 50;
let rintanganX: number = 130;
let rintanganY: number = 170;

const playerSize: number = 30;
const apelSize: number = 20;
const rintanganSize: number = 25;
const rintangan2Size: number = 150;
const namaPemain: string = "Sanz";


let GameOver: boolean = false;
let score: number = 0;

ctx.fillStyle = "green";
ctx.fillRect(
  playerX,
  playerY,
  playerSize,
  playerSize
);
console.log("Posisi X: ", playerX);
console.log("Posisi Y: ", playerY);
console.log("GameOver : ", GameOver);
console.log("Score : ", score);

ctx.fillStyle = "darkred";
ctx.fillRect(apelX, apelY, apelSize, apelSize);

ctx.fillStyle = "brown";
ctx.fillRect(rintanganX, rintanganY, rintangan2Size, rintanganSize);
// ctx.fillStyle = "green";
// ctx.fillRect(
//   100,
//   100,
//   20,
//   20);

//   ctx.fillStyle = "red";
//   ctx.fillRect(
//   apel.x,
//   apel.y,
//   20,
//   20);

