import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "NoName", age: 3}
  ];
  return (
    <div>
      {
        profiles.map( (profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
      {/* <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} /> */}
    </div>
  )
}

const User = (props) => {
return <div>Hi, I am {props.name}!, and {props.age} years old!</div>
}
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired //必須項目の指定
}




export default App;
