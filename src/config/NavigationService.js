import {NavigationActions} from 'react-navigation';
let navigator;
export function setNavigator(nav) {
  if (nav) {
    navigator = nav;
  }
}
export function navigate(routeName, params) {
  if (navigator && routeName) {
    let action = NavigationActions.navigate({routeName, params});
    navigator.dispatch(action);
  }
}
export function goBack() {
  if (navigator) {
    let action = NavigationActions.back({});
    navigator.dispatch(action);
  }
}
