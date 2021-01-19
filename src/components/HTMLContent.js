import React from 'react';
import {Image, StyleSheet, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';

const HTMLContent = ({htmlContent}) => {
  const contentWidth = useWindowDimensions().width;
  return (
    <HTML
      renderers={{
        img: () => {
          return (
            <Image
              style={styles.imageContainer}
              source={require('../assets/michael.jpg')}
            />
          );
        },
      }}
      source={{html: htmlContent}}
      contentWidth={contentWidth}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 150,
    width: 150,
  },
});

export default HTMLContent;
