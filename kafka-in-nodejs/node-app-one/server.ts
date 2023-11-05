import express from "express";

export const server: express.Application = express();

server.listen(6000, () => console.log(`Server is running on port 6000...`));
