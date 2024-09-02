export const getLength = (data) => {
  return data?.length;
};

export function filterData(data, searchTerm, keys) {
  const lowercasedTerm = searchTerm.toLowerCase();

  return data?.filter((item) =>
    keys.some((key) => {
      const value = item[key];
      if (typeof value === "string") {
        return value.toLowerCase().includes(lowercasedTerm);
      }
      return String(value).toLowerCase().includes(lowercasedTerm);
    })
  );
}

export const formatDate = (value) => {
  return new Date(value).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export function formatPrice(value) {
  let val = (value / 1).toFixed(0).replace(" ", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const pluralize = (count, singular, plural = null) => {
  return count <= 1 ? singular : plural || `${singular}s`;
};

export const checkValue = (value) => value ?? "Non renseigné";

export const truncateText = (text, limit = 16) =>
  text?.length > limit ? `${text.substring(0, limit)}...` : text;
