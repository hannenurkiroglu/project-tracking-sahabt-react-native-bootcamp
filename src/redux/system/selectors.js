import {useSelector} from 'react-redux';

export function GetIsDarkMode() {
  const isDarkMode = useSelector(state => state.system.isDarkMode);

  return isDarkMode;
}
