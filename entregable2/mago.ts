import { personaje } from "./personaje";

export class Mago extends personaje {
  protected danioMagico: number;
  protected resistenciaMagica: number;
  protected invisibilidad: boolean;

  constructor(nombre: string, puntosDeVida: number, danioMagico: number) {
    super(nombre, puntosDeVida);
    this.danioMagico = danioMagico;
    this.resistenciaMagica = 10;
    this.invisibilidad = true;
  }

  public atacar(): void {
    const habilidades = ["Bola de fuego", "Rayo", "Explosion"];
    const i = Math.floor(Math.random() * habilidades.length);
    let danio = this.danioMagico;

    if (i === 0) {
      danio += 10;
      this.fuego(danio);
    } else if (i === 1) {
      danio -= 5;
      this.rayo(danio);
    } else if (i === 2) {
      danio += 15;
      this.explosion(danio);
    }
  }

  protected fuego(danio: number): void {
    console.log(
      `${this.nombre} lanza una Bola de Fuego causando ${danio} de daño.`
    );
  }

  protected rayo(danio: number): void {
    console.log(`${this.nombre} lanza un Rayo causando ${danio} de daño.`);
  }

  protected explosion(danio: number): void {
    console.log(
      `${this.nombre} usa Curación restaurando ${danio} puntos de vida.`
    );
  }

  public defender(): void {
    const habilidades = [`resistenciaMagica`, `invisibilidad`];
    const i = Math.floor(Math.random() * habilidades.length);
    let defense = this.resistenciaMagica;
    if (i === 0) {
      defense += 30;
      this.puntosDeVida = this.puntosDeVida - defense;
      this.recibirDanio(defense);
    } else if (i === 1) {
      this.invisibilidad = true;
      this.recibirDanio(0);
    }
  }

  public recibirDanio(defense: number): void {
    if (this.resistenciaMagica) {
      console.log(
        `${this.nombre} activo resistencia magica recibiendo ${defense} de daño.`
      );
    } else {
      console.log(`${this.nombre} activo invisibilidad no lo descubren`);
    }
  }
}
