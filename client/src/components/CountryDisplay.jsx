var React = require('react');

var CountryDisplay = React.createClass({

    render: function() {
        return (
            <div>
                <h4>This is your chosen Country</h4>
                <p>Country: {this.props.display.name}</p>
                <p>Native Name: {this.props.display.nativeName}</p>
                <p>Capital: {this.props.display.capital}</p>
                <p>Population: {this.props.display.population}</p>
                <h4>These are the bordering Countries of {this.props.display.name}</h4>
                {/*{
                    this.props.display.borders.map(function(countrycode){
                    return <p> {countrycode} </p>
                    })
                }*/}
                {
                    this.props.borders.map(function(country){
                        return <p key={country.alpha2Code}> {country.name} </p>
                    })
                }
            </div>
        );
    }

});

module.exports = CountryDisplay;
