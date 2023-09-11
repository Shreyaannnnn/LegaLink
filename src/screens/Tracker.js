// // components/MainScreen.js
// import React, { useLayoutEffect } from 'react'
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Tracker = () => {
//     const navigation = useNavigation()
//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerShown: false
//         })
//     }, [])


//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Case Progress Tracker</Text>
//       <Image
//         source={require('../../assets/graph.png')} // Replace with your actual graph image
//         style={styles.graph}
//         resizeMode="contain"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   graph: {
//     flex: 1,
//     width: '90%',
//     height: '20%',
//   },
// });

// export default Tracker;


// components/MainScreen.js
import React, { useLayoutEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import CircularProgress from '../components/CircularProgress'

const MainScreen = () => {


    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])




  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.toggleDrawer()}
      >
        <Entypo name="menu" size={30} />
      </TouchableOpacity>
      <Text style={styles.header}>Case Progress Tracker</Text>
      <Image
        source={require('../../assets/graph.png')} // Replace with your actual graph image
        style={styles.graph}
        resizeMode="contain"
      />

      <View style={styles.container1}>
      <View style={styles.column}>
        <View style={{alignContent:'center', alignItems:'center', justifyContent:'center', flex:1}}>
        <Text style={{fontSize:20, color:'#243465', fontWeight:'bold'}}>Total Hearing</Text>
          <Text style={{fontSize:30}}>7</Text>
        </View>
      </View>
      <View style={styles.column}>
        <View style={{alignContent:'center', alignItems:'center', justifyContent:'center', flex:1}}>
          <Text style={{fontSize:20, color:'#243465', fontWeight:'bold'}}>Days in Custody</Text>
          <Text style={{fontSize:30}}>26</Text>
        </View>
      </View>
    </View>

    <View style={styles.container2}>
      <Text style={styles.text}>Case Status: IN TRIAL</Text>
    </View>


    {/* <View style={styles.container3}>
      <Text style={styles.headerText}>Application Status</Text>
      <CircularProgress percentage={10} />
      <Text style={styles.statusText}>Your Application is 70% Completed</Text>
    </View> */}

<View style={styles.container3}>
      <Image source={require('../../assets/status.png')} style={{width: Dimensions.get('screen').width * 0.8, borderRadius:20}}></Image>
      <Image source={require('../../assets/statusdeets.png')} style = {{position:'absolute'}}></Image>
      
    </View>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'white',
  },
  menuButton: {
    top:40,
    marginLeft: 10,
    marginTop: 10,
    position: 'absolute',
  },
  header: {
    top:30,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',

    marginTop: 20,
  },
  graph: {
    flex: 1,
    width: '90%',
    height: '20%',
    alignSelf: 'center',
  },
  container1: {
    flex: 1,
    flexDirection: 'row', // Arrange children horizontally
  },
  column: {
    flex: 1,
    width: '35%', // 40% of the screen width
    height: Dimensions.get('window').height * 0.15, // 15% of the screen height
    margin: 15, // Add some margin for spacing
    // backgroundColor: 'lightgray', // Background color for the components
    borderRadius:10,
    borderWidth: 0.5,
  },
  container2: {
    width: '80%', // 80% of screen width
    height: Dimensions.get('window').height * 0.1, // 10% of screen height
    backgroundColor: '#F5F9FF', // Background color for the component
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    alignSelf: 'center', // Center within its parent
    borderWidth:0.5,
    borderRadius:15,
    bottom:60
  },
  container3: {
    width: Dimensions.get('screen').width * 0.5, // 80% of screen width
    height: Dimensions.get('window').height * 0.1, // 10% of screen height
    backgroundColor: '#F5F9FF', // Background color for the component
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    alignSelf: 'center', // Center within its parent
    borderWidth:0.5,
    borderRadius:15,
  },
  text: {
    fontSize: 16, // Adjust the font size as needed
  },
  container3: {
    width: '80%', // 80% of screen width
    height: Dimensions.get('window').height * 0.3, // 40% of screen height
    backgroundColor: '#243465', // Background color for the component
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    alignSelf: 'center', // Center within its parent
    borderWidth:0.5,
    borderRadius:15,
  },
  headerText: {
    fontSize: 20,
    marginBottom: 10,
    color:'#FFFFFF'
  },
  progressBar: {
    marginVertical: 20,
    color:'#FFFFFF'
  },
  statusText: {
    fontSize: 16,
    color:'#FFFFFF'
  },
});

export default MainScreen;
