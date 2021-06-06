import React, {useEffect, useState} from 'react';
import {Text, Button, View, TextInput, Image} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ProductsStackParams} from '../../navigation/ProductsStack';
import {useStyles} from './ProductScreenStyles';
import {Picker} from '@react-native-picker/picker';
import {
  getCategories,
  createProduct,
  getProductById,
  editProduct,
  uploadImage,
} from '../../api/cafe';
import {Category} from '../../models/ProductsResponse';
import {useForm} from '../../hooks/useForm';
import {LoadingScreen} from '../LoadingScreen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface Props extends StackScreenProps<ProductsStackParams, 'product'> {}

export const ProductScreen = ({
  navigation,
  route: {
    params: {id},
  },
}: Props) => {
  const styles = useStyles();

  const edit = !!id;

  const [categories, setCategories] = useState<Category[]>([]);

  const form = useForm({
    name: '',
    categoryId: '',
    image: {
      uri: '',
    },
  });

  const handleCreate = async () => {
    try {
      await createProduct(form.values);

      navigation.pop();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleEdit = async () => {
    try {
      await editProduct(id!, form.values);

      navigation.pop();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleTakePhotoFromGallery = async () => {
    launchImageLibrary(
      {
        quality: 0.5,
        mediaType: 'photo',
      },
      response => {
        if (response.assets?.length) {
          form.handleChange('image', response.assets[0]);

          uploadImage(id!, {
            uri: response.assets[0].uri!,
            type: response.assets[0].type!,
            name: response.assets[0].fileName!,
          });
        }
      },
    );
  };

  const handleTakePhoto = async () => {
    launchCamera(
      {
        quality: 0.5,
        mediaType: 'photo',
      },
      response => {
        if (response.assets?.length) {
          form.handleChange('image', response.assets[0]);

          uploadImage(id!, {
            uri: response.assets[0].uri!,
            type: response.assets[0].type!,
            name: response.assets[0].fileName!,
          });
        }
      },
    );
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await getCategories();

        setCategories(response.categories);
      } catch (error) {
        console.log(error);
      }
    })();

    (async () => {
      if (edit && id) {
        try {
          const response = await getProductById(id);

          form.handleChange('name', response.nombre);
          form.handleChange('categoryId', response.categoria._id);
          form.handleChange('image', {
            uri: response.img || '',
          });
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, []);

  if (!categories.length || (edit && !form.values.name))
    return <LoadingScreen />;

  return (
    <View>
      <Text style={styles.label}>Nombre del producto</Text>
      <TextInput
        style={styles.input}
        value={form.values.name}
        onChangeText={value => {
          form.handleChange('name', value);
        }}
      />
      <Text style={styles.label}>Categoria</Text>
      <Picker
        selectedValue={form.values.categoryId}
        style={styles.input}
        onValueChange={value => form.handleChange('categoryId', value)}>
        <Picker.Item label={'Selecciona una opcion'} value={''} />
        {categories.map(category => (
          <Picker.Item
            key={`${category._id}pickerItem`}
            label={category.nombre}
            value={category._id}
          />
        ))}
      </Picker>
      {edit && (
        <>
          <Button title={'Camara'} onPress={handleTakePhoto} />
          <Button title={'Galeria'} onPress={handleTakePhotoFromGallery} />
        </>
      )}
      <Button
        color="purple"
        title={'Guardar'}
        onPress={edit ? handleEdit : handleCreate}
      />
      {!!form.values.image.uri && (
        <Image
          source={{uri: form.values.image.uri}}
          style={{width: 300, height: 300, resizeMode: 'contain'}}
        />
      )}
    </View>
  );
};
