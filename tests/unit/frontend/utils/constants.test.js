import {
  FREE_TRIAL_DAYS,
  PAID_SUBSCRIPTION_PRICE,
  USER_ROLES,
  PROJECT_STATUSES,
  TASK_STATUSES,
  STATUS_COLOR_CODES,
  FILE_SIZE_LIMIT,
  API_ENDPOINTS,
  DOM_ELEMENT_IDS
} from '../../../public/js/utils/constants';

describe('Constants Test Suite', () => {
  test('FREE_TRIAL_DAYS should be 14', () => {
    expect(FREE_TRIAL_DAYS).toBe(14);
  });

  test('PAID_SUBSCRIPTION_PRICE should be 20', () => {
    expect(PAID_SUBSCRIPTION_PRICE).toBe(20);
  });

  test('USER_ROLES should have correct roles', () => {
    const expectedRoles = {
      PROJECT_ADMIN: 'Project Admin',
      STANDARD: 'Standard',
      VIEW_ONLY: 'Only View'
    };
    expect(USER_ROLES).toEqual(expectedRoles);
  });

  test('PROJECT_STATUSES should have correct statuses', () => {
    const expectedStatuses = {
      OPEN: 'Open',
      CLOSE: 'Close',
      ARCHIVE: 'Archive',
      ON_HOLD: 'On Hold'
    };
    expect(PROJECT_STATUSES).toEqual(expectedStatuses);
  });

  test('TASK_STATUSES should have correct statuses', () => {
    const expectedStatuses = {
      PENDING: 'Pending',
      NOT_STARTED: 'Not Started',
      IN_PROGRESS: 'In Progress',
      ON_HOLD: 'On Hold',
      COMPLETED: 'Completed'
    };
    expect(TASK_STATUSES).toEqual(expectedStatuses);
  });

  test('STATUS_COLOR_CODES should have correct color codes', () => {
    const expectedColorCodes = {
      PENDING: '#800000',
      NOT_STARTED: '#808080',
      IN_PROGRESS: '#9ACD32',
      ON_HOLD: '#FF0000',
      COMPLETED: '#006400'
    };
    expect(STATUS_COLOR_CODES).toEqual(expectedColorCodes);
  });

  test('FILE_SIZE_LIMIT should be 20 * 1024 * 1024', () => {
    expect(FILE_SIZE_LIMIT).toBe(20 * 1024 * 1024);
  });

  test('API_ENDPOINTS should have correct endpoints', () => {
    const expectedEndpoints = {
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
    expect(API_ENDPOINTS).toEqual(expectedEndpoints);
  });

  test('DOM_ELEMENT_IDS should have correct IDs', () => {
    const expectedIDs = {
      HEADER_LOGO: 'header-logo',
      HEADER_TITLE: 'header-title',
      PAGE_MENU: 'page-menu',
      LOGIN_BUTTON: 'login-button',
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
    expect(DOM_ELEMENT_IDS).toEqual(expectedIDs);
  });
});
