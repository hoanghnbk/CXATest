import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}
function goBack(n = 1) {

  _navigator.dispatch(
    StackActions.pop({ n })
  );
}

function popToTop() {
  _navigator.dispatch(
    StackActions.popToTop()
  );
}

function resetTo(routeName = 'TodoList') {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    })
  );
}



// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  popToTop,
    goBack

};
