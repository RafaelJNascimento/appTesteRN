import React from 'react';
import { Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';

import {
  Container,
  TitleContent,
  ImageItem,
  TitleItem,
  SubTitleItem,
  BodyContent,
  ContentDescription,
  DescriptionText,
  DescriptionItem,
  FooterContent,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const Detail = () => {

  const { params } = useRoute();

  const returnDate = (releaseDate) => {
    let a = new Date(releaseDate)
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    return date + ' ' + month + ' ' + year;
  }

  const openURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  }


  return (
    <Container>
      <TitleContent>
        <ImageItem source={{ uri: params.item.artworkUrl100 }} />
        <TitleItem>{params.item.trackName}</TitleItem>
        <SubTitleItem>{params.item.collectionName}</SubTitleItem>
      </TitleContent>
      <BodyContent>
        <ContentDescription>
          <DescriptionText>Description</DescriptionText>
          <DescriptionItem>Track Number: {params.item.trackNumber}</DescriptionItem>
          <DescriptionItem>Artist Name: {params.item.artistName}</DescriptionItem>
          <DescriptionItem>Track Name: {params.item.trackName}</DescriptionItem>
          <DescriptionItem>Primary Genre Name: {params.item.primaryGenreName}</DescriptionItem>
          <DescriptionItem>Release Date: {returnDate(params.item.releaseDate)}</DescriptionItem>
        </ContentDescription>
      </BodyContent>
      <FooterContent>
        <SubmitButton onPress={() => { openURL(params.item.trackViewUrl) }}>
          <SubmitButtonText>Buy Now For ${params.item.trackPrice}</SubmitButtonText>
        </SubmitButton>
      </FooterContent>
    </Container>
  );
}

export default Detail;