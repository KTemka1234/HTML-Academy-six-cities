import { MainPage } from '../../pages/mainPage';

type AppProps = {
  offersCount: number;
}

export function App({offersCount}: AppProps): JSX.Element {
  return (
    <MainPage offersCount={offersCount}/>
  );
}
