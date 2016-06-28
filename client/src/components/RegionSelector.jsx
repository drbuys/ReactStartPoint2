var React = require('react');

var RegionSelector = React.createClass({

    getInitialState: function() {
        return {
            selectedIndex: null,
        };
    },

    // handleChange: function(e){
    //     e.preventDefault();
    //     var newIndex = e.target.value;
    //     this.setState({selectedIndex: newIndex});
    //     var selectedRegion = this.props.regions[newIndex];
    //     this.props.onSelectRegion(selectedRegion);
    // },

    render: function() {
        return (
            <div>
                <select value={this.state.selectedIndex} onChange={this.handleChange}>
                    {
                        this.props.allRegions.map(function(region, index){
                            return <option value={index}> {region} </option>
                        })
                    }
                </select>
            </div>
        );
    }

});

module.exports = RegionSelector;
