import express from "express";

export const server: express.Application = express();

server.listen(6001, () => console.log(`Server is running on port 6001...`));
