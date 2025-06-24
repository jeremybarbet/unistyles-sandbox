import { FlatList, Text } from 'react-native';

import currencies from './currencies.json';

type Item = (typeof currencies)[number];

const Modal = () => {
  const renderItem = ({ item }: { item: Item }) => {
    return <Text>{item.name}</Text>;
  };

  return <FlatList data={currencies} renderItem={renderItem} />;
};

// eslint-disable-next-line import/no-unused-modules
export default Modal;
