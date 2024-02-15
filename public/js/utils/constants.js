// Constants for Manage X SaaS App

const FREE_TRIAL_DAYS = 14;
const PAID_SUBSCRIPTION_PRICE = 20; // in dollars

// User Roles
const USER_ROLES = {
  PROJECT_ADMIN: 'Project Admin',
  STANDARD: 'Standard',
  VIEW_ONLY: 'Only View'
};

// Project Statuses
const PROJECT_STATUSES = {
  OPEN: 'Open',
  CLOSE: 'Close',
  ARCHIVE: 'Archive',
  ON_HOLD: 'On Hold'
};

// Task Statuses
const TASK_STATUSES = {
  PENDING: 'Pending',
  NOT_STARTED: 'Not Started',
  IN_PROGRESS: 'In Progress',
  ON_HOLD: 'On Hold',
  COMPLETED: 'Completed'
};

// Status Color Codes
const STATUS_COLOR_CODES = {
  PENDING: '#800000', // Maroon
  NOT_STARTED: '#808080', // Grey
  IN_PROGRESS: '#9ACD32', // Yellow Green
  ON_HOLD: '#FF0000', // Red
  COMPLETED: '#006400' // Dark Green
};

// File Size Limit
const FILE_SIZE_LIMIT = 20 * 1024 * 1024; // 20 MB

// API Endpoints
const API_ENDPOINTS = {
  REGISTER: '/api/auth/register',
  LOGIN: '/api/auth/login',
  VERIFY_EMAIL: '/api/auth/verify-email',
  USER_PROFILE: '/api/user/profile',
  CREATE_WORKSPACE: '/api/workspace/create',
  ADD_PROJECT: '/api/project/add',
  ADD_TASK: '/api/task/add',
  UPDATE_TASK: '/api/task/update',
  DELETE_TASK: '/api/task/delete',
  INVITE_MEMBER: '/api/project/invite-member',
  UPDATE_MEMBER_ROLE: '/api/project/update-member-role',
  ACTIVITY_LOG: '/api/activity-log'
};

// DOM Element IDs
const DOM_ELEMENT_IDS = {
  HEADER_LOGO: 'header-logo',
  HEADER_TITLE: 'header-title',
  PAGE_MENU: 'page-menu',
  LOGIN_BUTTON: 'login-button',
// Enhanced Security Features
// Maximum login attempts before locking out the user account
const MAX_LOGIN_ATTEMPTS = 5;
// Lock time in milliseconds after reaching maximum login attempts (e.g., 30 minutes)
const LOCK_TIME = 30 * 60 * 1000; // 30 minutes

export {
  FREE_TRIAL_DAYS,
  PAID_SUBSCRIPTION_PRICE,
  USER_ROLES,
  PROJECT_STATUSES,
  TASK_STATUSES,
  STATUS_COLOR_CODES,
  FILE_SIZE_LIMIT,
  API_ENDPOINTS,
  DOM_ELEMENT_IDS,
  MAX_LOGIN_ATTEMPTS,
  LOCK_TIME
};
  SIGNUP_BUTTON: 'signup-button',
  USER_PROFILE_SETTINGS: 'user-profile-settings',
  WORKSPACE_CREATE_FORM: 'workspace-create-form',
  PROJECT_DETAILS_FORM: 'project-details-form',
  TASK_TREE_VIEW: 'task-tree-view',
  TASK_FORM: 'task-form',
  DASHBOARD: 'dashboard',
  ACTIVITY_LOG: 'activity-log',
  PROJECT_SETTINGS: 'project-settings',
  SUBSCRIBE_NEWSLETTER_FORM: 'subscribe-newsletter-form',
  CONTACT_US_FORM: 'contact-us-form',
  CLIENT_TESTIMONY_SECTION: 'client-testimony-section',
  FEATURES_SECTION: 'features-section',
  BENEFITS_SECTION: 'benefits-section',
  PRODUCT_SHOWCASE_SECTION: 'product-showcase-section',
  PRICING_SECTION: 'pricing-section',
  SIDE_MENU: 'side-menu',
  FOOTER: 'footer'
};

export {
  FREE_TRIAL_DAYS,
  PAID_SUBSCRIPTION_PRICE,
  USER_ROLES,
  PROJECT_STATUSES,
  TASK_STATUSES,
  STATUS_COLOR_CODES,
  FILE_SIZE_LIMIT,
  API_ENDPOINTS,
  DOM_ELEMENT_IDS
};