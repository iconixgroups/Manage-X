// validators.js

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;

const validateEmail = (email) => {
  return emailRegex.test(email);
};

const validateHexColor = (color) => {
  return hexColorRegex.test(color);
};

const validateNonEmptyString = (value) => {
  return typeof value === 'string' && value.trim() !== '';
};

const validatePositiveNumber = (number) => {
  return typeof number === 'number' && number > 0;
};

const validateDate = (dateString) => {
  return !isNaN(Date.parse(dateString));
};

const validateDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return start <= end;
};

const validateFileSize = (fileSize, maxFileSizeMB) => {
  const maxSizeBytes = maxFileSizeMB * 1024 * 1024;
  return fileSize <= maxSizeBytes;
};

const validateUserRole = (role) => {
  const validRoles = ['Project Admin', 'Standard', 'Only View'];
  return validRoles.includes(role);
};

const validateProjectStatus = (status) => {
  const validStatuses = ['Open', 'Close', 'Archive', 'On Hold'];
  return validStatuses.includes(status);
};

const validateTaskStatus = (status) => {
  const validStatuses = ['Pending', 'Not Started', 'In Progress', 'On Hold', 'Completed'];
  return validStatuses.includes(status);
};

export {
  validateEmail,
  validateHexColor,
  validateNonEmptyString,
  validatePositiveNumber,
  validateDate,
  validateDateRange,
  validateFileSize,
  validateUserRole,
  validateProjectStatus,
  validateTaskStatus
};