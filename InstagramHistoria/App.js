import { StyleSheet, Text, ScrollView, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useFonts, GrandHotel_400Regular } from '@expo-google-fonts/grand-hotel';
import { useState } from 'react';
const App = () => {
  const [numberLikes, setNumberLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);     // corazón
  const [isSaved, setIsSaved] = useState(false);     // marcador
  const [MostrarHistoria, setMostrarHistoria] = useState(false); // Mostrar la historia o no
  const [vistas, setVistas] = useState(0);             // contador
  const [Abierta, setAbierta] = useState(false);      // un booleano pa saber si ya fue vista o no
  
  //abrir historia
    const abrir = () => {
    setMostrarHistoria(true);
    setVistas(vistas + 1);
    setAbierta(true);
  };
  //cerrar historia
    const cerrar = () => {
    setMostrarHistoria(false);
  };

  //para q funcione el contador d likes
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
  // fuente 
  let [fontsLoaded] = useFonts({
    GrandHotel_400Regular,
  });
  // por si acaso
  if (!fontsLoaded) return null;
  return (
    // SafeAreaView servia para tener en cuenta la barrita d acceso
    <SafeAreaView style={styles.mainWrapper}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}> 
        {/* titulo */}
        <View style={styles.titleContainer}> 
          <Text style={styles.textTile}>Instagram</Text>
        </View>
        {/*usuario*/}
        <View style={styles.headerUser}>
          <TouchableOpacity onPress={abrir}>
            <Image source={require('./assets/Ima/cuenta.png')} style={styles.profileImage} />
            </TouchableOpacity>
            <View>
              <Text style={styles.username}>@Su_amigo_el_nenuco</Text>
              <Text style={{fontSize: 10, color: 'gray'}}>
                {Abierta ? "Vista" : "Historia no vista"}
              </Text>
            </View>
        </View>
        {/* Joker */}
        <Image source={require('./assets/Ima/jOK.jpeg')} style={styles.postImage} />
        {/*iconos */}
        <View style={styles.actionRow}>
          <View style={styles.leftIcons}>
              {/*Like*/}
              <TouchableOpacity onPress={handleLike} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image 
                  source={require('./assets/Ima/amor-de-corazon.png')} 
                  style={[styles.iconSize, { tintColor: isLiked ? 'red' : 'black' }]} 
                />
                {numberLikes > 0 && <Text style={{ marginRight: 15, fontWeight: 'bold' }}>{numberLikes}</Text>}
              </TouchableOpacity>
              {/*comentar y enviar*/}
                      <Image source={require('./assets/Ima/comente.png')} style={styles.iconSize}/>
            <Image source={require('./assets/Ima/enviar.png')} style={styles.iconSize}/>
          </View>
            {/* marcador*/}
              <TouchableOpacity onPress={handleSave}>
                <Image 
                  source={require('./assets/Ima/marcador.png')} 
                  style={[styles.iconSize, { marginRight: 0, tintColor: isSaved ? '#f1c40f' : 'black' }]} 
                />
              </TouchableOpacity>
        </View>
        {/* texto */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.username}>@Su_amigo_el_nenuco </Text>
          <Text style={styles.postText}>Grande el joker </Text>
          <Text style={styles.hashtag}>#memeringo</Text>
        </View>
      </ScrollView>
      {MostrarHistoria && (
      <View style={styles.storyOverlay}>
        <Image source={require('./assets/Ima/jOK.jpeg')} style={styles.storyBackground} />
        <View style={styles.storyContent}>
          <Text style={styles.storyUser}>@Su_amigo_el_nenuco</Text>
          <Text style={styles.storyText}>El mejor del mundo</Text>
          <Text style={styles.storyViews}>Vistas: {vistas}</Text>
          
          <TouchableOpacity style={styles.closeButton} onPress={cerrar}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Cerrar historia</Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
      {/* menu*/}
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
    flex: 1,
    backgroundColor: '#fff' 
  },
  container: { flex: 1 },
  scrollContent: { paddingBottom: 20 },
  
  titleContainer: { 
    paddingTop:10, 
    width: "100%" 
  },
  textTile: {
    fontSize: 45,
    fontFamily: 'GrandHotel_400Regular', 
    textAlign: 'center', 
  },
  
  // para el usuario e imagen queden bn
  headerUser: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5, 
    marginRight: 10, 
  },
  username: { 
    fontWeight: 'bold', 
    fontSize: 14 
  },
  
  postImage: {
    width: '100%', 
    height: 400,
    resizeMode: 'cover', // puse esto por q se me deformaba la imagen asi feo
  },
  
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    padding: 12,
  },
  leftIcons: { 
    flexDirection: 'row' 
  },
  iconSize: {
    width: 25,
    height: 25,
    marginRight: 15, 
    resizeMode: 'contain',
  },
  
  descriptionContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 12,
    flexWrap: 'wrap', // para q no me quede todo pegado
  },
  postText: { fontSize: 14 },
  hashtag: { color: '#00376b', marginLeft: 5 },

  //el menu o barra d navegacion
  navBar: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1, 
    borderTopColor: '#dbdbdb',
    backgroundColor: '#fff',
  },   
  navIcon: {
    width: 28,
    height: 28,
  },
  storyOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'black',
  zIndex: 10, 
  },
  storyBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.7,
  },
  storyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyUser: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  storyText: { color: 'white', fontSize: 18, marginVertical: 20 },
  storyViews: { color: 'white', fontSize: 14, marginBottom: 30 },
  closeButton: {
    backgroundColor: 'rgba(255,0,0,0.6)',
    padding: 15,
    borderRadius: 10,
  }
});