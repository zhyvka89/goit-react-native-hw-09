import { fetchUserDetails } from "@/api";
import { RootStackParamList } from "@/navigation/NativeStackNavigator";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, 'MemberDetails'>;

type MemberDetailsType = {
  name?: string;
  email?: string;
};

export default function MemberDetails({ route }: Props) {
  const { memberId } = route.params;
  const [memberDetails, setMemberDetails] = useState<MemberDetailsType>({});

  useEffect(() => {
    fetchUserDetails(memberId)
      .then((result) => setMemberDetails(result))
      .catch((error) => console.error(error));
  }, [memberId]);

  const handlePaymentsPress = () => {
    Alert.alert("Navigate to Payments");
  };

  const handleAttendancePress = () => {
    Alert.alert("Navigate to Training Attendance");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/avatar.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>{memberDetails.name}</Text>
        <Text style={styles.birthday}>Email: {memberDetails.email}</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.listItem} onPress={handlePaymentsPress}>
          <Text style={styles.listItemText}>Payments</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.listItem}
          onPress={handleAttendancePress}
        >
          <Text style={styles.listItemText}>Training Attendance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  birthday: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
  listItem: {
    padding: 16,
    backgroundColor: "#f2f2f2",
    color: "#555",
    borderRadius: 8,
    marginTop: 26,
  },
  listItemText: {
    fontSize: 18,
  },
});
