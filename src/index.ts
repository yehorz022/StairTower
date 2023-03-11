import "./styles.css";
import StairSimulator from "./StairSimulation";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const simulator = new StairSimulator(canvas);
simulator.start();

