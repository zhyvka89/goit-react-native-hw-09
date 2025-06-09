import { fetchUsers } from "@/api";
import { RootStackParamList } from "@/navigation/NativeStackNavigator";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, 'MembersList'>;

export default function MembersList({
  route,
  navigation,
}: Props) {
  const { generationTitle } = route.params;
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then((result) => setMembers(result))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{generationTitle} Members</Text>

      <FlatList
        data={members}
        key={"2-cols"}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.memberRow}
            onPress={() =>
              navigation.navigate("MemberDetails", { memberId: item.id })
            }
          >
            <Image
              source={require("../assets/images/avatar.jpg")}
              style={styles.avatar}
            />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
  },
});
