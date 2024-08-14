import { envs } from "../config/plugins/envs.plugins";
import { LogDataSource } from "../domain/datasources/log.datasource";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service"
import { EmailService } from './email/email.service';


const fileSystemRepository = new LogRepositoryImpl(
    new FileSystemDataSource()

)


export class Server {
    public static start() {
        console.log('server started');

        // const emailService = new EmailService();

        // emailService.sendEmailWithFileSystemLogs('joamonb@gmail.com')

        //Mandar email



        // CronService.createJob('*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com'
        //         new CheckService(fileSystemRepository, () => console.log(`${url} is ok`), (error) => console.log(error)).execute(url)
        //         // new CheckService().execute('http://localhost:3000')
        //     });

    }
}
