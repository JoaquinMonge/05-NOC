import { SendEmailLogs } from "../domain/use-cases/email/send-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from "./cron/cron.service"
import { EmailService } from './email/email.service';


const fileSystemRepository = new LogRepositoryImpl(
    new FileSystemDataSource()

)

const emailService = new EmailService();


export class Server {
    public static start() {

        console.log('server started');

        new SendEmailLogs(emailService, fileSystemRepository).execute('joamokjbnaskjsaanb@gmail.com')


        // CronService.createJob('*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com'
        //         new CheckService(fileSystemRepository, () => console.log(`${url} is ok`), (error) => console.log(error)).execute(url)
        //         // new CheckService().execute('http://localhost:3000')
        //     });

    }
}
