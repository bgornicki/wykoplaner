import * as express from "express";
import modify from "./routes/modify";
import get from "./routes/get";

const settingsApi: express.Router = express.Router();

settingsApi.get('/', get.middleware, get.handler);
settingsApi.put('/', modify.middleware, modify.handler);

export default settingsApi;