import { Button, Title, Paragraph } from "react-native-paper";
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";

import { View } from "react-native";
import Register from "./Register";
import Login from "./Login";

export default function TabPage() {
  return (
    <Tabs
      // defaultIndex={0} // default = 0
      // uppercase={false} // true/false | default=true | labels are uppercase
      // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
      // iconPosition // leading, top | default=leading
      // style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper
      // dark={false} // works the same as AppBar in react-native-paper
      // theme={} // works the same as AppBar in react-native-paper
      // mode="scrollable" // fixed, scrollable | default=fixed
      // onChangeIndex={(newIndex) => {}} // react on index change
      // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
      // disableSwipe={false} // (default=false) disable swipe to left/right gestures
      style={{ marginTop: 30 , backgroundColor: 'blue'}}
      iconPosition="top"
    >
      <TabScreen label="Explore" icon="compass">
        <Register />
      </TabScreen>
      <TabScreen label="Flights" icon="airplane">
        <Login />
      </TabScreen>
      <TabScreen
        label="Trips"
        icon="bag-suitcase"
        // optional props
        // onPressIn={() => {
        //   console.log('onPressIn explore');
        // }}
        // onPress={() => {
        //   console.log('onPress explore');
        // }}
      >
        <View style={{ backgroundColor: "red", flex: 1 }} />
      </TabScreen>
    </Tabs>
  );
}
