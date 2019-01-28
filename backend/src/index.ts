import app from './app/app';

import { listenOnPort } from './helpers/listenOnPort';

listenOnPort(app, 3000);