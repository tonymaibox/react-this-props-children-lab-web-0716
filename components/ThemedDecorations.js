const React = require('react');

export default class ThemedDecorations extends React.Component {
	render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div> 
      );
    });
 
    return (
      <div>
        {childrenWithWrapperDiv}        
      </div>      
    );
  }
};

ThemedDecorations.defaultProps = {
	theme: false
};



module.exports = ThemedDecorations;