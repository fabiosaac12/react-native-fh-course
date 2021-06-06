import React, { useState } from 'react';
import { ScreenContainer } from '../../components/ScreenContainer';
import { Modal, Button, View } from 'react-native';
import { useTheme } from '../../context/Theme';

export const ModalScreen = () => {
  const {
    theme: { colors },
  } = useTheme();

  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <ScreenContainer>
      <Button
        color={colors.primary}
        title="Show modal"
        onPress={handleShowModal}
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={handleCloseModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000020',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 200,
              height: 150,
              backgroundColor: colors.card,
              borderRadius: 10,
            }}>
            <Button
              color={colors.primary}
              title="Close modal"
              onPress={handleCloseModal}
            />
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};
