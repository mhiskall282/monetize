export const validateModel = (model: Partial<Model>): string[] => {
  const errors: string[] = [];

  if (!model.name?.trim()) {
    errors.push('Model name is required');
  }

  if (!model.description?.trim()) {
    errors.push('Description is required');
  }

  if (!model.price || model.price < 0) {
    errors.push('Price must be a positive number');
  }

  if (!model.category) {
    errors.push('Category is required');
  }

  if (!model.license) {
    errors.push('License type is required');
  }

  return errors;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};