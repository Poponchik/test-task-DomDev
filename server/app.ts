import express from "express";

const app = express();
const PORT = 3000;

//@ts-ignore
app.listen(PORT, (error: any) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
