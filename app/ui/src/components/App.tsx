import * as React from 'react';
import autoBind from 'auto-bind';
import * as firebase from 'firebase';


interface IProps {
  loadingState: number
};

interface IDispatchProps {
  incrementLoadingState:() => any,
  decrementLoadingState:() => any,
  incrementTwice: () => any
};

type IAllProps = IProps & IDispatchProps;

class App extends React.Component<IAllProps,any> {
  constructor(props){
    super(props);
    autoBind(this);
    
    const config = {
      apiKey: "AIzaSyARw_MQFNy0G_E6ng_oKVBCOeC1HrBNuTo",
      authDomain: "cabs-lavie.firebaseapp.com",
      databaseURL: "https://cabs-lavie.firebaseio.com",
      projectId: "cabs-lavie",
      storageBucket: "cabs-lavie.appspot.com",
      messagingSenderId: "787170972614"
    };
    firebase.initializeApp(config);
    
    
    this.state = {
      'data_loading': true,
      'data': {},
    }
  }
  
  componentDidMount() {
    const db = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    db.settings(settings);
    
    //let page = window.location.pathname.split('/')[2].toLowerCase().replace(/\W/g, '');
    //if (typeof page === 'undefined' || page === '')
    //  page = 'home';

    const items_ref = db.collection('inventory').where('key', '>=', 'item1');
    
    items_ref.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            
            doc.data();
            
            const temp_data = this.state.data;
            temp_data[doc.data().key] = doc.data();
            
            this.setState({'data': temp_data});
            
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            
            //this.setState({'data': null, 'data_loading': false});
        }
        });
        
        this.setState({'data_loading': false});
        //
      })
      .catch((error) => {
            console.log("Error getting document:", error);
            //$('#alert_danger').text('Error').fadeIn().delay(2000).fadeOut();
            
            this.setState({'data': null, 'data_loading': false});    
      });

  }

    

  private incrementNumber(){
    this.props.incrementTwice();
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
    
    let for_xml = 'loading...';
    
    if (!this.state.data_loading) {
      for_xml = JSON.stringify(this.state.data, null, 2);
    }
    
    return (
      <div className="app">
        <div className="bordered-button" onClick={this.incrementNumber}> Click me!</div>
        <div className="loading-counter">{loadingState}</div>
        {spinner}  
        It works for sam again!
        <p style={{'whiteSpace': 'pre', 'overflowX': 'scroll'}}>
          {for_xml}
        </p>
      </div>

    );
  }
}

export default App;
