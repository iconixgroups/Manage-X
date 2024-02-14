// powerbi.js - Power BI integration for Manage X SaaS App

import * as pbi from 'powerbi-client';
import { models } from 'powerbi-client';

// Function to embed Power BI report into the application
function embedReport(container, reportId, groupId, accessToken) {
  const config = {
    type: 'report',
    tokenType: models.TokenType.Embed,
    accessToken: accessToken,
    embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${reportId}&groupId=${groupId}`,
    id: reportId,
    permissions: models.Permissions.All,
    settings: {
      filterPaneEnabled: true,
      navContentPaneEnabled: true
    }
  };

  const report = new pbi.service.Service(
    pbi.factories.hpmFactory,
    pbi.factories.wpmpFactory,
    pbi.factories.routerFactory
  ).embed(container, config);

  return report;
}

// Function to get Power BI report access token from the server
async function getReportAccessToken(reportId) {
  try {
    const response = await axios.get(`/api/powerbi/get-access-token/${reportId}`);
    if (response.data && response.data.accessToken) {
      return response.data.accessToken;
    } else {
      throw new Error('Access token not found in the response');
    }
  } catch (error) {
    console.error('Error fetching Power BI access token:', error);
    throw error;
  }
}

// Function to initialize Power BI report embedding
async function initPowerBIReport(containerId, reportId, groupId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id ${containerId} not found`);
    return;
  }

  try {
    const accessToken = await getReportAccessToken(reportId);
    const report = embedReport(container, reportId, groupId, accessToken);
    return report;
  } catch (error) {
    console.error('Error initializing Power BI report:', error);
  }
}

export { initPowerBIReport };