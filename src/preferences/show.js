import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, css } from "aphrodite";
const Show = () => {
    const preferences = useSelector(state => state.preferences);
  
    return (
      <>
        {(preferences.diet[0] || preferences.type[0] || preferences.intolerance[0] || preferences.maxTime) &&
        <div className={css(styleShow.wholeShow)}>
        {<p className={css(styleShow.center)}>Preferences</p>}
        <ul className={css(styleShow.list)}>
          {preferences.type[0] && <p className={css(styleShow.name)}>Type</p>}
          {preferences.type.map(type => (
            <li className={css(styleShow.individualList)}>{type}</li>
          ))}
          {preferences.diet[0] && <p className={css(styleShow.name)}>Diet</p>}
          {preferences.diet.map(diet => (
            <li className={css(styleShow.individualList)}>{diet}</li>
          ))}
          {preferences.intolerance[0] && <p className={css(styleShow.name)}>Intolerance</p>}
          {preferences.intolerance.map(intolerance => (
            <li className={css(styleShow.individualList)}>{intolerance}</li>
          ))}
        </ul>
        {preferences.maxTime &&
        <div>
          <p>MaxTime:</p>
        {preferences.maxTime}
        </div>}
      </div>}
      </>
    );
}

const styleShow = StyleSheet.create({
  wholeShow: {
    color: 'rbga(150, 232, 139,0.8)',
    borderRadius: '3px',    
  },
  list: {
    listStyle: 'none',
  },
  name: {
    color: 'rgba(107, 225, 227,0.7)',
    marginBottom: '0',
    marginTop: '5px',
    marginRight: '5px'

  },
  time: {
    color: 'rgba(107, 225, 227,0.7)',
    display: 'flex',
  },
  center: {
    marginLeft: '27px',
    marginBottom: '7px',
    color: 'rgba(95,194,80,1)'
  },

  individualList: {
    marginLeft: '6px',
  }
})

export default Show;
