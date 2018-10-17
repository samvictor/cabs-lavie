import * as React from 'react';
import autoBind from 'auto-bind';

interface IProps {
  loadingState: number
};

interface IDispatchProps {
  incrementLoadingState:() => any,
  decrementLoadingState:() => any
};

type IAllProps = IProps & IDispatchProps;

class App extends React.Component<IAllProps,any> {
  constructor(props){
    super(props);
    autoBind(this);
  }

  private incrementNumber(){
    this.props.incrementLoadingState();
  };

  renderSpinner(){
    return <div className={"lds-facebook"}>
                <div></div>
                <div></div>
                <div></div>
              </div>
  }
  
  render() {
    const {loadingState} = this.props;
    const spinner = loadingState < 5 && loadingState > 0? this.renderSpinner(): '';

    return (
      <div className="app">
        <div className="bordered-button" onClick={this.incrementNumber}> Click me!</div>
        <div className="loading-counter">{loadingState}</div>
        {spinner}  
        It works for sam again!
      </div>

    );
  }
}

export default App;
