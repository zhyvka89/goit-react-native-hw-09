import MemberDetails from "@/components/MemberDetails";
import MembersList from "@/components/MembersList";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import BottomTabNavigator from "./BottomTabNavigator";

export type RootStackParamList = {
  GenerationsList: undefined;
  MembersList: { generationTitle: string };
  MemberDetails: { memberId: string };
  // Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function NativeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GenerationsList"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MembersList" component={MembersList} />
      <Stack.Screen name="MemberDetails" component={MemberDetails} />
      {/* <Stack.Screen name="Details" component={MembersList} /> */}
    </Stack.Navigator>
  )
}