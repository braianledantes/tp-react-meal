import { StyleSheet } from "@react-pdf/renderer";

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 50,
  },
  section: {
    marginBottom: 10,
  },
  sectionLogo: {
    textAlign:'center',
    marginBottom:'10',
    marginTop:'-15'
  },
  honey: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#d9ad79', // Soft Almond color
  },
  bakery: {
    fontSize: 26,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#a0552c', // Honey Rust color
    left:'-8'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#6f4c42',  // cocoa color
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#d68c3c',  // golden Sugar color
  },
  subtitleMeasures:{
    textAlign:'right',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#d68c3c',
  },
  text: {
    fontSize: 12,
  },
  image: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
    marginBottom: 10,
    borderRadius: 20
  },
  ingredients: {
    marginTop: 5,
  },
  listItem: {
    fontSize: 12,
  },
  list: {
    paddingLeft: 0,
    marginBottom: 10,
  },
  measures: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 12,
  },
  instructions: {
    fontSize: 12,
    marginTop: 10,
  },
});

export default styles;
