import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
export class JogadoresValidacaoParametrosPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
    if(!value){
        throw new BadRequestException (`O valor do parametro deve ser informado`)
    }
        return value;
    }
}
