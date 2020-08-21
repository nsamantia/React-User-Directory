import React, {Component} from 'react'

class CurrentPage extends Component {
    constructor(){
        super()
            this.setState ={}
        
    }

    render() {
        
        return (
            <div>
                {/* <p>{this.props.data.currentCity}</p> */}
                <p>HELLO FROM CURRENTPAGE.JS</p>
                <button>Prev</button>
                <button>Next</button>
                
            </div>
        )
    }
}

export default CurrentPage