// types.d.ts
import { Request } from 'express';

declare global {
    namespace Express {
        interface CustomRequest extends Request {
            // Define any custom properties if needed
        }
    }
}

interface CustomFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
}

export { CustomFile };
