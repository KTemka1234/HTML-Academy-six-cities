import { MainPage } from '../../pages/Main';

type AppProps = {
  offersCount: number;
}

export function App({offersCount}: AppProps): JSX.Element {
  return (
    <body>
      <MainPage offersCount={offersCount}/>
    </body>
  );
}
