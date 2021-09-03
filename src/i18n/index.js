import I18n from 'i18n-js';
import * as RnLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';
import en from './en';
import tr from './tr';

const translations = {
  tr,
  en,
};

// getLocales = Cihazın tercih edilen dil dosyasını getirir.
const locales = RnLocalize.getLocales();

// languageTag = Dilimizin dil kodunu getiriyor.
I18n.locale = locales[0].languageTag;

export const changeLanguage = language => {
  console.log('changeLanguage i18n', language);
  I18n.locale = language;
};
// isRTL = İlgili dilin sağdan sola mı yoksa soldan sağa mı yazıldığını belirtir.
export const isRtl = locales[0].isRTL;

// forceRtl = Arayüzdeki bileşenlerin soldan sağa yerine sağdan sola doğru dizilmesini zorunlu tutar.
I18nManager.forceRTL = isRtl;

// Belirtilen dile ait kayıt yoksa bir sonraki dilden devam etmesini sağlar.
I18n.fallbacks = true;

// İstenilen dil bulunmadığında yerine kullanılacak default değeri erir.
I18n.locales.no = 'tr';

// Uygulama içerisinde kullanılacak olan dillerin nesne olarak alınmasını sağlar.
I18n.translations = translations;

export default I18n;
