import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'rgb(117, 217, 254)',
      height:'100%',
      width:'100%'
    },
    card: {
      backgroundColor:'rgb(59, 108, 129)',
      textAlign:'center',
      alignItems:'center',
      color:'rgb(248, 251, 252)',
    //   padding:15,
      marginTop:'50%',
      height:'100%',
      width:'100%',
      borderRadius:25
    },
    cardContent: {
        marginTop: '15%',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        // color:'rgb(248, 251, 252)',
    },
    choiceContainer: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center'
    },
    choicebuttons: {
        flexBasis:'40%',
        backgroundColor:'rgb(248, 251, 252)',
        borderWidth:1,
        borderColor:'gray',
        padding:10,
        margin:5,
        borderRadius:15,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    selectedChoice:{
        backgroundColor:'rgb(228, 231, 232)',

    },

    // button: {
    //     backgroundColor:'rgb(99, 145, 166)',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     padding:10,
    //     borderRadius:25,
    // },
    underlinedText: {
        textDecorationLine:'underline',
        backgroundColor:'black'
    },

    resultscreen: {
        width:'100%',
        height:'40%',
        position:'absolute',
        bottom:0,
        borderRadius:15,
        padding:'10%'
    },
    correctresultscreen: {
        backgroundColor:'rgb(28, 227, 233)',
    },
    incorrectresultscreen: {
        backgroundColor:'rgb(254, 122, 134)',
    },
    nextButton: {
        backgroundColor:'rgb(228, 231, 232)',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'5%',
        marginTop: '5%',
        borderRadius:15,
    }
});