import { Arquero } from "./arquero";

export class ArqueroEvolucionado extends Arquero {
  constructor(nombre: string, puntosDeVida: number, danioDistancia: number) {
    super(nombre, puntosDeVida, danioDistancia);
  }

  public disparoPotenciado(): void {
    const danio = this.danioDistancia + 40;
    console.log(
      `${this.nombre} ha disparado una flecha potenciada causando ${danio} de daño en área.`
    );
  }

  public atacar(): void {
    const habilidades = [
      `Disparo preciso`,
      `Disparo explosivo`,
      `Disparo de hielo`,
      `Disparo potenciado`,
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
    } else if (i === 3) {
      this.disparoPotenciado();
    }
  }
}
