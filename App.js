import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from './styles';

const characterData = [
  {
    title: 'Abydos High School',
    description: 'It used to be a thriving and prestigious school before desertification. Now, all that remains is a shadow of its former glory, with nothing more than an annex building and five students with an enormous debt to pay off.',
    logo: 'https://static.wikia.nocookie.net/blue-archive/images/4/4c/Abydos_Icon.png/revision/latest/scale-to-width-down/70?cb=20210203172448',
    color: '#0aa6df',
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
    color: '#776983',
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
    color: '#3b455a',
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
    logo: 'https://static.wikia.nocookie.net/blue-archive/images/0/0d/Trinity_General_School_Logo.png/revision/latest?cb=20210601102040',
    color: '#5575b8',
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
    color: '#3c3140',
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
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="light" />
      </View>
    </GestureHandlerRootView>

  );
}

