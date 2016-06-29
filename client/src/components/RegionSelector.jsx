var React = require('react');

var RegionSelector = React.createClass({

    getInitialState: function() {
        return {
            selectedIndex: null,
        };
    },

    handleChange: function(e){
        e.preventDefault();
        var newIndex = e.target.value;
        console.log(newIndex);
        this.setState({selectedIndex: newIndex});
        var selectedRegion = this.props.allRegions[newIndex];
        this.props.onSelectRegion(selectedRegion);
    },

    render: function() {
        return (
            <div>
                <select value={this.state.selectedIndex} onChange={this.handleChange}>
                    {
                        this.props.allRegions.map(function(region, index){
                            return <option value={index} key={region}> {region} </option>
                        })
                    }
                </select>
            </div>
        );
    }

});

module.exports = RegionSelector;
