import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
// import Places from './components/Places'

class App extends Component {
    constructor() {
        super()
        this.state = {
            venues: []
        }
    }



    componentDidMount() {
        console.log('componentDidMount')

        // make api call here to eventful API using Axios or SuperAgent
        const url= // API url goes here

        superagent
        .get(url)
        .query(null)
        .set('Accept', 'text/json')
        .end((error, response) => {

            const venues = response.body.response.venues
            console.log(JSON.stringify(venues))
            this.setState({
                venues: venues
            })

        })
        
    }
    render() {
        const location = {
        lat: 40.7575285,
        lng: -73.9884469
    }

    const markers = [
        {
            location:{
                lat: 40.7575285,
                lng: -73.9884469
            }
        }
    ]
// once the api is set for the markers use {this.state.venues} while replacing the venues
// call this in the Places venues={this.state.venues}
        return (
            <div>
                This is the React App
                <div style={{width:300, height:600, background:'red'}}>
                    <Map center={location} markers={markers} />
                    

                </div>


                    
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))