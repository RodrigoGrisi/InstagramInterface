import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function List(props) {


  function carregaIcone(likeada) {

    return likeada ? require('../img/likeada.png') : require('../img/like.png')

  }

  function mostraLikes(likers) {
    if (likers === 0) {
      return
    }


    return (
      <Text style={{ fontWeight: 'bold', marginLeft: 5 }}> {likers} {likers > 1 ? "curtidas": "curtida"}</Text>
    )

  }

  return (
    <View>
      <View style={styles.viewPerfil}>
        <Image
          source={{ uri: props.data.imgperfil }}
          style={styles.imgPerfil}
        />
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>
      <Image
        resizeMode="cover"
        source={{ uri: props.data.imgPublicacao }}
        style={styles.imgPublicação}
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
            source={carregaIcone(props.data.likeada)}
            style={styles.coracaoIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnsend}>
          <Image
            source={require('../img/comment.png')}
            style={styles.commentIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
          <Image
            source={require('../img/send.png')}
            style={styles.commentIcon}
          />
        </TouchableOpacity>

      </View>
        {mostraLikes(props.data.likers)}

        <Text style={{ paddingLeft: 5, fontWeight: 'bold'}}> {props.data.nome}</Text>
      <Text style={styles.textoDescricao}>{props.data.descricao}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  imgPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUsuario: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 10
  },
  imgPublicação: {
    height: 300,
    alignItems: 'center'
  },
  textoDescricao: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
    marginLeft: 8,
    marginRight: 10,
  },
  areaBtn: {
    marginTop: 8,
    marginLeft: 5,
    marginBottom: 10,
    flexDirection: 'row',
    gap: 8
  },
  coracaoIcon: {
    height: 20,
    width: 20
  },
  commentIcon: {
    width: 21,
    height: 20
  },
  btnsend: {
  }
})