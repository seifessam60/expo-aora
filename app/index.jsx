import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { images } from "../constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function Index() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='flex w-full min-h-[85vh] items-center justify-center px-4'>
          <Image
            source={images.logo}
            style={{ width: 130, height: 84 }}
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            style={{ width: 380, height: 300 }}
            resizeMode='contain '
          />

          <View className='mt-5 relative'>
            <Text className='text-3xl text-white text-center font-bold'>
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              style={{ width: 136, height: 15 }}
              className='absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            title='Continue With Email'
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles='mt-7 w-full'
          />
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor={"#161622"}
        barStyle={"light-content"}
      />
    </SafeAreaView>
  );
}
