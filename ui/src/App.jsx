import './style.css';
import graphQLFetch from './graphql.js';
import train from './train.jpg';
import Add from './Add.jsx';
import Display from './Display.jsx';
import Delete from './Delete.jsx';
import Blacklist from './Blacklist.jsx';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

class Homepage extends React.Component {
	constructor() {
	super();
	}
	render(){
	return (
	<div>
		<h5>Placeholder for Homepage</h5>
	</div>);
	}
}
class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], selector: 1};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
    this.blacklistTraveller = this.blacklistTraveller.bind(this);
  }

  setSelector(value)
  {
	  this.setState({selector: value});
  }
  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    /*Q3: Write code for GraphQL API call to fetch list of travellers
     * - Write the query
     * - Make a call to graphQLFetch with parameter: query
     * - Post process data and take some action (e.g., re-load UI)  */
  

     /*End of Q3*/
  }

  async bookTraveller(passenger) {
    /*Q3: Write code for GraphQL API call to add a traveller
     * - Write the mutation
     * - Make a call to graphQLFetch with two parameters: mutation query, {variable}
     * - Post process data and take some action (e.g., re-load UI)  */
  

     /*End of Q3*/
  }

  async deleteTraveller(passenger) {
    /*Q3: Write code for GraphQL API call to delete a traveller
     * - Write the mutation
     * - Make a call to graphQLFetch with two parameters: mutation query, {variable}
     * - Post process data and take some action (e.g., re-load UI)  */
  

     /*End of Q3*/
  }
  async blacklistTraveller(passenger) {
    /*Q4: Code to blacklist traveller at the back-end
     * - Write a mutation to blacklist traveller by providing the name.
     * - Make a call to graphQLFetch to execute the query.
     * - graphQLFetch accepts two parameters: query and {variable}  
     * - This GraphQL API call does not return anything. */
    console.log("Pending code to Blacklist", passenger); 
    const query =`mutation mymutation($passenger: String!){
	      blacklistTraveller(travellername: $passenger)
    }`; 
    const response = await graphQLFetch(query, {passenger});
    console.log("Response from server", response);
    
    /*End of Q4*/
  }
  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
	<img src={train} />

	<div>
        <button ><a href="/#/home">Homepage</a></button>
        <button ><a href="/#/displayt">Display Travellers</a></button>
        <button ><a href="/#/addt">Add Traveller</a></button>
        <button ><a href="/#/deletet">Delete Traveller</a></button>
        <button ><a href="/#/blacklistt">Blacklist Traveller</a></button>
	</div>
  <Router>
  <Switch>
     <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Homepage} />
      <Route path="/displayt" render={(props) => <Display {...props} travellers={this.state.travellers} />} />
      <Route path="/addt" component={Add} />
      <Route path="/blacklistt" render={(props) => <Blacklist {...props} blacklistTraveller={this.blacklistTraveller} />} />
      <Route path="/deletet" component={Delete} />
  </Switch>
  </Router>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
