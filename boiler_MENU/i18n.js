import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "connexion": "CONNECTION",
          "seConnecter": "Log In",
          "sinscrire": "Sign Up",
          "concept": "CONCEPT",
          "conceptTitle": "OUR CONCEPT",
          "contactTitle": "CONTACT US",
          "teamTitle": "OUR TEAM",
          "team": "TEAM",
          "contact": "CONTACT",
          "editProfileForm": "EDIT YOUR PROFILE",
          "loginForm": "LOGIN",
          "signupForm": "SIGN UP",
          "login": "Log In",
          "signup": "Sign Up",
          "hiver": "Winter",
          "access": "ACCESSIBILITY",
          "opendys": "DYSLEXIA",
          "colorBlind": "COLOR BLINDNESS"
        }
      },
      fr: {
        translation: {
          "connexion": "CONNEXION",
          "seConnecter": "Se connecter",
          "sinscrire": "S'inscrire",
          "concept": "CONCEPT",
          "conceptTitle": "NOTRE CONCEPT",
          "contactTitle": "NOUS CONTACTER",
          "teamTitle": "NOTRE ÉQUIPE",
          "team": "TEAM",
          "contact": "CONTACT",
          "editProfileForm": "ÉDITER LE PROFIL",
          "loginForm": "SE CONNECTER",
          "signupForm": "S'INSCRIRE",
          "login": "Se Connecter",
          "signup": "S'Inscrire",
          "hiver": "Hiver",
          "access": "ACCESSIBILITÉ",
          "opendys": "DYSLEXIE",
          "colorBlind": "DALTONISME"
        }
      }
    },
    lng: "fr",  //langue par défaut
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

