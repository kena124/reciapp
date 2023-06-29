import { StyleSheet } from 'aphrodite';
const coolFont = {
    fontFamily: "CoolFont",
    fontStyle: "normal",
    fontWeight: "bold",
};

const formField = StyleSheet.create({
    form: {
        display: 'flex',
        color: '#d1f0e8',
        fontFamily: 'CoolFont',
        src: "url('coolfont.woff2') format('woff2')",
        alignItems: 'center',
        flexDirection: 'column',
    },


    label: {
        padding: '5px',
        
    },

    input : {
        textAlign: 'center',
        padding: '3px',
        width: "200px",
        background: 'rgba(240, 240, 240, 0.1)',
        borderRadius: '7px',
        margin: '3px',
        color: '#a1f0ef',
        fontSize: '14px',
        border: '1px solid',
        borderTopColor: 'yellow',
        outline: 'none',
        transition: '0.5s',
        
        ':focus':{
            borderTopColor: 'green',
        },
       
        
    },

    login : {
        textAlign: 'center',
        padding: '3px',
        width: "52px",
        background: 'rgba(6, 81, 99, 1)',
        borderRadius: '7px',
        margin: '5px',
        color: '#91f0e8',
        cursor: 'pointer',
        outline: 'none',
        borderColor: 'rgba(110, 235, 168, 0.3)',
        transition: '0.3s',
        ':hover': {
            width: '55px',
        }
    },

    para: {
        textAlign: 'center',
        marginTop: '50px',
        marginBottom: '50px',
        fontSize: '25px',
        fontFamily: "CoolFont",
        font: {coolFont}
    },
    
    show: {
        color: '#d1f0e8',
        borderRadius: '5px',
        margin: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        
      },
      hide: {
        margin: '6px',
      },
      
    inputshow: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: '30px',
        background: 'rgba(152, 156, 109, 0.07)',
        borderRadius: '7px',
        padding: '3px',
      },
      
        
});

const styleLogSing = StyleSheet.create({
    alreadyhave: {
      display: 'flex',
      fontSize: '20px',
      justifyContent: 'center'
    },
    element: {
      paddingLeft: '7px',
      cursor: 'pointer',
      color: 'rgb(144,132,122)',
      transition: '0.5s',
      ':hover':{
        color: 'rgba(14,132,122,0.7)',
      }
    },
    welcome: {
      color: 'rgb(144,132,122)',
      cursor: 'default'
    },
    logoutContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },

    logout : {
        textAlign: 'center',
        background: 'rgba(6, 81, 99, 0.5)',
        borderRadius: '3px',
        margin: '5px',
        color: '#91f0e8',
        cursor: 'pointer',
        outline: 'none',
        borderColor: 'borderColor: rgba(110, 235, 168, 0.3)',
        transition: '0.3s',
        ':hover': {
            width: '55px',
        }
    },
    
  })

export {formField, coolFont, styleLogSing};
