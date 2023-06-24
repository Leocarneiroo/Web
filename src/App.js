import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameList from './components/GameList';
import Filters from './components/Filters';
import './App.css';

const MyComponent = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/',
          {
            headers: {
              'dev-email-address': 'seu-email@example.com'
            },
            timeout: 5000
          }
        );
        setGames(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
          if ([500, 502, 503, 504, 507, 508, 509].includes(statusCode)) {
            setError('O servidor falhou em responder, tente recarregar a página');
          } else {
            setError('O servidor não conseguiu responder por agora, tente voltar novamente mais tarde');
          }
        } else if (error.request) {
          setError('O servidor demorou para responder, tente mais tarde');
        } else {
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

  useEffect(() => {
    const extractedGenres = Array.from(new Set(games.map((game) => game.genre)));
    setGenres(extractedGenres);
  }, [games]);

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
      <Filters
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
        selectedGenre={selectedGenre}
        handleGenreFilter={handleGenreFilter}
        handleSearch={handleSearch}
        genres={genres}
      />
      {loading ? (
        <div className="loader">Carregando...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <GameList games={filteredGames} />
      )}
    </div>
  );
};

export default MyComponent;

