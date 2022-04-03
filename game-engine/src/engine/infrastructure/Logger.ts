export enum LogLevel {
    ERROR,
    WARNING,
    CRITICAL,
    INFO,
    DEBUG
}

export default class Logger {

    static from(source: string): Logger {
        return new Logger(source);
    }

    private readonly _source: string;

    constructor(source: string) {
        this._source = source;
    }

    log(level: LogLevel, msg: string): void {
        const timeStamp = this._timeStamp();
        const levelName: string = LogLevel[level];
        const logLine: string = `${timeStamp} ${this._source} [${levelName}]: ${msg}`;
        console.log(logLine);
    }

    error(msg: string) { this.log(LogLevel.ERROR, msg);}
    warning(msg: string) { this.log(LogLevel.WARNING, msg);}
    critical(msg: string) { this.log(LogLevel.CRITICAL, msg);}
    info(msg: string) { this.log(LogLevel.INFO, msg);}
    debug(msg: string) { this.log(LogLevel.DEBUG, msg);}

    private _timeStamp(): string {
        let now = new Date(Date.now());
        return `[${now.toLocaleDateString()} ${now.toLocaleTimeString()}]`;
    }
}