import {useState} from 'react';

const DynamicList = () => {
  // Creates the data
  const [data, setData] = useState(['monkey','ethan','ritz crackers','apple sauce','hello kitty','food','desk','murphy','pewpew','bernard']);

  // Sets the type of list 'ol' or 'ul'
  const [type, setType] = useState('ol');

  // Set the orinatation 'horizontal' or 'vertical'
  const [orientation, setOrientation] = useState('vertical')

  // checks to see if the type is ul
  if(type === 'ul'){
    return (
      // iterates through the data creating a list item for each
      <ul className={orientation}>
      {data.map((item) => {
        return ( 
          <li key={item} className='dataItem'>
            <h4>{item}</h4>
          </li>
        );
      })}
      </ul>
    )
  }

  return (
    // iterates through the data creating a list item for each
    <ol className ={orientation}>
      {data.map((item) => {
        return ( 
          <li key={item} className='dataItem'>
            <h4>{item}</h4>
          </li>
        );
      })}
    </ol>
  )
}

export default DynamicList