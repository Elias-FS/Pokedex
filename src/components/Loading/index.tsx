import  "./Loading.css";
import { FC } from "react";


interface loadingText {
  text: string;
}

export const IsLoading: FC<loadingText> = ({ text }) => {
  return (
    <div>
      <div className="pokemon-count">
        <h5>
          <img className="pokéball-loading" src="/favicon.png" alt="" />
          {text}
        </h5>
      </div>
    </div>
  );
};
