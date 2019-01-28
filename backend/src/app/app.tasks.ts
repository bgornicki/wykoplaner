import { CronJob } from 'cron';

function tasks() {
    console.log(" * Statistics module initialized");
    
    new CronJob('00 00 * * *', () => {}, null, true, 'Europe/Warsaw');
}

export default tasks;