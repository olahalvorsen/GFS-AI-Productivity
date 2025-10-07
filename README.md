# GFS AI Productivity Capability Uplift

Welcome to the GFS AI Productivity application! This is a full-stack boilerplate application built with React frontend and .NET Core backend.

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher) ✅ **Required**
- [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0) (for backend API) - Optional to start

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/olahalvorsen/GFS-AI-Productivity.git
   cd GFS-AI-Productivity
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm run install:frontend
   ```

3. **Start the application**

   **Option A: Frontend only (if .NET not installed yet)**
   ```bash
   npm run dev
   ```
   This will start the React app at `http://localhost:3000`

   **Option B: Both frontend and backend (requires .NET SDK)**
   ```bash
   npm start
   ```
   This will start both applications simultaneously.

### 🔧 Troubleshooting PowerShell Execution Policy (Windows)

If you encounter this error:
```
npm : File C:\code\node\npm.ps1 cannot be loaded. The file C:\code\node\npm.ps1 is not digitally signed.
```

**Solution 1: Use cmd instead of PowerShell**
```bash
cmd /c "npm install"
cmd /c "npm run dev"
```

**Solution 2: Set PowerShell execution policy**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

This will start:
- **Backend API** on `http://localhost:5050` (with Swagger at `http://localhost:5050/swagger`)
- **Frontend React app** on `http://localhost:3000`

## 📁 Project Structure

```
GFS-AI-Productivity/
├── backend/
│   └── GfsProductivityApi/          # .NET Core Web API
│       ├── Controllers/
│       ├── Properties/
│       ├── Program.cs
│       └── *.csproj
├── frontend/
│   └── gfs-productivity-frontend/   # React Application
│       ├── public/
│       ├── src/
│       └── package.json
├── package.json                     # Root package.json with scripts
├── .gitignore
└── README.md
```

## 🛠️ Available Scripts

### Root Level Scripts
- `npm run dev` - Start only the React frontend (great for getting started!)
- `npm start` - Start both backend and frontend concurrently (requires .NET SDK)
- `npm run start:frontend-only` - Start only the React app
- `npm run start:backend` - Start only the .NET Core API (requires .NET SDK)
- `npm run build` - Build the React application
- `npm run install:frontend` - Install frontend dependencies only

### Backend (.NET Core)
- Located in `backend/GfsProductivityApi/`
- API available at `http://localhost:5050`
- Swagger documentation at `http://localhost:5050/swagger`

### Frontend (React)
- Located in `frontend/gfs-productivity-frontend/`
- Development server at `http://localhost:3000`
- Built with Create React App

## 🎯 Features

- **Modern Tech Stack**: React 18 + .NET 6
- **Quick Setup**: One command to start both applications
- **CORS Configured**: Backend configured to work with React frontend
- **Production Ready**: Proper project structure and build processes
- **Responsive Design**: Mobile-friendly UI

## 🔧 Development

### Backend Development
```bash
cd backend/GfsProductivityApi
dotnet run
```

### Frontend Development
```bash
cd frontend/gfs-productivity-frontend
npm start
```

## 📦 Building for Production

### Build Frontend
```bash
npm run build:frontend
```

### Build Backend
```bash
npm run build:backend
```

### Build Both
```bash
npm run build
```

## 🤝 Contributing

Made by GitHub Copilot and the 2 best teams in GFS!

## 📄 License

This project is licensed under the MIT License.