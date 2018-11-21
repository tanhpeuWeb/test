/** @format */

/**AppRegistry主要用来将我们写好的组件挂载到应用程序上去 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
