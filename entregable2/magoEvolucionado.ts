import { Mago } from "./mago";

export class MagoEvolucionado extends Mago {
  constructor(nombre: string, puntosDeVida: number, danioMagico: number) {
    super(nombre, puntosDeVida, danioMagico);
  }

  public hechizoPotenciado(): void {
    const danio = this.danioMagico + 40;
    console.log(
      `${this.nombre} ha realizado un hechizo potenciado ${danio} de daño en área.`
    );
  }

  public atacar(): void {
    const habilidades = [
      "Bola de fuego",
      "Rayo",
      "Explosion",
      `Hechizo potenciado`,
    ];
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
    } else if (i === 3) {
      this.hechizoPotenciado();
    }
  }
}
