
import "./App.css";
import { TwitterFollowCard } from "./assets/TwitterFollowCard.jsx";

export function App() {
  return (
    <sectio className="App">
      <TwitterFollowCard userName="midudev">Miguel Ángel</TwitterFollowCard>
      <TwitterFollowCard userName="vanesaa088">Vanesa Abromaviciute</TwitterFollowCard>
      <TwitterFollowCard userName="SirODLana">Rubén Pacheco</TwitterFollowCard>
    </sectio>
  );
}
