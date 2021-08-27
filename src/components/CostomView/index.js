import React, {useMemo} from 'react';
import {View} from 'react-native';
import {colors} from '../../constants';

export default function CustomView(props) {
  const isDark = false;

  // style dosyası değişmemişse kendini render etme.
  const containerStyle = useMemo(() => {
    const styles = {
      backgroundColor: isDark
        ? colors.dark.primary[1]
        : colors.light.primary[1],
      ...props.style,
    };
    return styles;
  }, [props, isDark]);
  return <View style={containerStyle}>{props.children}</View>;
}
