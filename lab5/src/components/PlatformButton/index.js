import { Platform } from 'react-native';

const PlatformButton = Platform.select({
  ios: () => require('./Button.ios').default,
  android: () => require('./Button.android').default,
})();

export default PlatformButton;
