import React from "react";
import { MusicCompo } from "../../components/music";
import Player from "../../components/Player";
import SideHeader from "../../components/sideHeader";
import { Discoverymusics, MusicList } from "../../data";
import * as C from "./style";

export const Home = () => {
  
  let sizeScreen = window.screen.width;

  return (
    <C.Main>
      <SideHeader />
      <C.DiscorverySection>
        <h1>
          Discover
          <br />
          New music
        </h1>
        <div className="DiscoverOption">
          <p>top-chart</p>
          <select>
            <option value="volvo">week</option>
          </select>
        </div>
        <div className="DiscoverMusics">
          {Discoverymusics.map((item) => {
            return (
              <div>
                <img src={item.banner} />
                <h1>{item.title}</h1>
                <p>{item.bandName}</p>
              </div>
            );
          })}
        </div>

        <div className="discoveryMusicsList">
          <h1>You may like</h1>
          {MusicList.map((item) => {
            return (
              <MusicCompo
                banner={item.banner}
                title={item.title}
                bandName={item.bandName}
                Year={item.Year}
                duracao={item.duracao}
              />
            );
          })}
        </div>
      </C.DiscorverySection>
      <Player />
      <C.TrackerArea>
        <h1>Track list</h1>
        <div className="Controll">
          <img src="https://i.ibb.co/q16cDt1/Group-45.png" alt="Group-45" />
          <img src="https://i.ibb.co/R4wBHbM/Group-44.png" alt="Group-44" />
        </div>
        <p>Playing next</p>

        <div>
          {MusicList.map((item) => {
            return (
              <div>
                <div>
                  <img
                    src="https://i.ibb.co/DWK6NZ0/Outline.png"
                    alt="Outline"
                  />
                </div>
                <MusicCompo
                  banner={item.banner}
                  title={item.title}
                  bandName={item.bandName}
                  Year={item.Year}
                  duracao={item.duracao}
                />
              </div>
            );
          })}
        </div>
      </C.TrackerArea>
    </C.Main>
  );
};
