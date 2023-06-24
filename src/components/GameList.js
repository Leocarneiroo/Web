import React from 'react';

const GameList = ({ games }) => {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <div key={game.id} className="game-card">
          <img src={game.thumbnail} alt={game.title} />
          <h2>{game.title}</h2>
          <p>{game.short_description}</p>
          <a href={game.game_url} target="_blank" rel="noopener noreferrer">
            Jogar
          </a>
        </div>
      ))}
    </div>
  );
};

export default GameList;
