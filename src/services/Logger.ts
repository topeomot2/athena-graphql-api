import * as bunyan from 'bunyan';

const logLevel: bunyan.LogLevel = process.env.LOG_LEVEL ? (process.env.LOG_LEVEL as bunyan.LogLevelString) : 'debug';
const logger = bunyan.createLogger({
  level: logLevel,
  name: process.env.LOG_NAME || 'who-stats-api',
});

export default logger;
