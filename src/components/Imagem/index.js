import React, {useState} from 'react';

import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {url_upload} from '../../services/upload';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

export default function Imagem({tem_imagem, link_imagem}) {
  const [modalOpened, setModalOpened] = useState(false);
  const toggleModal = () => setModalOpened(modal => !modal);
  const url = `${url_upload()}${link_imagem}`;

  if (!tem_imagem) {return <></>};

  if (modalOpened) {
    return (
      <Modal 
        visible={modalOpened}
        transparent={true}
        onDismiss={toggleModal}
        onRequestClose={toggleModal}>
        <ImageViewer
          imageUrls={[
            {
              url: url,
            },
          ]}
        />
      </Modal>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Image style={styles.imagem} source={{uri: url}} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
