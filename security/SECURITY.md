# Security Policy for Manage X SaaS App

## Introduction
This document outlines the security measures and practices adopted by the Manage X SaaS App to protect user data and ensure a secure environment for project and task management.

## Data Encryption
- **HTTPS**: All data transmitted between the client and server is encrypted using HTTPS, ensuring the confidentiality and integrity of user data in transit.
- **Database Encryption**: MongoDB, our database system, employs encryption at rest to secure data stored within the database, protecting it against unauthorized access.

## Authentication Mechanisms
- **JWT (JSON Web Tokens)**: We use JWT for secure, token-based user authentication. Tokens are generated upon login and used to authenticate API requests, ensuring that user sessions are securely managed.
- **Password Security**: User passwords are hashed and salted using bcrypt, a robust hashing algorithm. This practice prevents password theft, even in the event of a data breach.

## Dependency Security
- **Vulnerability Tracking**: We actively use tools like `npm audit` and `Snyk` to identify and mitigate vulnerabilities in our project dependencies.
- **Regular Updates**: Dependencies are regularly updated to their latest versions to incorporate security patches and reduce the risk of vulnerabilities.

## Reporting Security Vulnerabilities
We take the security of our application seriously. If you discover a security vulnerability within Manage X SaaS App, please report it to us responsibly by emailing security@managex.com. We commit to promptly investigating and addressing all reported vulnerabilities to maintain the security and integrity of our application.

Thank you for supporting the security of Manage X SaaS App.
