import * as express from "express";
import ping from "./routes/ping";

const postsPostedApi: express.Router = express.Router();

postsPostedApi.get('/ping', ping.middleware, ping.handler);

export default postsPostedApi;