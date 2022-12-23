import { useEffect, useState } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
  // console.log('render');

  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setMonsters(users));
    // console.log('effect 1');
  }, []);

  useEffect(() => {
    const newFilteredMonserters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonserters);
    // console.log('effect 2');
  }, [monsters, searchField])  //

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
   
  // console.log('after render')

  // constructor() {
  //   super();

  //   this.state = {
  //     monsters: [],
  //     searchField: '',
  //   }
  // };
  
  // componentDidMount() {
  //   console.log('didmount');
    
  // };

  

  // render() {
  //   const { monsters, searchField } = this.state;
  //   const { onSearchChange } = this;

  
  //   console.log('render')

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
  // }
}

export default App;
