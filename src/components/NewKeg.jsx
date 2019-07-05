import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewKeg(props){
  let _names = null;
  let _price = null;
  let _alcoholContent= null;


  function handleNewKegFormSubmission(e){
    e.preventDeafault();
    props.onNewKegCreation({
      names: _names.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      id: v4()
    });
  }

  return (
    <div>

      <form onSubmit={handleNewKegFormSubmission}>
          <input
            type='text'
            id='names'
            placeholder='Keg Name'
            ref={(input) => {_names = input;}}/>
          <input
            type='text'
            id='price'
            placeholder='Price'
            ref={(input) => {_price = input;}}/>
            <input
              type='text'
              id='alcoholContent'
              placeholder='Alcoholcontent'
              ref={(input) => {_alcoholContent = input;}}/>
            <button type='submit'>Add new Keg!</button>
        </form>
    </div>
  );
}

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKeg;
