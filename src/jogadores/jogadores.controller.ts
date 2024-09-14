import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
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
    
    @Get()
    async consultarJogadores( 
    @Query('email') email:string): Promise<Jogador | Jogador[]> {
        if(email){
            return await this.JogadoresService.consultarJogadoresPeloEmail(email);
        }else{
            return this.JogadoresService.consultarTodosJogadores();
        }
    }

    @Delete()
    async deletarJogadores(
        @Query('email') email:string): Promise<void>{
       this.JogadoresService.deletarJogadores(email);
    }

}