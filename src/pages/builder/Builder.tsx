import React from 'react';
import { Document, Page, Text, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';
import s from './Builder.module.scss';

const styles = StyleSheet.create({
  iframe: {
    width: 500,
    height: 600,
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const Builder = () => {
  const [details, setDetails] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.details}>
          <input
            type="text"
            value={details.firstName}
            onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
          />
          <input
            type="text"
            value={details.lastName}
            onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
          />
          <input
            type="text"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className={s.document}>
          <PDFViewer style={styles.iframe} showToolbar={false}>
            <Document>
              <Page style={styles.body}>
                <Text style={styles.header} fixed>
                  ~ Created with Rezumize ~
                </Text>
                <Text style={styles.title}>{details.firstName + ' ' + details.lastName}</Text>
                <Text style={styles.author}>Miguel de Cervantes</Text>
                {/* <Image style={styles.image} src="/images/quijote1.jpg" /> */}
                <Text style={styles.subtitle}>
                  Cap??tulo I: Que trata de la condici??n y ejercicio del famoso hidalgo D. Quijote de
                  la Mancha
                </Text>
                <Text style={styles.text}>
                  En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo
                  que viv??a un hidalgo de los de lanza en astillero, adarga antigua, roc??n flaco y
                  galgo corredor. Una olla de algo m??s vaca que carnero, salpic??n las m??s noches,
                  duelos y quebrantos los s??bados, lentejas los viernes, alg??n palomino de a??adidura
                  los domingos, consum??an las tres partes de su hacienda. El resto della conclu??an
                  sayo de velarte, calzas de velludo para las fiestas con sus pantuflos de lo mismo,
                  los d??as de entre semana se honraba con su vellori de lo m??s fino. Ten??a en su
                  casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los
                  veinte, y un mozo de campo y plaza, que as?? ensillaba el roc??n como tomaba la
                  podadera. Frisaba la edad de nuestro hidalgo con los cincuenta a??os, era de
                  complexi??n recia, seco de carnes, enjuto de rostro; gran madrugador y amigo de la
                  caza. Quieren decir que ten??a el sobrenombre de Quijada o Quesada (que en esto hay
                  alguna diferencia en los autores que deste caso escriben), aunque por conjeturas
                  veros??miles se deja entender que se llama Quijana; pero esto importa poco a
                  nuestro cuento; basta que en la narraci??n d??l no se salga un punto de la verdad
                </Text>
              </Page>
            </Document>
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default Builder;
