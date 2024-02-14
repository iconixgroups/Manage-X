// metabase.js
// This script is responsible for integrating Metabase reports and dashboards into the Manage X SaaS App

const METABASE_SITE_URL = "https://YOUR_METABASE_SITE.com";
const METABASE_SECRET_KEY = "YOUR_METABASE_SECRET_KEY";

/**
 * Generates an iframe URL to embed a Metabase dashboard or report.
 * @param {number} resourceId - The ID of the Metabase dashboard or report.
 * @param {Object} params - Additional parameters for filtering the dashboard/report.
 * @returns {string} The URL to be used as the src of an iframe.
 */
function generateMetabaseIframeUrl(resourceId, params = {}) {
  const payload = {
    resource: { dashboard: resourceId },
    params,
    exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
  };

  const token = jwt.sign(payload, METABASE_SECRET_KEY);

  return `${METABASE_SITE_URL}/embed/dashboard/${token}#bordered=true&titled=true`;
}

/**
 * Embeds a Metabase dashboard or report into a specified element.
 * @param {number} resourceId - The ID of the Metabase dashboard or report.
 * @param {string} elementId - The ID of the DOM element where the iframe will be embedded.
 * @param {Object} params - Additional parameters for filtering the dashboard/report.
 */
function embedMetabaseResource(resourceId, elementId, params = {}) {
  const iframeUrl = generateMetabaseIframeUrl(resourceId, params);
  const iframeHtml = `<iframe src="${iframeUrl}" frameborder="0" width="800" height="600" allowtransparency></iframe>`;

  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = iframeHtml;
  } else {
    console.error(`Element with ID ${elementId} not found.`);
  }
}

// Example usage:
// embedMetabaseResource(1, 'metabase-dashboard-container', { 'project_id': 123 });