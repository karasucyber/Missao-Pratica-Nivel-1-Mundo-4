import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const MyComponent = () => {
  const [text, setText] = useState('');

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(' ')
          .map(word => (word ? '🍕' : ''))
          .join(' ')}
      </Text>
    </View>
  );
};

export default MyComponent;
