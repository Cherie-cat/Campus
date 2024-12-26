import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { AllStyle } from './style/style';

import HomeScreen from'./Screens/homeScreen';
import MyScreen from './Screens/myScreen';
import OaScreen from './Screens/oaScreen';
import LostAndFound from './Screens/lostAndFound'
import TextScreen from './Screens/textScreen'
import Calendar from './Screens/calendarScreen'
import Web from './Screens/webScreen'
import Contact from './Screens/contactScreen'
import SearchContact from './Screens/searchContactScreen';
import Course from './Screens/courseScreen'
import CouseLogin from './Screens/courseLogin'
import Setting from './Screens/settingScreen'
import MyGoods from './Screens/myGoods'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return(
  <Tab.Navigator
  screenOptions={({ route }) => ({
    //选中和未选中的图标颜色与样式
    tabBarIcon: ({ focused, color }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'oa') {
        iconName = focused ? 'business' : 'business-outline'; // Oa 图标
      } else if (route.name === 'my') {
        iconName = focused ? 'person' : 'person-outline'; // My 图标
      }
      color = focused ? AllStyle.color.tabIconFocused:AllStyle.color.tabIcon;
      return <Ionicons name={iconName} size={30} color={color}  />;
    },
    //调整图标与导航栏的顶部
    tabBarStyle: {
      height: 70,  // 设置底部导航栏的高度
      paddingTop: 10, // 调整底部导航栏的间距，避免图标紧贴底部
      backgroundColor:AllStyle.color.tab,
    },
    //覆盖Tab.Screen组件生成的名字 提供点击前点击后的颜色
    tabBarLabel: ({ focused }) => {
      // 根据焦点状态设置文字颜色
      return (
        <Text 
        style={{ 
          color: focused ? AllStyle.color.tabTextFocused : AllStyle.color.tabText , 
          fontSize: 16, 
          fontWeight:"regular"
          }}>
          {route.name}
        </Text>
      );

    },
    headerShown:false,

  })}

  // tabBarOptions={{
  //   activeTintColor: '#FF6347',  // 选中时的图标和文字颜色
  //   inactiveTintColor: '#8B8B8B',  // 未选中时的图标和文字颜色
  // }}
 
>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="oa" component={OaScreen} />
  <Tab.Screen name="my" component={MyScreen} />
  {/* <Tab.Screen name="text" component={TextScreen} /> */}
</Tab.Navigator>

);

}

export default function App() {

  return (

    <NavigationContainer>
{/* 堆栈导航，可以使得页面之间跳转 */}
    <Stack.Navigator>
    <Stack.Screen
          //意味在登录后会看到底部标签导航   用户可以在不同的功能页面之间进行切换
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{ headerShown: false }} 
          />
        <Stack.Screen name="home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="lostAndFound" component={LostAndFound}  options={{ headerShown: false }} />
        <Stack.Screen name="calendar" component={Calendar}  options={{ headerShown: false }} />
        <Stack.Screen name="web" component={Web}  options={{ headerShown: false }} />
        <Stack.Screen name="contact" component={Contact}  options={{ headerShown: false }} />
        <Stack.Screen name="searchContact" component={SearchContact}  options={{ headerShown: false }} />
        <Stack.Screen name="course" component={Course}  options={{ headerShown: false }} />
        <Stack.Screen name="courseLogin" component={CouseLogin}  options={{ headerShown: false }} />
        <Stack.Screen name="setting" component={Setting}  options={{ headerShown: false }} />
        <Stack.Screen name="myGoods" component={MyGoods}  options={{ headerShown: false }} />
        
      </Stack.Navigator>


    </NavigationContainer>

  );
}

const styles = StyleSheet.create({



});
