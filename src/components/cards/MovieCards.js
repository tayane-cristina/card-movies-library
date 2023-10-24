import React from 'react';

class MovieCards extends React.Component {
    render() {

        const {imagePath, title, subtitle, storyline, rating, genre} = this.props
        return (
            <li className='cards'>
                <img alt={title} src={imagePath}></img>
                <h3>{title}</h3>
                <span>{subtitle}</span>
                <span className='genre'>{genre}</span>
                <p>{storyline}</p>
                <span className='rating'><strong> {rating}</strong></span>
            </li>
        )
    }
}

export default MovieCards