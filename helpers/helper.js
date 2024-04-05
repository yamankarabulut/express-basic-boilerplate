let CronJob = require("cron").CronJob;

exports.cron = async () => {
    let getWhiteListedCFIPs = new CronJob(
        "00 00 12 * * *", //everyday 12pm
        async function () {
        
            // do stuff


        }, // the job
        null, // onComplete
        true, // start - means if set to false you must ###.start() the job
        // 'America/Los_Angeles' // timeZone
    );
    getWhiteListedCFIPs.start()
  }