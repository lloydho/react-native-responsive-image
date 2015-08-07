var React = require('react-native');
var Device = require('./device');


var {
    Image,
    } = React;

var ResponsiveImage = React.createClass({
    render: function () {
        this.width = Math.ceil(this.props.initWidth * Device.scale);
        this.height = Math.ceil(this.props.initHeight * Device.scale);
        return (
            <Image style={[{width: this.width, height: this.height}, this.props.style]} source={this.props.source}/>
        );
    },

    getWidth : function() {
      return this.width;
    },
    getHeight : function() {
      return this.height;
    }
});

module.exports = ResponsiveImage;
