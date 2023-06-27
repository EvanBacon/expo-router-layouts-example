import { Tabs } from 'expo-router'
import Head from 'expo-router/head'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Layout() {
  return (
    <>
      <Head>
        <title>Expo Router Layouts Demo</title>
        <meta name="description" content="Expo Router Layouts Demo" />
      </Head>
      <Tabs
        screenOptions={{
          tabBarInactiveTintColor: '#000',
          tabBarIcon: () => <Icon name="caret-down" size={30} />,
        }}
      />
    </>
  )
}
