import React from "react";
import "./Thanks.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  verySatisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanksContainer">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão para enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
      <p className="reviewData">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="reviewData">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
