var React = require('react');
var _ = require('lodash')
var CountriesSelector = require('./CountriesSelector.jsx')
var CountryDisplay = require('./CountryDisplay.jsx')
var RegionSelector = require('./RegionSelector.jsx')

var CountriesBox = React.createClass({
    getInitialState: function() {
        return {
            countries: [],
            // regions: [],
            displayRegion: null,
            regionCountries: [],
            displayCountry: null,
            displayBorderCountries: []
        };
    },

    setRegions: function(){
        var worldRegion = this.state.countries.map(function(country){
            return country.region
        })
        var worldRegions = _.uniq(worldRegion)
        return worldRegions;
    },

    setBorderCountries: function(country){
        // var borders = country.borders.map(function(code){
        //     for(var c of this.state.countries){
        //         if(c.alpha3Code === code){
        //             return c
        //         };
        //     }
        // }.bind(this))
        // return borders;

        return country.borders.map(function(code) {
            return this.state.countries.find(function(country) {
                return country.alpha3Code === code;
            });
        }.bind(this));

    },

    setRegionCountries: function(region){
        var regionCountries = []
        for(var country of this.state.countries){
            if(country.region === region){
                regionCountries.push(country)
            };
        }
        return regionCountries;
    },

    setDisplayCountry: function(country){
        this.setState({displayCountry: country});
        this.setState({displayBorderCountries: this.setBorderCountries(country)});
    },

    setDisplayRegion: function(region){
        this.setState({displayRegion: region});
        this.setState({regionCountries: this.setRegionCountries(region)});
    },

    componentDidMount: function(){
        console.log('CDM was called');
        var url = "https://restcountries.eu/rest/v1/all";
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = function() {
            var data = JSON.parse(request.responseText);
            this.setState({countries: data});
            var curRegion = this.setRegions()[0];
            console.log(curRegion);
            this.setDisplayRegion(curRegion);
            this.setDisplayCountry(data[0]);
        }.bind(this);
        request.send(null);
    },

    render: function() {
        var displayElement = <h4> No Country Selected  </h4>
        if(this.state.displayCountry){
            displayElement = <CountryDisplay display={this.state.displayCountry} borders={this.state.displayBorderCountries} />
        }
        return (
            <div>
                <h4> Countries Box </h4>
                <RegionSelector allRegions={this.setRegions()} onSelectRegion={this.setDisplayRegion}/>
                <CountriesSelector
                    countries={this.state.countries}
                    selectedCountries={this.state.regionCountries}
                    onSelectCountry={this.setDisplayCountry}
                    display={this.state.displayCountry}
                />
                {displayElement}
            </div>
        )
    }

});

module.exports = CountriesBox;
