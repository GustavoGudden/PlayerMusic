import { Heart, Plus } from "phosphor-react";
import * as C from "./style";

function Player() {
  const MusicIsPlayed = [
    {
      banner: "https://i.ibb.co/C53Hx8H/image-20.png",
      title: "Monkey Machine",
      bandName: "1000 Gecks",
      year: 2021,
      duracao: 3.29,
    },
  ];

  return (
    <C.PlayerArea>
      <h1>Now playing</h1>

      <div className="playerArea">
        <img
          src="https://i.ibb.co/C53Hx8H/image-20.png"
          alt="image band banner"
        />

        <div className="bandInfo">
          <Plus size={32} color="#9BD8B5" />
          <div>
            <h1>{MusicIsPlayed[0].title}</h1>
            <p>{MusicIsPlayed[0].bandName}</p>
          </div>
          <Heart size={32} color="#9BD8B5" />
        </div>
      </div>

      <div className="duracaoArea">
        <div>
          <p>time remain</p>
          <p>time past </p>
        </div>
        <progress value="32" max="100" />
      </div>

      <div className="playArea">
        <img src="https://i.ibb.co/q16cDt1/Group-45.png" alt="Group-45" />
        <img src="https://i.ibb.co/sKTsTX8/Group.png" alt="Group" />
        <img
          className="playbtn"
          src="https://i.ibb.co/PWNBctP/play-button.png"
          alt="play-button"
        />
        <img src="https://i.ibb.co/1f85XDN/Group-1.png" alt="Group-1" />
        <img src="https://i.ibb.co/R4wBHbM/Group-44.png" alt="Group-44" />
      </div>

      <div className="volumeArea">
        <img src="https://i.ibb.co/cCcyPb8/Group-Copy.png" alt="Group-Copy" />
        <progress value="50" max="100" />
        <img src="https://i.ibb.co/yknmFGj/Group-Copy-1.png" alt="Group" />
      </div>

      <div className="foneAlert"> 
        <img src="https://i.ibb.co/tKKjmjx/Frame-916.png" alt="Frame-916" />
      </div>
    </C.PlayerArea>
  );
}

export default Player;
