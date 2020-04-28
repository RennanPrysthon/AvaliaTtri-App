import React from 'react';

import { View, Image, StyleSheet } from 'react-native';
import { url_upload } from '../../services/upload';

export default function Imagem({ tem_imagem, link_imagem }) {
  return (
    <View style={styles.container}>
      {
        tem_imagem &&
        <Image
          style={styles.imagem}
          source={{
            uri: `${url_upload()}${link_imagem}`
          }}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  imagem: {
    width: 200,
    height: 200
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
