import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const TitleContent = styled.View`
  height: 300px;
  width: 100%;
  background-color: #f3e7dd;
  align-items: center;
  justify-content: center;
`;

export const ImageItem = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 20px;
  border-radius: 5px;
`;

export const TitleItem = styled.Text`
  color: #131212;
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const SubTitleItem = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #AAAAAA;
  text-align: center;
`;

export const BodyContent = styled.View`
  flex: 1;
  min-width: 100%;
  padding: 12px;
`;

export const ContentDescription = styled.View`
  flex: 1;
  padding-left: 23px;
  max-height: 145px;
  border-left-width: 3px;
  border-color: #ccc;
`;

export const DescriptionText = styled.Text`
  font-size: 18px;
  margin-bottom: 6px;
  color: #121212;
  font-weight: bold;
`;

export const DescriptionItem = styled.Text`
  font-size: 16px;
  color: #AAAAAA;
  font-style: normal;
`;

export const FooterContent = styled.View`
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled(RectButton)`
  width: 98%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #413B89;
  border-radius: 6px;
  padding: 0 12px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 18px;
  color: #EECEE7;
`;
