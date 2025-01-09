import React from 'react';
import './App.css';

const App = () => (<PersonList/>)

const PersonList = () =>{

const people = [
  {
    img:22,name:'John',job:'developer',
  },
  {
    img:85,name:'Bob',job:'designer',
  },
  {
    img:52,name:'Peter',job:'artist',
  },
]

  return (<section>
<Person person={people[0]}/>;
<Person person={people[1]}> 
  Loves to make creative designs
  </Person>;
<Person person={people[2]}/>;

  </section>)
    
  
}

const Person = (props) => {
  const {img,name,job} = props.person;
  const {children} = props
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`

  return (
    <div className='person'>
<img src={url} alt=""/>
<div>
  <h4>{name}</h4>
  <h4>{job}</h4>
  {children}
</div>
    </div>
  )
}
 


export default App;
