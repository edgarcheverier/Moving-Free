import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("ios-car", 30),
    Icon.getImageSource("ios-home", 30),
    Icon.getImageSource("ios-chatbubbles", 30)
  ]).then(icons => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "rentACar-screen.RentACar",
          label: "Rent A Car",
          title: "Rent A Car",
          icon: icons[0],
        },
        {
          screen: "welcome-screen.WelcomeScreen",
          label: "Home",
          title: "Welcome",
          icon: icons[1]
        },
        {
          screen: "message-screen.MessageScreen",
          label: "Messages",
          title: "Messages",
          icon: icons[2]
        }
      ],
      appStyle: {
        navBarHidden: true,
      }
    })
  });
}

export default startTabs;