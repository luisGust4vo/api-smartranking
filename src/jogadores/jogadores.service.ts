import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtios/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class JogadoresService {

    private jogadores: Jogador[] = [];
    private readonly logger = new Logger(JogadoresService.name);
    
    async criarAtualizarJogador(criarJogadorDto:CriarJogadorDto):Promise<void> {
        const { email } = criarJogadorDto;
        const jogadorEncontrado = this.jogadores.find(jogador => jogador.email === email);
        if ( jogadorEncontrado ) {
            return this.atualizar(jogadorEncontrado,criarJogadorDto);
        }else{
             this.criar(criarJogadorDto);
        }
    }

    async consultarTodosJogadores(): Promise<Jogador[]> {
        return  this.jogadores;
    }
    
    async deletarJogadores(email): Promise<void>{
        const jogadorEncontrado =  this.jogadores.find(jogador => jogador.email === email);
        this.jogadores = this.jogadores.filter(jogadores => jogadores.email !== jogadorEncontrado.email)
    }

    async consultarJogadoresPeloEmail(email:string): Promise<Jogador> {
        const jogadorEncontrado =  this.jogadores.find(jogador => jogador.email === email);
        if(!jogadorEncontrado){
            throw new NotFoundException(`Jogador com e-mail ${email} nao encontrado!`);
        }
        return jogadorEncontrado;
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
    private atualizar(jogadorEncontrado: Jogador,criarJogadorDto:CriarJogadorDto):void {
        const { name } = criarJogadorDto;
        jogadorEncontrado.name = name;
        
    }

}
