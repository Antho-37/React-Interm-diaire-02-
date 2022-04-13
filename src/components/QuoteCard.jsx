import React from "react";
import './QuoteCard.css';

const QuoteCard = ({ quoteList }) => (
  <figure className="QuoteCard">
    <img src={quoteList.image} alt={quoteList.character} />
    <figcaption>
      <blockquote>{quoteList.quote}</blockquote>
      <cite>{quoteList.character}</cite>
    </figcaption>
  </figure>
);

export default QuoteCard;
