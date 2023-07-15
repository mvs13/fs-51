import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      let extMessage = '';
      error.details.forEach((item) => {
        extMessage += '\n- ' + item.message;
      });
      throw new BadRequestException('Validation failed.' + extMessage);
    }
    return value;
  }
}
