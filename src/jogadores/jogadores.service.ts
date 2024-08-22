import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtios/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class JogadoresService {

    private jogadores: Jogador[] = [];
    private readonly logger = new Logger(JogadoresService.name);
    
    async criarAtualizarJogador(criarJogadorDto:CriarJogadorDto):Promise<void> {
        this.logger.log(criarJogadorDto);
        this.criar(criarJogadorDto);
    }

    private criar(criarJogadorDto:CriarJogadorDto): void {
        const { name,phoneNumber,email } = criarJogadorDto;
        const jogador: Jogador = {
            _id: uuidv4(),
            name,
            phoneNumber,
            email,
            ranking: 'A',
            positionRanking: 1,
            urlImageProfile: 'www.google.com.br/foto123.jpeg'
        }
        this.logger.log(`CriarJogadorDto: ${JSON.stringify(jogador)}`);
        this.jogadores.push(jogador);
    }
}
