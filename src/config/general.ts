// General configuration for log file path
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const defaultLogPath = path.resolve(__dirname, '../logs/static.log');
export const logFilePath = process.env.LOG_FILE_PATH || defaultLogPath;

export const TIMEZONE = process.env.TIMEZONE || 'UTC';
