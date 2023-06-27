import { Tabs } from '../../layouts/tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

export const unstable_settings = {
  initialRouteName: 'index',
}

export default function Layout(props) {
  return (
    <Tabs
      screenOptions={{
        // API Reference: https://reactnavigation.org/docs/bottom-tab-navigator#options
        tabBarIcon: ({}) => <Icon name="caret-down" size={30} />,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <Icon name="home" size={30} />,
        }}
      />
    </Tabs>
  )
}
