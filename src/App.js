import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searchBox.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
   
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() =>{
    const newFilterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilterMonsters);

  }, [monsters,searchField]);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

 
  
  return(
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>

      <SearchBox 
      className ='monsters-search-box'
      placeholder ='search monsters'
      onChangeHandler = {onSearchChange}/>
     {  <CardList monsters ={filterMonsters} />} 
    </div>
  );
  };
/* class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
      this.setState(() =>{
        return {monsters:users}
      })
      );
  }

  onSearchChange =(event) => {
    const searchField = event.target.value.toLocaleLowerCase();
   
    this.setState(()  => {
      return {searchField};

    });
  };
  render(){
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });


  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
      className ='monsters-search-box'
      placeholder ='search monsters'
      onChangeHandler = {onSearchChange}/>
      <CardList monsters ={filterMonsters} />
    </div>
  );
}
}
 */
export default App;
