{
  "email": "user@example.com",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe"
}
```
- **Success Response**:
```json
{
  "status": 201,
  "message": "User registered successfully."
}
```
- **Error Response**:
```json
{
  "status": 400,
  "error": "Email already exists."
}
```

### User Login
- **HTTP Method**: POST
- **URL**: `/api/auth/login`
- **Request Body Schema**:
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```
- **Success Response**:
```json
{
  "status": 200,
  "token": "jwtTokenHere"
}
```
- **Error Response**:
```json
{
  "status": 401,
  "error": "Invalid credentials."
}
```

### Email Verification
- **HTTP Method**: GET
- **URL**: `/api/auth/verify-email?token=verificationToken`
- **Request Parameters**:
  - `token`: Verification token sent via email
- **Success Response**:
```json
{
  "status": 200,
  "message": "Email verified successfully."
}
```
- **Error Response**:
```json
{
  "status": 400,
  "error": "Invalid or expired token."
}
```

### Create Workspace
- **HTTP Method**: POST
- **URL**: `/api/workspace/create`
- **Request Body Schema** (Referencing `workspaceSchema`):
```json
{
  "name": "Development Team",
  "colorHexCode": "#FF5733",
  "logo": "path/to/logo.png"
}
```
- **Success Response**:
```json
{
  "status": 201,
  "workspaceId": "workspace123",
  "message": "Workspace created successfully."
}
```
- **Error Response**:
```json
{
  "status": 400,
  "error": "Workspace creation failed."
}
