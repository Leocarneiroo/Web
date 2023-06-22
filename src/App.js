import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const MyComponent = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/',
          {
            headers: {
              'dev-email-address': 'leocarneiroo@gmail.com'
            },
            timeout: 5000 // Tempo limite de 5 segundos
          }
        );
        setGames(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          // Erro de resposta da API
          const statusCode = error.response.status;
          if (
            [500, 502, 503, 504, 507, 508, 509].includes(statusCode)
          ) {
            setError('O servidor falhou em responder, tente recarregar a página');
          } else {
            setError('O servidor não conseguiu responder por agora, tente voltar novamente mais tarde');
          }
        } else if (error.request) {
          // Erro de tempo limite da requisição
          setError('O servidor demorou para responder, tente mais tarde');
        } else {
          // Outros erros
          setError('Ocorreu um erro ao comunicar com o servidor');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredGames = games.filter((game) => {
      const hasSearchTerm = game.title.toLowerCase().includes(searchTerm.toLowerCase());
      const hasSelectedGenre = selectedGenre === '' || game.genre === selectedGenre;
      return hasSearchTerm && hasSelectedGenre;
    });
    setFilteredGames(filteredGames);
  }, [games, searchTerm, selectedGenre]);

  const handleSearch = () => {
    const filteredGames = games.filter((game) => {
      const hasSearchTerm = game.title.toLowerCase().includes(searchTerm.toLowerCase());
      const hasSelectedGenre = selectedGenre === '' || game.genre === selectedGenre;
      return hasSearchTerm && hasSelectedGenre;
    });
    setFilteredGames(filteredGames);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreFilter = (event) => {
    setSelectedGenre(event.target.value);
  };


  return (
    <div>
      <div className="filters">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Buscar por título"
        />
        <select value={selectedGenre} onChange={handleGenreFilter}>
          <option value="">Todos os gêneros</option>
          {Array.from(
            new Set(games.map((game) => game.genre))
          ).map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
      {loading ? (
        <div className="loader">Carregando...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="game-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <img src={game.thumbnail} alt={game.title} />
              <h2>{game.title}</h2>
              <p>{game.short_description}</p>
              <a href={game.game_url} target="_blank" rel="noopener noreferrer">Jogar</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyComponent;