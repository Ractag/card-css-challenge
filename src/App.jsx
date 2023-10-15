import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style.scss";
import "./App.css";

function App() {
  return (
    <main className="card">
      <img src="#Guts" alt="" />
      <div className="card-title">
        <h1>Warrior: Guts</h1>
        <p className="card-powers">Strength: ⭐⭐⭐⭐⭐</p>
        <p className="card-powers">Intel: ⭐⭐⭐⭐⭐</p>
        <p className="card-powers">Agility:⭐⭐⭐</p>
      </div>
      <div className="card-desc">
        <p>
          Guts, the protagonist of "Berserk," is a solitary warrior with a
          brutal destiny. Marked by a massive sword, the Dragon Slayer, he dons
          black armor and a scar over his right eye. His story is one of a
          tormented man, battling inner and outer demons in a dark and
          unforgiving world.
        </p>
      </div>
      <div className="card-types">
        <p className="type">Smash: 400</p>
        <p className="type">Kick: 200</p>
        <p className="type">Crossbow: 300</p>
      </div>
    </main>
  );
}

export default App;
