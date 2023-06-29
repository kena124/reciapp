import { StyleSheet } from "aphrodite";
const styleFavourites = StyleSheet.create({
    whole: {
        display: 'flex',
        flexDirection: 'column',
        color: 'rgba(110, 235, 168,0.8)'
    },

    specificRecipe: {
        display: 'flex',
        marginTop: '5px',
        cursor: 'default',
        marginLeft: '15px',
        ":hover": {
            marginLeft: '22px',
            color: 'rgba(9, 235, 168,1)'
        }

    },

    photo: {
        width: '100px',
        borderRadius: '4px',
        marginRight: '7px',
    }
})

export {styleFavourites}
