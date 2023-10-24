import React from 'react';
import './components/search/FormSearch'
import FormSearch from './components/search/FormSearch';
import './components/cards/CreateCards'
import CreateCards from './components/cards/CreateCards';
import './App.css';
import movies from './data';
import MovieCards from './components/cards/MovieCards';


class App extends React.Component {
  constructor() {
    super()

    this.FilterMovieSelect = this.FilterMovieSelect.bind(this)
    this.FilterMovieForGenre = this.FilterMovieForGenre.bind(this)
    this.HandleChangeState = this.HandleChangeState.bind(this)
    this.AddAtLibrary = this.AddAtLibrary.bind(this)
    

    this.state = {
      bookmarked: false,
      genreFilter: '',
      movieSelect: '',
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
      movieList: []
    }
  }

  FilterMovieSelect(event) {
    this.setState({
      movieSelect: event.target.value
    })
  }

  FilterMovieForGenre(event) {
    this.setState({genreFilter: event.target.value})
  }

  HandleChangeState({target}) {
    const {name} = target
    const value = target.type === 'checkbox' ? target.checked : target.value 
  
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    console.log("iniciou o componente")
  }


  AddAtLibrary() {
    movies.push(
      {
      title: this.state.title,
      subtitle: this.state.subtitle,
      storyline: this.state.storyline,
      rating: this.state.rating,
      imagePath: this.state.imagePath,
      bookmarked: true,
      genre: this.state.genre,
      movieList: []
      }
    )
      
  }

  render() {
    return (
      <div className='father'>
        <header>
            <h1>PLAY MOVIES<span className='HD'>TV</span></h1>
            <FormSearch 
            FilterMovieSelect={this.FilterMovieSelect} 
            FilterMovieForGenre={this.FilterMovieForGenre} />
        </header>
        

      <ul className='show-cards'>
        {movies
          .filter(({title}) => title.toLowerCase().includes(this.state.movieSelect.toLowerCase()))
          .filter(({genre}) => genre.toLowerCase().includes(this.state.genreFilter.toLowerCase()))
          .map((movie, index) => 
          <MovieCards 
            key={index}
            imagePath={movie.imagePath} 
            title={movie.title} 
            subtitle={movie.subtitle} 
            storyline={movie.storyline} 
            rating={movie.rating} 
            genre={movie.genre}
          />

        )}
      </ul>

      <div className='make-new-card'>
        <CreateCards HandleChangeState={this.HandleChangeState}/>
        <button type="button" onClick={this.AddAtLibrary}>Add More</button>
      </div>
      </div>
    )
  }
}


export default App;
