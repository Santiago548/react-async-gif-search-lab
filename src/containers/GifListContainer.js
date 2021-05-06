import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    fetchGIFs = (query = "cool Guy") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=sH6Vd7pVyRWNyBMZVTwEWBZaLMPge5n6&rating=g&limit=3`)
            .then(response => response.json())
            .then(({data}) => {
                this.setState({
                    gifs: data.map(gif => ({ url: gif.images.original.url}))
                })
            })
    }

    componentDidMount() {
        this.fetchGIFs()
    }

    render() {
        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
