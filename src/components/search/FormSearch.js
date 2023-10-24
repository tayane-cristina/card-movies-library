import { Component } from "react";

class FormSearch extends Component {
    render () {
        const {FilterMovieSelect} = this.props
        const {FilterMovieForGenre} = this.props
        
        return (
            <form className="form-search">
                <label className="BTN-input">
                    <button className="button-search">Search</button>
                    <input className="input-search"
                    type='text'
                    id="title"
                    name="movieSelect"
                    placeholder="Buscar filme..."
                    onChange={FilterMovieSelect}
                    />
                </label>

                <label>
                    <select
                    className='select-genre'
                    name='genreFilter'
                    onChange={FilterMovieForGenre}
                    >
                        <option value="">TODOS</option>
                        <option>ACTION</option>
                        <option>FANTASY</option>
                        <option>COMEDY</option>
                        <option>ADVENTURE</option>
                    </select>
                    </label>
            </form>

        )
    }
}

export default FormSearch