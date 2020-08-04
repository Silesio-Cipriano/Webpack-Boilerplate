import Spaceship from "./Spaceship";
import armament from "./armament";
import { laserDefense, steelDefense } from "./defenses";

let spaceship = new Spaceship("Dhart", "Silésio", armament.laser, steelDefense);

console.log(spaceship);
