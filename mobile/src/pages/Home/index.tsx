import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import {
  Container,
  Main,
  Title,
  Description,
  Footer,
  Button,
  ButtonIcon,
  ButtonText,
  Input,
} from './styles';

const Home = () => {
  return (
    <ImageBackground
      source={require('.../.../assets/home-background.pnl')}
      style={Container}
      imageStyle={{ width: 274, height: 368 }}
    >
      <View style={Main}>
        <Image source={require('../../assets/logo.png')}></Image>
        <Text style={Title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={Description}>
          Ajudamos pessoas a encontrar pontos de coleta de forma eficiente.
        </Text>
      </View>

      <View style={Footer}>
        <RectButton style={Button} onPress={() => {}}>
          <View style={ButtonIcon}>
            <Text>></Text>
          </View>
          <Text style={ButtonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;
