var React = require('react');
var CountryDisplay = require('./CountryDisplay.jsx')

var CountriesSelector = React.createClass({

    getInitialState: function() {
        return {
            selectedIndex: null,
        };
    },

    handleChange: function(e){
        e.preventDefault();
        var newIndex = e.target.value;
        this.setState({selectedIndex: newIndex});
        var selectedCountry = this.props.countries[newIndex];
        this.props.onSelectCountry(selectedCountry);
    },

    render: function() {
        return (
            <div>
                <select value={this.state.selectedIndex} onChange={this.handleChange}>
                    {
                        this.props.countries.map(function(country, index){
                            return <option value={index} key={country.alpha2Code}> {country.name} </option>
                        })
                    }
                </select>
            </div>
                );
    }

});

module.exports = CountriesSelector;
