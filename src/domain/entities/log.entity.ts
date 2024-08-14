
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export interface LogEntityOptions {
    message: string,
    level: LogSeverityLevel
    origin: string;

    createdAt?: Date
}

export class LogEntity {
    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;


    constructor(options: LogEntityOptions) {

        const { message, level, origin, createdAt = new Date() } = options;
        this.message = message;
        this.level = level;
        this.origin = origin;
        this.createdAt = createdAt;


        this.createdAt = new Date();
    }

    static fromJson(json: string): LogEntity {
        const { message, level, createdAt, origin } = JSON.parse(json);

        const log = new LogEntity({ message, level, createdAt, origin });
        log.createdAt = new Date(createdAt);

        return log;
    }
}