import React, {useEffect} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  RefreshControl,
} from 'react-native';
import {useProducts} from '../../context/Products';
import {useStyles} from './ProductsScreenStyles';
import {ProductsStackParams} from '../../navigation/ProductsStack';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<ProductsStackParams, 'products'> {}

export const ProductsScreen = ({navigation}: Props) => {
  const styles = useStyles();
  const {products, loadProducts} = useProducts();

  useEffect(() => {
    loadProducts();

    navigation.setOptions({
      headerRight: () => (
        <Button
          title={'Crear un producto'}
          onPress={() => navigation.navigate('product', {})}
        />
      ),
    });
  }, []);

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={loadProducts} />
      }
      data={products}
      keyExtractor={item => item._id}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('product', {id: item._id})}>
          <Text style={styles.product}>{item.nombre}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
