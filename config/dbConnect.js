// const mongoose = require("mongoose");

// const dbConnect = () => {
//   mongoose
//     .connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then((data) => {
//       console.log(` mongodb connected with server: ${data.connection.host}`);
//     })
//     .catch((err) => {
//       console.log("Error connecting to db");
//       console.log(err);
//       process.exit();
//     });
// };

// module.exports = dbConnect;

const mongoose = require("mongoose");

mongoose.set("strictQuery", true); // ou false, conforme a mensagem

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conectado ao MongoDB com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao conectar no MongoDB:", err);
    });
};

module.exports = dbConnect;
