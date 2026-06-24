import path from "path";
import { fileURLToPath } from "url";
import Produto from "../models/Produto.js";
import sequelize from "./database.js";

export async function initData() {
  await sequelize.sync({force: true});

  await Produto.create({
    nome: "Apego dos mortos",
    url_img: "https://i.imgur.com/wSkhxle.jpeg",
    desc: "Essa poção permite a visão dos que já foram. Cuidado, talvez você vá também.",
    val: "20000 moedas" 
  });

  await Produto.create({
    nome: "Poção de jade",
    url_img: "https://epiccarry.com/wp-content/uploads/2025/11/jade-flask-4.webp",
    desc: "Essa poção da ao usário a capacidade de ver minérios raros e joias valiosas de qualquer lugar. Possivelmente limita a visão somente a isto.",
    val: "100000 moedas"
  });

  await Produto.create({
    nome: "Poção da velocidade",
    url_img: "https://epiccarry.com/wp-content/uploads/2025/11/sapphire-flask-5.webp",
    desc: "Essa poção permite que o você corra em uma velocidade aleatória com uma distribuição uniforme de -20 a 1000 km/h.",
    val: "1000 moedas"
  });

  await Produto.create({
    nome: "🧪 Poção Blue Sky",
    url_img: "https://i.ibb.co/ZzS7xb2/rsz-sky.png",
    desc: "Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.",
    val: "300 moedas"
  });

  await Produto.create({
    nome: "🌸 Poção do Perfume Misterioso",
    url_img: "https://i.ibb.co/pyhZJXf/rsz-lilas.png",
    desc: "Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.",
    val: "200 moedas"
  });

  await Produto.create({
    nome: "🌲 Poção de Pinus",
    url_img: "https://i.ibb.co/DkzdL1q/rsz-pinus.png",
    desc: "Essa poção faz com que você fique 10 cm mais alto! Observação: efeitos colaterais desconhecidos.",
    val: "3000 moedas"
  });

  await Produto.create({
    nome: "💀 Poção da Beleza Eterna",
    url_img: "https://i.ibb.co/9p872NK/rsz-1beleza.png",
    desc: "Veneno que mata rápido.",
    val: "100 moedas"
  });

  await Produto.create({
    nome: "🌈 Poção do Arco Íro",
    url_img: "https://i.ibb.co/PrC09MP/rsz-2unicornio.png",
    desc: "Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.",
    val: "120 moedas"
  });

  await Produto.create({
    nome: "🔮 Caldeirão das Verdades Secretas",
    url_img: "https://i.ibb.co/s9Lyvj8/rsz-verdades.png",
    desc: "As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.",
    val: "150 moedas"
  });
}
