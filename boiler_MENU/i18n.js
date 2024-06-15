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
          "seCo": "LOG IN",
          "déco": "LOG OUT",
          "seDeconnecter": "Log Out",
          "btn-déco": "Bye Bye",
          "sinscrire": "Sign Up",
          "profil": "My profile",
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
          "colorBlind": "COLOR BLINDNESS",
          "placeEmail": "Email address",
          "password": "Password",
          "forgotPassword": "Forgot Password",
          "home": "Home",
          "PassConfirm": "Password confirmation",
          "passConfirm": "Password confirmation",
          "welcome": "WELCOME",
          "forgotPass": "FORGOT PASSWORD",
          "sendEmail": "Send reset password email",
          "resetPassword": "RESET PASSWORD",
          "newPassword": "New Password",
          "confirmNewPass": "New password confirmation",
          "reset": "RESET",
          "titleRestau": "ALL RESTAURANTS",
        }
      },
      fr: {
        translation: {
          "connexion": "CONNEXION",
          "seConnecter": "Se connecter",
          "seCo": "SE CONNECTER",
          "seDeconnecter": "Se déconnecter",
          "déco": "SE DÉCONNECTER",
          "btn-déco": "Déconnexion",
          "sinscrire": "S'inscrire",
          "profil": "Mon profil",
          "concept": "CONCEPT",
          "conceptTitle": "NOTRE CONCEPT",
          "contactTitle": "NOUS CONTACTER",
          "teamTitle": "NOTRE EQUIPE",
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
          "colorBlind": "DALTONISME",
          "placeEmail": "Adresse email",
          "password": "Mot de passe",
          "Password": "Mot de passe",
          "forgotPassword": "Mot de passe oublié",
          "home": "Accueil",
          "PassConfirm": "Confirmation du mot de passe",
          "passConfirm": "Confirmer le mot de passe",
          "welcome": "INSCRIPTION",
          "forgotPass": "MOT DE PASSE OUBLIÉ",
          "sendEmail": "Envoyer l'email de réinitialisation",
          "resetPassword": "RÉINITIALISATION DU MOT DE PASSE",
          "newPassword": "Nouveau mot de passe",
          "confirmNewPass": "Confirmer le nouveau mot de passe",
          "reset": "RÉINITIALISATION",
          "titleRestau": "TOUS LES RESTAURANTS",
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

