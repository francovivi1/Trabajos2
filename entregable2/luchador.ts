import { personaje } from "./personaje";

export class Luchador extends personaje {
  protected danioFisico: number;
  protected resistenciaFisica: number;
  protected indefenso: boolean;

  constructor(nombre: string, puntosDeVida: number, daniofisico: number) {
    super(nombre, puntosDeVida);
    this.danioFisico = daniofisico;
    this.resistenciaFisica = 0;
    this.indefenso = false;
  }

  public atacar(): void {
    const habilidades = [`Golpe de punio`, `Ataque`, `Patada`];
    const i = Math.floor(Math.random() * habilidades.length);
    let danio = this.danioFisico;

    if (i === 0) {
      danio += 20;
      this.golpeDePunio(danio);
    } else if (i === 1) {
      danio += 15;
      this.ataque(danio);
    } else if (i === 2) {
      danio -= 10;
      this.patada(danio);
    }
  }

  protected golpeDePunio(danio: number): void {
    console.log(`${this.nombre} ha lanzado su golpe de puño ${danio} de daño.`);
  }

  protected ataque(danio: number): void {
    console.log(
      `${this.nombre} ha lanzado su ataque definitivo ${danio} de daño.`
    );
  }

  protected patada(danio: number): void {
    console.log(`${this.nombre} ha lanzado una patada ${danio} de daño.`);
  }

  public defender(): void {
    const habilidades = [`Escudo`, `Cuerpo tierra`, `pocion regenerativa`];
    const i = Math.floor(Math.random() * habilidades.length);
    let defense = this.resistenciaFisica;

    if (i === 0) {
      defense += 30;
      this.puntosDeVida = this.puntosDeVida - defense;
      this.recibirDanio(defense, i);
    } else if (i === 1) {
      defense += 15;
      this.puntosDeVida = this.puntosDeVida - defense;
      this.recibirDanio(defense, i);
    } else if (i === 2) {
      defense += 5;
      this.puntosDeVida = this.puntosDeVida - defense;
      this.recibirDanio(defense, i);
    }
  }

  public recibirDanio(defense: number, i: number): void {
    if (this.indefenso === false && i === 0) {
      console.log(
        `${this.nombre} ha activado su bloqueo con escudo recibiendo ${defense} de daño.`
      );
    } else if (this.indefenso === false && i === 1) {
      console.log(`${this.nombre} ha echo cuerpo tierra ${defense} de escape.`);
    } else if (i === 2) {
      console.log(
        `${this.nombre} ha tomado una pocion regenerativa, curando puntos de vida.`
      );
    }
  }
}
