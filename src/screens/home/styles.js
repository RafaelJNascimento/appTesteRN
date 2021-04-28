import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #121212;
  font-weight: bold;
  text-align: center;
  margin-top: 7%;
  margin-bottom: 10%;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  max-height: 192px;
`;

export const ListItem = styled.TouchableOpacity`
  height: 192px;
  width: 142px;
  margin: 2px;
  align-items: center;
  padding: 5px;
  background-color: #F3E7DD;

  border-radius: 8px;
`;

export const ImageListItem = styled.Image`
  margin-top: 10px;
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;

export const ListFooter = styled.View`
  width: 100px;
  margin-top: 10px;
`;

export const TrackName = styled.Text`
  font-size: 12px;
  color: #333333;
  font-weight: bold;
`;

export const ArtistName = styled.Text`
  font-size: 10px;
  line-height: 18px;
  color: #c1c0c3;
`;



