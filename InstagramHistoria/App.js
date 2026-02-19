import { StyleSheet, Text, ScrollView, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useFonts, GrandHotel_400Regular } from '@expo-google-fonts/grand-hotel';
import { useState } from 'react';
const App = () => {
  const [numberLikes, setNumberLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);     // corazón
  const [isSaved, setIsSaved] = useState(false);     // marcador

  const handleLike = () => {
    if (isLiked) {
      setNumberLikes(numberLikes - 1);
    } else {
      setNumberLikes(numberLikes + 1);
    }
    setIsLiked(!isLiked); 
  };

  const handleSave = () => {
    setIsSaved(!isSaved); 
  };
  // Carga de la fuente personalizada (Grand Hotel) de Google Fonts
  let [fontsLoaded] = useFonts({
    GrandHotel_400Regular,
  });
  // Si la fuente aún no carga, retornamos null para no mostrar una pantalla rota
  if (!fontsLoaded) return null;
  return (
    // SafeAreaView: Evita que el contenido se encime con la batería o el "notch"
    <SafeAreaView style={styles.mainWrapper}>
      {/* ScrollView: Permite que el contenido vertical sea deslizable */}
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}> 
        {/* Contenedor del título centrado */}
        <View style={styles.titleContainer}> 
          <Text style={styles.textTile}>Instagram</Text>
        </View>
        {/* Cabecera del post */}
        <View style={styles.headerUser}>
          <Image source={require('./assets/Ima/cuenta.png')} style={styles.profileImage} />
          <Text style={styles.username}>@Su_amigo_el_nenuco</Text>
        </View>
        {/* Imagen principal  */}
        <Image source={require('./assets/Ima/jOK.jpeg')} style={styles.postImage} />
        {/* Fila de acciones */}
        <View style={styles.actionRow}>
          <View style={styles.leftIcons}>
              {/* BOTÓN DE LIKE */}
              <TouchableOpacity onPress={handleLike} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image 
                  source={require('./assets/Ima/amor-de-corazon.png')} 
                  style={[styles.iconSize, { tintColor: isLiked ? 'red' : 'black' }]} 
                />
                {numberLikes > 0 && <Text style={{ marginRight: 15, fontWeight: 'bold' }}>{numberLikes}</Text>}
              </TouchableOpacity>
                      <Image source={require('./assets/Ima/comente.png')} style={styles.iconSize}/>
            <Image source={require('./assets/Ima/enviar.png')} style={styles.iconSize}/>
          </View>
            {/* BOTÓN DE GUARDAR */}
              <TouchableOpacity onPress={handleSave}>
                <Image 
                  source={require('./assets/Ima/marcador.png')} 
                  style={[styles.iconSize, { marginRight: 0, tintColor: isSaved ? '#f1c40f' : 'black' }]} 
                />
              </TouchableOpacity>
        </View>
        {/* Sección de descripción y hashtags */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.username}>@Su_amigo_el_nenuco </Text>
          <Text style={styles.postText}>Grande el joker </Text>
          <Text style={styles.hashtag}>#memeringo</Text>
        </View>
      </ScrollView>
      {/* Menú inferior (Barra de navegación) */}
      {/* Se coloca AFUERA del ScrollView para que se mantenga fijo abajo */}
      <View style={styles.navBar}>
        <Image source={require('./assets/Ima/hogar.png')} style={styles.navIcon} />
        <Image source={require('./assets/Ima/buscar.png')} style={styles.navIcon} />
        <Image source={require('./assets/Ima/agregar.png')} style={styles.navIcon} />
        <Image source={require('./assets/Ima/me-gusta.png')} style={styles.navIcon} />
        <Image source={require('./assets/Ima/perfil.png')} style={styles.navIcon} />
      </View>
    </SafeAreaView>
  );
}
export default App;
const styles = StyleSheet.create({
  mainWrapper: { 
    flex: 1, // Hace que la aplicación ocupe toda la pantalla
    backgroundColor: '#fff' 
  },
  container: { flex: 1 },
  scrollContent: { paddingBottom: 20 },
  
  titleContainer: { 
    paddingTop: 10, 
    width: "100%" 
  },
  textTile: {
    fontSize: 45,
    fontFamily: 'GrandHotel_400Regular', 
    textAlign: 'center', // Centra el texto del logo
  },
  
  // Contenedor horizontal para usuario e imagen
  headerUser: {
    flexDirection: 'row', // Alinea horizontalmente
    alignItems: 'center', // Centra verticalmente los elementos dentro de la fila
    padding: 10,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5, // Hace la imagen circular (mitad del ancho)
    marginRight: 10, // Espacio entre imagen y texto
  },
  username: { 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  
  postImage: {
    width: '100%', // Ocupa todo el ancho disponible
    height: 400,
    resizeMode: 'cover', // Ajusta la imagen sin deformarla
  },
  
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Empuja el marcador al extremo derecho
    padding: 12,
  },
  leftIcons: { 
    flexDirection: 'row' // Mantiene los 3 iconos en línea
  },
  iconSize: {
    width: 25,
    height: 25,
    marginRight: 15, // Espacio entre cada icono de la izquierda
    resizeMode: 'contain',
  },
  
  descriptionContainer: {
    flexDirection: 'row', // Nombre y descripción en la misma línea
    paddingHorizontal: 12,
    flexWrap: 'wrap', // Si el texto es largo, salta de línea
  },
  postText: { fontSize: 14 },
  hashtag: { color: '#00376b', marginLeft: 5 },

  // Estilo de la barra fija inferior
  navBar: {
    flexDirection: 'row', 
    justifyContent: 'space-around', // Distribuye iconos con espacio uniforme
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1, // Línea gris superior para separar del contenido
    borderTopColor: '#dbdbdb',
    backgroundColor: '#fff',
  },   
  navIcon: {
    width: 28, // Tamaño estándar para iconos de navegación
    height: 28,
  },
});