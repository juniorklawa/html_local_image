import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import HTML from 'react-native-render-html';

const App = () => {
  const contentWidth = useWindowDimensions().width;

  const htmlContent = ` <h1>This HTML snippet is now rendered with native components !</h1>
  <img source="dwight"/>
  <h2>Enjoy a webview-free and blazing fast application</h2>
  <em>Some random sentence!</em>`;

  const imageList = {
    dwight: require('./src/assets/dwight.jpg'),
    michael: require('./src/assets/michael.jpg'),
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <HTML
          renderers={{
            img: (attribs) => {
              const imagePath = attribs.source;
              return (
                <Image
                  key={attribs.source}
                  style={styles.imageContainer}
                  source={imageList[imagePath]}
                />
              );
            },
          }}
          source={{html: htmlContent}}
          contentWidth={contentWidth}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  imageContainer: {
    height: 150,
    width: 150,
  },
});

export default App;
