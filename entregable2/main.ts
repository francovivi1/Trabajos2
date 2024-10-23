import { Arquero } from "./arquero";
import { Luchador } from "./luchador";
import { Mago } from "./mago";
import { ArqueroEvolucionado } from "./arqueroEvolucionado";
import { LuchadorEvolucionado } from "./luchadorEvolucionado";
import { MagoEvolucionado } from "./magoEvolucionado";

const arquero = new Arquero("Legolas", 150, 50);
console.log(arquero);
arquero.atacar();
arquero.defender();
arquero.subirDeNivel();
console.log(
  `La vida luego después de ser atacado es ${arquero.getPuntosDeVida()}`
);

const arqueroEvolucionado = new Arquero("Robin H", 300, 100);
console.log(arqueroEvolucionado);
arqueroEvolucionado.atacar();
arqueroEvolucionado.defender();
arqueroEvolucionado.subirDeNivel();
console.log(
  `La vida luego después de ser atacado es ${arqueroEvolucionado.getPuntosDeVida()}`
);

const luchador = new Luchador("Aquiles", 200, 90);
console.log(luchador);
luchador.atacar();
luchador.defender();
luchador.subirDeNivel;
console.log(
  `La vida luego después de ser atacado es ${luchador.getPuntosDeVida()}`
);

const luchadorEvolucionado = new Luchador("Hercules", 400, 180);
console.log(luchadorEvolucionado);
luchadorEvolucionado.atacar();
luchadorEvolucionado.defender();
luchadorEvolucionado.subirDeNivel;
console.log(
  `La vida luego después de ser atacado es ${luchadorEvolucionado.getPuntosDeVida()}`
);

const mago = new Mago("Gandalf", 100, 40);
console.log(mago);
mago.atacar();
mago.defender();
mago.subirDeNivel;
console.log(
  `La vida luego después de ser atacado es ${mago.getPuntosDeVida()}`
);

const magoEvolucionado = new Mago("Merli", 200, 100);
console.log(magoEvolucionado);
magoEvolucionado.atacar();
magoEvolucionado.defender();
magoEvolucionado.subirDeNivel;
console.log(
  `La vida luego después de ser atacado es ${magoEvolucionado.getPuntosDeVida()}`
);
