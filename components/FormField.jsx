import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";

const FormField = ({
  title,
  value,
  handleChangeText,
  placeholder,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-gray-100 text-base font-pmedium'>{title}</Text>
      <View
        className={`flex-row items-center justify-center border-2 rounded-2xl 
       bg-black-100 text-gray-100 px-4 h-16 ${
         isFocused ? "border-secondary" : "border-black-200"
       }`}
      >
        <TextInput
          className='text-white font-psemibold flex-1 text-base'
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
