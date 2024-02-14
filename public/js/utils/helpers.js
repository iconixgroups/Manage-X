// Helper functions for Manage X SaaS App

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

const incrementTaskNumber = (tasks) => {
  if (!tasks || tasks.length === 0) return 1;
  return Math.max(...tasks.map(task => task.SNo)) + 1;
};

const updateProjectCount = (projects, status) => {
  return projects.reduce((acc, project) => {
    if (project.status === status) {
      acc += 1;
    }
    return acc;
  }, 0);
};

const toggleSideMenu = (isOpen) => {
  const sideMenu = document.getElementById('side-menu');
  if (isOpen) {
    sideMenu.classList.add('open');
  } else {
    sideMenu.classList.remove('open');
  }
};

const submitContactForm = (formData) => {
  // Placeholder for form submission logic
  console.log('Form data submitted:', formData);
};

const subscribeToNewsletter = (email) => {
  // Placeholder for newsletter subscription logic
  console.log('Email subscribed to newsletter:', email);
};

const calculateDelayedDuration = (task) => {
  if (task.status !== 'Completed' || !task.deadlineDate || !task.completionDate) {
    return 0;
  }
  const deadlineDate = new Date(task.deadlineDate);
  const completionDate = new Date(task.completionDate);
  return (completionDate - deadlineDate) / (1000 * 60 * 60 * 24); // Convert to days
};

export {
  formatDate,
  incrementTaskNumber,
  updateProjectCount,
  toggleSideMenu,
  submitContactForm,
  subscribeToNewsletter,
  calculateDelayedDuration
};