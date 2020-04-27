import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Container,
  NoItens,
  HeaderModal,
  HeaderModalTitle,
  PokemonList,
  ModalContainer,
  ModalRadioForm,
  CloseModal,
  Line,
  CheckboxContainer,
} from './styles';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import Error from '../../components/ErrorBox';
import Card from './Card';
import {Modal, View, Text, TouchableHighlight} from 'react-native';
import axios from 'axios';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import CheckBox from '@react-native-community/checkbox';

export default function Pokemon() {
  const stateLogin = useSelector((state) => {
    return state.userData;
  });
  const flatListRef = React.useRef();

  let [isFetching, setIsFetching] = useState(false);
  let [pokemonList, setPokemonList] = useState([]);
  let [endList, setEndList] = useState(false);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);
  let [errorMessage, setErrorMessage] = useState('');
  let [modalVisible, setModalVisible] = useState(false);
  let [filter, setFilter] = useState({
    page: 1,
    list: 1,
    shiny: 1,
  });
  let radio_props = [
    {label: 'Todos', value: 1},
    {label: 'Capturados', value: 2},
    {label: 'Não Capturados', value: 3},
  ];

  useEffect(() => {
    setEndList(false);
    getmorePokemon();
  }, [filter]);

  const onRefresh = async () => {
    setIsFetching(true);
    // setFilter({...filter, page: 1});
    setIsFetching(false);
  };

  const getmorePokemon = async () => {
    if (!endList) {
      setLoading(true);
      const response = await axios.request({
        method: 'get',
        url: `http://10.0.3.2:3333/pokemons?page=${filter.page}&perPage=60&list=${filter.list}&shiny=${filter.shiny}`,
        headers: {
          authorization: `Bearer ${stateLogin.jwt}`,
        },
      });

      filter.page === 1
        ? setPokemonList(response.data.content.data)
        : setPokemonList([...pokemonList, ...response.data.content.data]);
      if (response.data.content.data.length < 10) {
        setEndList(true);
      }
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header title="Pokemon" />
      {loading && <Loading />}
      {error && <Error message={errorMessage} />}
      {!loading && pokemonList.length === 0 && (
        <NoItens>Nenhum pokemon encontrado!</NoItens>
      )}
      <PokemonList
        numColumns={3}
        ref={flatListRef}
        data={pokemonList}
        extraData={filter}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          setFilter({...filter, page: filter.page + 1});
        }}
        renderItem={({item, key}) => {
          return (
            <Card
              key={key}
              image={item.image}
              name={item.name}
              number={item.number}
              gender={item.gender}
              shiny={item.shiny}
              captured={item.captured.length}
              id={item.id}
            />
          );
        }}
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <HeaderModal>
          <HeaderModalTitle>
            <Text style={{fontSize: 24}}>Filtros</Text>
          </HeaderModalTitle>
          <TouchableHighlight
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <CloseModal>X</CloseModal>
          </TouchableHighlight>
        </HeaderModal>

        <ModalContainer>
          <View>
            <Text>Mostrar:</Text>
            <ModalRadioForm
              radio_props={radio_props}
              buttonSize={10}
              initial={filter.list - 1}
              buttonColor="#008577"
              selectedButtonColor="#008577"
              onPress={async (value) => {
                flatListRef.current.scrollToOffset({animated: true, offset: 0});
                setFilter({...filter, page: 1, list: value});
              }}
            />
          </View>
          <Line />

          <CheckboxContainer>
            <CheckBox
              value={filter.shiny === 1 ? true : false}
              onValueChange={(val) => {
                flatListRef.current.scrollToOffset({animated: true, offset: 0});
                setFilter({...filter, page: 1, shiny: val === true ? 1 : 0});
              }}
            />
            <Text>Shiny</Text>
          </CheckboxContainer>
        </ModalContainer>
      </Modal>
      <ActionButton
        size={46}
        offsetX={12}
        offsetY={12}
        buttonColor="rgba(231,76,60,1)"
        renderIcon={() => (
          <Icon
            name="filter"
            style={{fontSize: 22, height: 22, color: 'white'}}
          />
        )}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
    </Container>
  );
}
