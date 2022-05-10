import type { NextApiRequest, NextApiResponse } from 'next'
import { registerFont,createCanvas, loadImage } from 'canvas';
const path = require('path');

const createOgp = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { id } = req.query;
  //
  const WIDTH = 1200 as const;
  const HEIGHT = 840 as const;
  const WIDTH2 = 430 as const;
  const HEIGHT2 = 580 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const DX2 = 25 as const;
  const DY2 = 25 as const;
  const RAW_CNT = 20; //一行あたりの文字数
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle = 'rgb( 255, 0, 0)';
  ctx.fillRect(DX, DY, WIDTH, HEIGHT);

  const commodityImage =  await loadImage("https://ecdnimg.toranoana.jp/ec/img/04/0030/97/71/040030977123-1p.jpg");
  ctx.drawImage(commodityImage, DX2, DY2, WIDTH2, HEIGHT2);
  registerFont(path.resolve("./fonts/MochiyPopPOne-Regular.ttf"), {
    family: "ipagp",
  });
  ctx.fillStyle = "#FFF";
 // ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.font = "70px ipagp";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const title = "えふじーおー幼稚園\n 総集編";
  //入力文字を1文字毎に配列化
	const aryText = title.split('');
  ctx.fillText(title, WIDTH / 1.4, HEIGHT / 2.5);
  const circle = "【RRR(りおし)】";
  ctx.font = "40px ipagp";
  ctx.fillText(circle, WIDTH / 1.4, HEIGHT / 4);
  const genre = "Fate/Grand Order";
  ctx.font = "30px ipagp";
  ctx.fillText(genre, WIDTH / 1.4, HEIGHT / 1.4);
  const buffer = canvas.toBuffer();
  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
}

export default createOgp;
