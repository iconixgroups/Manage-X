const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

// Import routes
const authRoutes = require('../../routes/auth');
const userRoutes = require('../../routes/user');
const projectRoutes = require('../../routes/project');
const taskRoutes = require('../../routes/task');

// Import database configuration
const databaseConfig = require('../../config/database');

// Initialize express app
const app = express();

// Connect to MongoDB
mongoose.connect(databaseConfig.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../public')));

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../../public/index.html'));
});

const server = http.createServer(app);
const io = socketio(server);

// Real-time connection with client
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Define port and start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));