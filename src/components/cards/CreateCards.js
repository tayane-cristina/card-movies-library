import { Component } from "react";

class CreateCards extends Component {
    render() {
        const {HandleChangeState} = this.props
        return (
            <div>
                <h2>Add more movies at your library</h2>
                <form className="create-cards">
                <label className="make-card"> Título:
                    <input 
                        type='text'
                        id="card-title"
                        name="title"
                        onChange={HandleChangeState}
                    />
                </label>

                <label className="make-card"> Subtítulo:
                    <input 
                        type='text'
                        id="card-subtitle"
                        name="subtitle"
                        onChange={HandleChangeState}
                    />
                </label>

                <label className="make-card"> Imagem:
                    <input 
                        type='text'
                        id="card-image"
                        name="imagePath"
                        onChange={HandleChangeState}
                    />
                </label>

                <label className="make-card"> Storyline:
                    <input 
                        type='text'
                        id="card-storyline"
                        name="storyline"
                        onChange={HandleChangeState}
                    />
                </label>

                <label className="make-card"> Genre:
                    <input 
                        type='text'
                        id="card-genre"
                        name="genre"
                        onChange={HandleChangeState}
                    />
                </label>

                <label className="make-card"> Rating:
                    <input 
                        type='number'
                        id="card-rating"
                        name="rating"
                        onChange={HandleChangeState}
                    />
                </label>

                
            </form>
            </div>
            
        )
    }
}

export default CreateCards