import React, {Component} from 'react'
import Page from './Page'
import data from '../data'
import CurrentPage from './CurrentPage'

class DirectoryContainer extends Component{
    constructor(){
        super()
        this.state = {
            currentName: '',
            currentCity: '',
            currentCountry: '',
            currentEmployer: '',
            currentTitle: '',
            currentFM: []
            
        }
        this.handleFocusPage = this.handleFocusPage.bind(this)
    }

    handleFocusPage(name, city, country, employer, title) {
        this.setState({
            currentName: name,
            currentCity: city,
            currentCountry: country,
            currentEmployer: employer,
            currentTitle: title,
        })
    }

    render(){
        const pages = data.map((element) => {
            return (
            <Page 
                key={element.id}
                exampleProp="prop test"
                name={element.name}
                city={element.city}
                country={element.country}
                employer={element.employer}
                title={element.title}
                />
            )
        })
        return(
            <div>
                
                <div>{pages}</div>
                <CurrentPage />

            </div>
            
        )
    }
}

export default DirectoryContainer