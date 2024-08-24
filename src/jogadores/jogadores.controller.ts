import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtios/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {
    constructor(private readonly JogadoresService: JogadoresService){}
    
    @Post()
    async criarAtualizarJogador(@Body() criarJogadorDto: CriarJogadorDto) {
        await this.JogadoresService.criarAtualizarJogador(criarJogadorDto)
    }

    async consultarJogadores(): Promise <Jogador[]> {
        return this.JogadoresService.consultarTodosJogadores();
    }

}