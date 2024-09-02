const validateForm = (formData, type) => {
  switch (type) {
    case "login":
      if (!formData.email) {
        return "Renseignez votre adresse mail!";
      }
      if (!formData.password) {
        return "Renseignez votre mot de passe!";
      }
      break;

    case "register":
      if (!formData.name) {
        return "Renseignez votre nom!";
      }
      if (!formData.email) {
        return "Renseignez votre adresse mail!";
      }
      if (!formData.password) {
        return "Renseignez votre mot de passe!";
      }
      if (formData.password.length < 8) {
        return "Le mot de passe doit contenir au moins 8 caractères!";
      }
      if (!formData.confirm_password) {
        return "Confirmez le mot de passe!";
      }
      if (formData.confirm_password !== formData.password) {
        return "Les mots de passe ne sont pas conformes!";
      }
      break;

    case "forgot":
      if (!formData.email) {
        return "Renseignez votre adresse mail!";
      }
      break;

    case "reset":
      if (!formData.email) {
        return "Renseignez votre adresse mail!";
      }
      if (!formData.code) {
        return "Renseignez votre adresse mail!";
      }
      if (!formData.password) {
        return "Renseignez votre mot de passe!";
      }
      if (formData.password.length < 8) {
        return "Le mot de passe doit contenir au moins 8 caractères!";
      }
      if (!formData.confirm_password) {
        return "Confirmez le mot de passe!";
      }
      if (formData.confirm_password !== formData.password) {
        return "Les mots de passe ne sont pas conformes!";
      }
      break;

    default:
      break;
  }

  return null;
};

export default validateForm;
