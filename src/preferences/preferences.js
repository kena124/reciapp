import React, {useReducer} from "react";
import { StyleSheet, css } from "aphrodite";
import { type, diet, intolerance } from "./preferenceData";
import { preferencesReducer } from "../reducers/preferenceReducer";
import Show from "./show";
import { addPreference, removePreference, setMaxTime, removeMaxTime } from "../actions";
import { useSelector, useDispatch } from "react-redux";

function CheckBox(props) {
  const {name, value, checked, onChange } = props;
    return (
      <>
      <div className={css(stylePreference.container)}>
        <label className={css(stylePreference.label)}>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className={css(stylePreference.checkbox)}
        />
        {value}
            </label>

      </div>
      </>
    );
  }

class Preference extends React.Component {
    renderType(i) {
      return(
        <CheckBox
        name="type"
        value={type[i]}
        checked={this.props.type.includes(type[i])}
        onChange={() => this.props.onClick("type", type[i])}
        />
    );
  }
  renderDiet(i) {
      return(
        <CheckBox
        name="diet"
        value={diet[i]}
        checked={this.props.diet.includes(diet[i])}
        onChange={() => this.props.onClick("diet", diet[i])}
        />
    );
  }
  renderIntolerance(i) {
      return(
        <CheckBox
        name="intolerance"
        value={intolerance[i]}
        checked={this.props.intolerance.includes(intolerance[i])}
        onChange={() => this.props.onClick("intolerance", intolerance[i])}
        />
    );
  }

  render() {
    return (
      <div className={css(stylePreference.preferenceCard)}>
        <div className={css(stylePreference.foodCheckBox)}>
          <h3 className={css(stylePreference.title)}>Food Type</h3>
          {type.map(foodtype => (
            this.renderType(type.indexOf(foodtype))
          ))}
        </div>
        
        <div className={css(stylePreference.foodCheckBox)}>
          <h3 className={css(stylePreference.title)}>Food Diet</h3>
          {diet.map(foodDiet =>(
            this.renderDiet(diet.indexOf(foodDiet))
          ))}
        </div>
        <div className={css(stylePreference.foodCheckBox)}>
          <h3 className={css(stylePreference.title)}>Food Intolerance</h3>
          {intolerance.map(foodintolerance => (
            this.renderIntolerance(intolerance.indexOf(foodintolerance))
          ))}
        </div>
        <div className={css(stylePreference.foodCheckBox)}>
          <h3>Max-Time (10-200) Min</h3>
          <input
          name="maxTime"
          type="number"
          min={10}
          max={200}
          className={css(stylePreference.container)}
          onChange={(event) => this.props.onChange( event.target.value)}
          >
          </input>
          <Show /> 
        </div>
      </div>
    )
  }
  }

  function SelectPreference() {
    const preferences = useSelector(state => state.preferences);
    const dispatch = useDispatch();
    
      function handlePreferenceChange(preferenceType, preferenceValue) {
        if (preferences[preferenceType].includes(preferenceValue)) {
          dispatch(removePreference(preferenceType, preferenceValue));
        } else {
          dispatch(addPreference(preferenceType, preferenceValue));
        }
      }
    
      function handleMaxTime(preferenceValue) {
        if (preferenceValue >= 10 && preferenceValue <= 200) {
          dispatch(setMaxTime(preferenceValue));
        }
        else{
          dispatch(removeMaxTime());
        }
      }
  
    return (
      <>
      <div>
        
        <Preference
          type={preferences.type}
          diet={preferences.diet}
          intolerance={preferences.intolerance}
          maxTime={preferences.maxTime}
          onClick={handlePreferenceChange}
          onChange={handleMaxTime}
        />
        
      </div>
      
      </>
    );
  }

  const stylePreference = StyleSheet.create({
    preferenceCard: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      color: 'rgba(167, 199, 145,0.9)'
    },
    
    foodCheckBox: {
      display: 'flex',
      flexDirection: 'column',
      ':checked': {
        backgroundColor: 'yellow'
      }
    },

    checkbox: {

      display: 'none',
      ':checked + container':{
        
          color: 'red'
        
      }
    },

    'container + checkbox:checked': {
      color: 'red',
      backgroundColor: 'red',
    },
  

  container: {
    ':hover':{
    backgroundColor: 'rgba(99, 153, 117,0.3)'
    },
    border: '2px groove rgba(95, 130, 125,0.9)',
    textAlign: 'center',
    margin: '2px',
    width: '120px',
    borderRadius: '7px',
    backgroundColor: 'rgba(165, 193, 201,0.1)',
    cursor: 'default',
    'checkbox:checked':{
      color: 'red',
      background: 'red'
    }
    
    
  },

  label: {
    color: 'rgba(191, 187, 237)'
  },

  title: {
    textAlign: 'center',
  }
  });

  export default SelectPreference;
 
