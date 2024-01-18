/* eslint-disable react-hooks/exhaustive-deps *//* eslint-disable prettier/prettier *//* eslint-disable react/react-in-jsx-scope */
import { TouchableOpacity, View } from 'react-native';
import { ContainerLogin, Imagelog } from '../styles/login.styles';
import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import Text from '../../../shared/components/text/Text';
import React from 'react';

const Login = () => {
  const {
    login,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();


  return (
    <View>
      <ContainerLogin>
        <Imagelog
          resizeMode="contain"
          source={require('../../../assets/images/download.png')}
        />
        <Input
          value={login}
          errorMessage={errorMessage}
          margin="0px 0px 8px 0px"
          title="Usuario:"
          placeholder="Digite seu email"
          onChange={handleOnChangeEmail}
        />
        <Input
          errorMessage={errorMessage}
          value={password}
          secureTextEntry
          title="Senha:"
          onChange={handleOnChangePassword}
          placeholder="Digite sua senha"

        />
        <TouchableOpacity>
          <Text
            customMargin="10px"
          >
          </Text>
        </TouchableOpacity>
        <Button
          loading={loading}
          type={theme.buttons.buttonsTheme.primary}
          title="ENTRAR"
          onPress={handleOnPress}
        />
        <Imagelog
          resizeMode="contain"
          source={require('../../../assets/images/2021_logo-luminato_othon-de-carvalho_page-0002-removebg-preview.png')}
        />
      </ContainerLogin>
    </View>
  );
};
export default Login;
