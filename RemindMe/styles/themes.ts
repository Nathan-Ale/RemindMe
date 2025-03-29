import { Button, StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
  container: {
  flex:1,
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
  },
  containerInicio:{
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  picker: {
    color: 'black',
    backgroundColor: 'white',
  },
  text: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center',
  },
  button:{
    backgroundColor: '#1c8adb',
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 15,
  },
  Label:{
      color:"black",
      backgroundColor: 'white',
  },
  userCard: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
},

userText: {
    color: "#000",
    fontSize: 16,
},
titleusers: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
    textAlign: "center",
},
tituloInput: {
  height: 40,
  borderColor: '#ccc',
  borderWidth: 1,
  marginBottom: 16,
  paddingHorizontal: 8,
  backgroundColor: '#fff',
  borderRadius: 10,
},
descripcioninput: {
  height: 110,
  borderColor: '#ccc',
  borderWidth: 1,
  marginBottom: 16,
  paddingHorizontal: 8,
  backgroundColor: '#fff',
  borderRadius: 10,
  textAlignVertical: 'top',
},

});

export const darkTheme = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInicio:{
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  picker: {
    color: 'white',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  text:{
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: '#1c8adb',
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: 'center',
    marginTop: 10,
  },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    avatar: {
      height: 110,
      width: 110,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: "white",
      marginBottom: 15,
    },
    Label:{
      color:"black",
      backgroundColor: 'white',
    },
    userCard: {
      backgroundColor: "#333",
      padding: 10,
      marginVertical: 5,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3,
  },
  
  userText: {
      color:"#fff",
      fontSize: 16,
  },
  titleusers: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#fff",
      textAlign: "center",
  },
  
  tituloInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#333',
    borderRadius: 10,
    color: "white",
  },
  descripcioninput: {
    height: 110,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#333',
    borderRadius: 10,
    textAlignVertical: 'top',
    color: "white",
  },

});