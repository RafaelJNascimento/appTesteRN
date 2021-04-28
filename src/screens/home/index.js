import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import api from '../../services';

import {
  Container,
  Title,
  List,
  ListItem,
  ImageListItem,
  ListFooter,
  TrackName,
  ArtistName
} from './styles';

const home = () => {

  const [results, setResults] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    await api
      .get('/search?term=queen&limit=10')
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Title>Popular Now</Title>
      <List
        data={results}
        horizontal
        keyExtractor={(result) => String(result.trackId)}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => {
              navigation.navigate(
                'Detail',
                { item }
              )
            }}
          >
            <ImageListItem source={{ uri: item.artworkUrl100 }} />
            <ListFooter>
              <TrackName>{item.trackName}</TrackName>
              <ArtistName>{item.artistName}</ArtistName>
            </ListFooter>
          </ListItem>
        )
        }
      />
    </Container>
  );
}

export default home;