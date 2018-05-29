import { AppRegistry } from 'react-native';
import App from './App';

// Ignore isMounted Error
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

AppRegistry.registerComponent('KompasId', () => App);
