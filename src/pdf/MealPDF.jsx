import {Document, Font, Image, Page, Text, View} from "@react-pdf/renderer";
import styles from './mealpdfstyles'; // Importa los estilos

Font.register({
    family: 'Pinyon Script',
    src: '/fonts/PinyonScript-Regular.ttf'
});

const MealDetailPDF = ({ meal,t }) => {

  const renderList = (base, count = 20) =>
    Array.from({ length: count }, (_, i) => base + (i + 1))
      .map(key => meal?.[key]?.trim())
      .filter(item => item && item !== "");

  const mealImage = meal?.image || '';

  return (
    <Document>
      <Page style={styles.page}>
        {/* Título del dominio */}
        <View style={styles.sectionLogo}>
          <Text style={styles.honey}>My Honey</Text>
          <Text style={{ ...styles.bakery, fontFamily: 'Pinyon Script', fontWeight: 'normal', fontStyle: 'normal' }}> Bakery </Text>
        </View>

        {/* Título de la receta */}
        <View style={styles.section}>
          <Text style={styles.title}>{meal.name}!</Text>
        </View>

        {/* Imagen de la receta */}
        {mealImage && (
          <View style={styles.section}>
            <Image src={mealImage} style={styles.image} />
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.subtitle}>{t("instructions-title")}</Text>
          <Text style={styles.instructions}>{meal.instructions}</Text>
        </View>

        {/* Dividir Medidas y Ingredientes en dos columnas (Medidas primero) */}
        <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          {/* Lista de medidas (ahora antes de ingredientes) */}
          <View style={[styles.column, { flex: 1, paddingRight: 10}]}>
            <Text style={styles.subtitleMeasures}>{t("measures-title")}</Text>
            <View style={styles.list}>
              {meal.measures.map((measure, index) => (
                <Text key={index} style={styles.measures}>
                  {measure}
                </Text>
              ))}
            </View>
          </View>

          {/* Lista de ingredientes */}
          <View style={[styles.column, { flex: 1 }]}>
            <Text style={styles.subtitle}>{t("ingredients-title")}</Text>
            <View style={styles.list}>
              {meal.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.listItem}>
                  {ingredient}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MealDetailPDF;
