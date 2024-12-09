import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex-1 items-center justify-center">
          <Image
            source={images.logo}
            style={{ width: 130, height: 84 }}
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            style={{ width: 380, height: 300 }}
            resizeMode="contain"
          />

          <View className="mt-5 relative">
            <Text className="text-3xl text-white text-center font-bold">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              style={{ width: 136, height: 15 }}
              className="absolute -bottom-2 -right-8"
            />
          </View>

          {/* <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            /> */}
        </View>

        {/* <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text> */}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
