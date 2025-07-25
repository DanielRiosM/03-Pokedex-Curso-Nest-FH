import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
    catch(exception: MongoError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        if (exception.code === 11000) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message: `Duplicate key error: ${JSON.stringify((exception as any).keyValue)}`
            });
        }

        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
    }
}