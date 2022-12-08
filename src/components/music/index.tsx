import * as C from "./style";

type IbananaProps = {
  banner: string;
  title: string;
  bandName: string;
  Year: number;
  duracao: number;
};

export const MusicCompo = (item: IbananaProps) => {
  return (
    <C.Music>
      <img src={item.banner} alt="" />
      <div>
        <h2>{item.title}</h2>
        <p>{item.bandName}</p>
      </div>
      <div className="flexEnd">
        <h2>{item.duracao}</h2>
        <p>{item.Year}</p>
      </div>
    </C.Music>
  );
};
