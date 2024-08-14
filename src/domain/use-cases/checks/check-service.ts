import { LogEntity, LogEntityOptions, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) { }
    async execute(url: string): Promise<boolean> {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error on check service ${url}`);
            }

            const logOptions: LogEntityOptions = {
                message: `Service ${url} working`,
                level: LogSeverityLevel.low,
                origin: 'check-service.ts'
            };

            const log = new LogEntity(logOptions)
            this.logRepository.saveLog(log)
            this.successCallback();

            return true
        } catch (error) {
            const errorMessage = `${error}`
            const logOptions: LogEntityOptions = {
                message: errorMessage,
                level: LogSeverityLevel.high,
                origin: 'check-service.ts'
            };

            const log = new LogEntity(logOptions)
            this.logRepository.saveLog(log)
            this.errorCallback(`${errorMessage}`);
            return false
        }
    }
}