import React, { Component } from 'react';

class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
    }
    

    onInputChange(e) {
        this.setState({term: e.target.value});
    }
    
    onFormSubmit(e) {
        e.preventDefault()

        // go fetch weather data
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input type="text" 
                    value={this.state.term}
                    placeholder="Get a weather forecast in your favorites cities."
                    className="form-control"
                    onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-info">
                            Submit
                        </button>
                    </span>
                </form>
            </div>
        );
    }
}

export default componentName;