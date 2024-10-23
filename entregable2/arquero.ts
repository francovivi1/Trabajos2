import { personaje } from "./personaje";

export class Arquero extends personaje {
  protected danioDistancia: number;
  protected resistenciaEscudo: number;
  protected endeble: boolean;

  constructor(nombre: string, puntosDeVida: number, danioDistancia: number) {
    super(nombre, puntosDeVida);
    this.danioDistancia = danioDistancia;
    this.resistenciaEscudo = 0;
    this.endeble = false;
  }

  public atacar(): void {
    const habilidades = [
      `Disparo preciso`,
      `Disparo explosivo`,
      `Disparo de hielo`,
    ];
    const i = Math.floor(Math.random() * habilidades.length);

    let danio = this.danioDistancia;

    if (i === 0) {
      danio += 20;
      this.disparoPreciso(danio);
    } else if (i === 1) {
      danio += 25;
      this.disparoExplosivo(danio);
    } else if (i === 2) {
      danio -= 10;
      this.disparoDeHielo(danio);
    }
  }

  protected disparoPreciso(danio: number): void {
    console.log(
      `${this.nombre} ha lanzado un disparo preciso causando ${danio} de daño.`
    );
  }

  protected disparoExplosivo(danio: number): void {
    console.log(
      `${this.nombre} ha lanzado un disparo explosivo causando ${danio} de daño.`
    );
  }

  protected disparoDeHielo(danio: number): void {
    console.log(
      `${this.nombre} ha lanzado un disparo congelante ${danio} de daño.`
    );
  }

  public defender(): void {
    const habilidades = [`miradaDeAguila`, `Camuflaje`, `barreraDeFlecha`];
    const i = Math.floor(Math.random() * habilidades.length);
    let defense = this.resistenciaEscudo;

    if (i === 0) {
      defense += 20;
      this.puntosDeVida = this.puntosDeVida - defense;
      this.recibirDanio(0, i);
    } else if (i === 1) {
      this.recibirDanio(0, i);
    }
  }

  public recibirDanio(defense: number, i: number): void {
    if (this.endeble === false && i === 0) {
      console.log(
        `${this.nombre} ha activado su mirada de aguila ${defense} de daño.`
      );
    } else if (this.endeble === true && i === 1) {
      console.log(
        `${this.nombre} se ha puesto en modo camuflaje recibiendo ${defense} de daño.`
      );
    } else if (i === 2) {
      console.log(
        `${this.nombre} ha realizado una barrera de flecha, recibiendo ${defense} de daño.`
      );
    }
  }
}
