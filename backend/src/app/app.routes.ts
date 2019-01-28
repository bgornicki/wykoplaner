import healthApi from "../routes/health/health.routes";
import settingsApi from "../routes/settings/settings.routes";

function routes(app:any) {
    app.use('/health', healthApi);
    app.use('/settings', settingsApi);
}

export default routes;
