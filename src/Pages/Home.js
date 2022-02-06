/*
    Component fyrir heima síðu vefsíðunar
*/
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <h1>Hæ!</h1>
        <div className="welcome-text">
          <p>
            Þessi síða listar upp öll fyrirtæki frá vefþjónustu já.is sem
            innheildur leitina "bíll"!
            <br /> Þetta er gert með "continuous scrolling". <br />
            Sem þýðir að ný og ný gögn eru sótt frá vefþjónustunni þegar
            scrollað er niður þar til engin gögn eru eftir til að sækja.
            <br />
            Smelltu á fyrirtæki til að sjá niðurstöðuna!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
