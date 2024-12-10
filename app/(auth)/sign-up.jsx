import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full flex px-4 my-6 justify-center min-h-[85vh]'>
          <Image
            source={images.logo}
            style={{ width: 115, height: 35 }}
            resizeMode='contain'
          />
          <Text className='text-2xl text-white font-psemibold mt-10'>
            Sign Up Into Aora
          </Text>
          <FormField
            title='Username'
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles='mt-10'
          />
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboardTybe='email-address'
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-7'
          />
          <CustomButton
            title={"Sign In"}
            handlePress={submit}
            containerStyles={"mt-7"}
            isLoading={isSubmitting}
          />
          <View className='flex-row gap-2 pt-8 justify-center'>
            <Text className='text-gray-100 font-pregular text-lg'>
              Have an Account Already?
            </Text>
            <Link
              className='text-lg text-secondary font-psemibold'
              href={"/sign-in"}
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
