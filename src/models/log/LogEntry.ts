import fs from 'fs';

import { logFilePath, TIMEZONE } from '../../config/general';

export class LogEntry {
  static write(message: string) {
    const date = new Date();
    // Format timestamp in ISO 8601 with timezone
    const isoTimestamp = new Date(
      date.toLocaleString('en-US', { timeZone: TIMEZONE })
    ).toISOString();
    const logLine = `[${isoTimestamp}] ${message}\n`;
    fs.appendFileSync(logFilePath, logLine, { encoding: 'utf8' });
  }
}
