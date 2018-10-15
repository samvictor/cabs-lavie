import * as React from 'react';

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
  }

  private incrementNumber(){
    this.props.incrementLoadingState();
  };
  
  render() {
    const {loadingState} = this.props;

    return (
      <div onClick={() => this.incrementNumber()} >	im her 
        <div>{loadingState}</div>
      </div>
    );
  }
}

export default App;
