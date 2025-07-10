import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import path from "path";

const app = express();

// cors 설정
app.use(cors());

// env 설정
const __dirname = path.resolve();
dotenv.config({
  path: __dirname + "/.env",
});

// 프론트에서 받은 json 형태의 데이터를 객체로 파싱(변황)하여 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 테스트용 API
app.get("/test", async (req, res) => {
  try {
    res.json({ data: "Chutzrit" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/message", async (req, res) => {
  const message = req.body.message;
  console.log("🚀 ~ app.post ~ message:", message);
  try {
    res.json({
      id: Date.now(),
      message: message,
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 8080;

app.listen(port);
