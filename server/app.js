import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const router = express.Router();

const __filename = fileURLToPath(import.meta.url); // Get the current file's path
const __dirname = path.dirname(__filename); // Get the directory name

config({ path: "./config.env" });

app.use(
  cors({
    // origin: [process.env.FRONT_END_URL],
    // origin: ["http://localhost:5173"], // Adjust as needed
    // methods: ["POST"],
    // credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email sending endpoint
router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(
      res.status(400).json({
        success: false,
        message: "Please provide all details",
      })
    );
  }
  try {
    await sendEmail({
      email: "arktuber7566@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Use the API router
app.use(router);

// // Serve static files
// app.use(express.static(path.join(__dirname, '../client/dist')));

// // Serve the React app for any unmatched routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
// });

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
