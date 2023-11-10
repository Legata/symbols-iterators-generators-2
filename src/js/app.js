import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';
import DreamTeam from './DreamTeam';

const opposingTeam = [
  new Undead('Li'),
  new Zombie('Rik'),
  new Daemon('Saimon'),
];

const currentTeam = new DreamTeam();
currentTeam.addAll(...opposingTeam);
currentTeam.toArray();

for (const value of currentTeam) {
  console.log(value);
}