import { Luchador } from "./luchador";

export class LuchadorEvolucionado extends Luchador {
  constructor(nombre: string, puntosDeVida: number, danioFisico: number) {
    super(nombre, puntosDeVida, danioFisico);
  }

  public golpePotenciado(): void {
    const danio = this.danioFisico + 40;
    console.log(
      `${this.nombre} ha realizado un golpe potenciado causando ${danio} de daño en área.`
    );
  }

  public atacar(): void {
    const habilidades = [
      `Golpe de punio`,
      `Ataque`,
      `Patada`,
      `golpePotenciado`,
    ];
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
    } else if (i === 3) {
      this.golpePotenciado();
    }
  }
}
