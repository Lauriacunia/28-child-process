import express from "express";
import { exec } from "child_process";
import { stdout, stderr } from "process";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**routes */
import indexRoutes from "./src/routes/indexRoutes.js";
app.use("/", indexRoutes);

/** 💡 Métodos del objeto process 
process.exit(); //Cierra el proceso

// documentacion: https://nodejs.org/api/process.html
process.on("exit", () => {
  console.log("Se ha cerrado el proceso");
}); //Se ejecuta cuando el proceso se cierra

process.on("beforeExit", () => {
    console.log("Se va a cerrar el proceso");
});
*/
/** 💡 Métodos de child process */
// exec("ls", (err, stdout, stderr) => {
//   if (err) {
//     console.log(err);
//   }
//   if (stderr) {
//     console.log(stderr);
//   }
//   console.log(stdout);
// });

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(
    `🚀 Server started on port ${PORT} at ${new Date().toLocaleString()}`
  )
);
server.on("error", (err) => console.log(err));
