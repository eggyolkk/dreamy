import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import Stack from './routes/stack';

const getFonts = () => Font.loadAsync({
  'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  'roboto-medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  'roboto-black': require('./assets/fonts/Roboto/Roboto-Black.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const gettingFonts = async () => {
      await getFonts();
      setFontsLoaded(true);
    }

    gettingFonts();
  },[])

  if (fontsLoaded) {
    return (
      <Stack />
    )
  } else {
    return (
      null
    )
  }
}