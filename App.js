import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import writeStory from './screens/write';
import readScreen from './screens/read';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: writeStory},
  Read: {screen: readScreen},
},
{
  // defaultNavigationOptions:({navigation})=>({
  //   tabBarIcon:()=>{
  //     const routeName=navigation.state.routeName
  //     if(routeName==='Transaction'){
  //       return(
  //         <image source={require('./assets/book.png')}
  //         style={{width:40,height:40}}
  //         ></image>
  //       )
  //     }
  //       else if(routeName!='Transaction');{
  //         return(
  //           <image source={require('./assets/searchingbook.png')}
  //           style={{width:40,height:40}}
  //           />
  //         )
  //       }
    
    //   }  })
    }
)
  
const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
