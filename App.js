import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, SectionList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from './components/BottomSheet';

const REMOTE_GIF = 'https://static.wikia.nocookie.net/blue-archive/images/3/31/Aru_Dress_Live2D.gif';

const characterData = [
  {
    title: 'Abydos High School',
    description: 'It used to be a thriving and prestigious school before desertification. Now, all that remains is a shadow of its former glory, with nothing more than an annex building and five students with an enormous debt to pay off.',
    logo: 'https://static.wikia.nocookie.net/blue-archive/images/4/4c/Abydos_Icon.png/revision/latest/scale-to-width-down/70?cb=20210203172448',
    color: '#06BBFA',
    data: [
      {
        name: 'Shiroko',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/7/79/Shiroko_Icon.png/revision/latest?cb=20210201103817',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/e/ea/Shiroko_Halo.png/revision/latest?cb=20211011152250',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/a/af/Shiroko_Live2D.gif/revision/latest/scale-to-width-down/300?cb=20210209063659',
      },
      {
        name: 'Hoshino',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/e/ef/Hoshino_Swimsuit_Icon.png/revision/latest?cb=20220622112314',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/c/cb/Hoshino_Halo.png/revision/latest?cb=20211011152245',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/3/35/Hoshino_Swimsuit_Live2D.gif/revision/latest?cb=20230213190944',
      },
    ]
  },
  {
    title: 'Gehenna Academy',
    description: 'A school that runs along the concept of "Freedom and Chaos." In contrast to its long rival, Trinity, this school is arguably the most chaotic out of all the schools.',
    logo: 'https://static.wikia.nocookie.net/blue-archive/images/2/23/Gehenna_Icon.png/revision/latest/scale-to-width-down/70?cb=20210205120343',
    color: '#E34A45',
    data: [
      {
        name: 'Hina',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/f/f1/Hina_Dress_Icon.png/revision/latest?cb=20240124141957',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/8/85/Hina_Halo.png/revision/latest?cb=20211013135704',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/1/1f/Hina_Dress_Live2D.gif/revision/latest?cb=20240127104549',
      },
      {
        name: 'Kayoko',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/2/23/Kayoko_New_Year_Icon.png/revision/latest?cb=20211229143020',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/7/7b/Kayoko_Halo.png/revision/latest?cb=20211013135712',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/0/07/Kayoko_New_Year_Live2D.gif/revision/latest?cb=20230322112607',
      },
      {
        name: 'Aru',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/1/1c/Aru_Dress_Icon.png/revision/latest?cb=20240221125920',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/2/2f/Aru_Halo.png/revision/latest?cb=20211013135658',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/3/31/Aru_Dress_Live2D.gif/revision/latest?cb=20240222074826',
      },
    ]
  },
  {
    title: 'Millennium Science School',
    description: 'Despite its young age, it has carved its own path to become one of the largest schools in Kivotos. It values logic and technical skill over everything. If you are looking for technology, this is the place to go.',
    logo: 'https://static.wikia.nocookie.net/blue-archive/images/a/ad/Millennium_Icon.png/revision/latest/scale-to-width-down/70?cb=20210205120345',
    color: '#4F86F7',
    data: [
      {
        name: 'Karin',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/1/12/Karin_Bunny_Girl_Icon.png/revision/latest?cb=20210930131228',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/a/ae/Karin_Halo.png/revision/latest?cb=20211014152758',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/d/d0/Karin_Bunny_Girl_Live2D.gif/revision/latest?cb=20220517104345',
      },
      {
        name: 'Toki',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/f/ff/Toki_Bunny_Girl_Icon.png/revision/latest?cb=20230426132700',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/2/25/Toki_Halo.png/revision/latest?cb=20230213125151',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/d/d1/Toki_Bunny_Girl_Live2D.gif/revision/latest?cb=20230426120813',
      },
    ]
  },
  {
    title: 'Trinity General School',
    description: 'A seemingly religious school that values order and etiquette. Unlike its long rival, Gehenna, this school is considerably the most orderly out of any school in Kivotos...at least, on the surface.',
    logo: 'https://static.wikia.nocookie.net/blue-archive/images/9/98/Trinity_Icon.png/revision/latest/scale-to-width-down/70?cb=20210205120349',
    color: '#FBB35A',
    data: [
      {
        name: 'Mika',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/d/dd/Mika_Icon.png/revision/latest?cb=20210601102040',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/f/f4/Mika_Halo.png/revision/latest?cb=20230206161051',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/5/5f/Mika_Live2D.gif/revision/latest?cb=20230124155030',
      },
      {
        name: 'Azusa',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/f/f0/Azusa_Swimsuit_Icon.png/revision/latest?cb=20210701180019',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/0/03/Azusa_Halo.png/revision/latest?cb=20211014154931',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/3/39/Azusa_Swimsuit_Live2D.gif/revision/latest?cb=20220227015454',
      },
    ]
  },
  {
    title: 'Shanhaijing Senior Secondary School',
    description: 'A school that focuses more on business and commerce, visibly prioritizing money over culture. This school is more known for its delicious restaurants and tourism.',
    logo: 'https://static.wikia.nocookie.net/blue-archive/images/7/73/Shanhaijing_Icon.png/revision/latest/scale-to-width-down/70?cb=20210205120348',
    color: '#03C03C',
    data: [
      {
        name: 'Kokona',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/4/4a/Kokona_Icon.png/revision/latest?cb=20211110175247',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/8/84/Kokona_Halo.png/revision/latest?cb=20221024073130',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/1/1e/Kokona_Live2D.gif/revision/latest?cb=20230220135424',
      },
      {
        name: 'Shun',
        iconURL: 'https://static.wikia.nocookie.net/blue-archive/images/f/fa/Shun_Icon.png/revision/latest?cb=20210421184829',
        haloURL: 'https://static.wikia.nocookie.net/blue-archive/images/a/a0/Shun_Halo.png/revision/latest?cb=20211012153136',
        liveURL: 'https://static.wikia.nocookie.net/blue-archive/images/f/fd/Shun_Live2D.gif/revision/latest?cb=20211128050401',
      },
    ]
  },
]

export default function App() {
  const ref = useRef(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterPress = (character) => {
    setSelectedCharacter(character);
    ref.current?.scrollTo(-200); // Open the bottom sheet
  };

  const renderCharacter = ({ item }) => (
    <TouchableOpacity onPress={() => handleCharacterPress(item)} style={styles.characterContainer}>
      <Image source={{ uri: item.iconURL }} style={styles.characterIcon} />
      <Text style={styles.characterName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }) => (
    <View style={[styles.headerContainer, { backgroundColor: section.color }]}>
      <Image source={{ uri: section.logo }} style={styles.logo} />
      <Text style={styles.title}>{section.title}</Text>
      <Text style={styles.description}>{section.description}</Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <SectionList
          sections={characterData}
          keyExtractor={(item) => item.name}
          renderItem={renderCharacter}
          renderSectionHeader={renderSectionHeader}
          contentContainerStyle={styles.sectionListContent}
        />
        <BottomSheet ref={ref}>
          {selectedCharacter && (
            <View style={styles.bottomSheetContent}>
              <Image source={{ uri: selectedCharacter.iconURL }} style={styles.characterPfp} />
              <Text style={styles.characterName}>{selectedCharacter.name}</Text>
              <Image source={{ uri: selectedCharacter.haloURL }} style={styles.halo} />
              <Text style={styles.liveText}>LIVE2D</Text>
              <View>
                <Image source={{ uri: selectedCharacter.liveURL }} autoplay={true} style={styles.liveGif} />
              </View>
            </View>
          )}
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  sectionListContent: {
    paddingHorizontal: 10,
  },
  headerContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: 'white',
    marginVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  characterContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    width: '22%', 
    padding: 5,
  },
  characterIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  characterName: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  bottomSheetContent: {
    alignItems: 'center',
    padding: 20,
  },
  characterPfp: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  halo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  liveText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  liveGif: {
    width: 360,
    height: 202,
  },
});