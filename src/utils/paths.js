// Utilitaire pour gérer les chemins d'assets avec le base URL
export const getAssetPath = (path) => {
  // Enlève le slash initial si présent
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// Pour les images
export const getImagePath = (imageName) => {
  return getAssetPath(`images/${imageName}`);
};

// Pour les autres assets
export const getPublicPath = (path) => {
  return getAssetPath(path);
}; 