import { config } from "dotenv";
import app from "./app";

config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Express listening on prot ${PORT}`));

export default app;