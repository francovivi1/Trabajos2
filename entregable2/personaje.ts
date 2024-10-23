export abstract class personaje {
  nombre: string;
  nivel: number;
  puntosDeVida: number;

  constructor(nombre: string, puntosDeVida: number) {
    this.nombre = nombre;
    this.nivel = 1;
    this.puntosDeVida = puntosDeVida;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getNivel(): number {
    return this.nivel;
  }

  public getPuntosDeVida(): number {
    return this.puntosDeVida;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public setNivel(nivel: number): void {
    this.nivel = nivel;
  }

  public setPuntosDeVida(puntosDeVida: number): void {
    this.puntosDeVida = puntosDeVida;
  }

  //abstract atacar(): void;

  //abstract defender(): void;

  subirDeNivel(): void {
    this.nivel++;
    console.log(
      `${this.nombre} ha subido a nivel ${this.nivel}, cada ves mas fuerte.`
    );
  }
}
