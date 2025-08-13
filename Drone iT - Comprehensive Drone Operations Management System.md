# Drone iT - Comprehensive Drone Operations Management System

## 🚁 Overview

Drone iT is a comprehensive MERN stack web application designed for drone operations management with iOS compatibility. The application provides a complete solution for safety management, quality management, document storage, and operational oversight.

## 🌐 Live Application

**Frontend URL:** https://svramssj.manus.space  
**Backend API:** https://dyh6i3cv1dpk.manus.space

## 🔐 Demo Credentials

- **Email:** admin@droneit.com
- **Password:** admin123

## ✨ Features

### 🏠 Home Dashboard
- Welcome banner with system overview
- Document statistics (Safety, Quality, Total documents)
- Interactive monthly checklist with progress tracking (7/12 months completed)
- Quick action buttons for document upload and report viewing

### 🔐 Authentication System
- Secure login with email and password
- User session management
- Role-based access control

### 📋 Navigation Menu
- **Home** - Main dashboard
- **Audits** - Audit management (placeholder)
- **UASOC** - Unmanned Aircraft System Operations Center with:
  - Active drone fleet status
  - Real-time operational metrics
  - Mission control interface
  - Weather conditions monitoring
- **Safety Management** - Comprehensive safety documentation
- **Quality Management** - Quality assurance documentation

### 🛡️ Safety Management
Complete safety documentation system with the following categories:
- **ERP** - Emergency Response Plan
- **Hazard Reports** - Hazard reports raised and actions taken
- **Incidents & Accidents** - Incident reporting and corrective actions
- **Risk Assessment** - Risk assessment database
- **Safety Meeting Minutes** - Meeting documentation
- **Safety Notices** - Safety manager communications
- **SMS Forms** - Safety Management System example forms

### 🎯 Quality Management
Quality assurance system with:
- **Audit Schedule & Checklists** - Conducted audit schedules
- **Findings and Corrective Actions** - Quality findings management
- **QA Meeting Minutes** - Quality assurance meeting records

### 📁 Document Management
Each category includes:
- File upload functionality
- Subcategory organization (optional)
- Additional notes section for detailed documentation
- Tag system for easy categorization
- Document listing and management

### 📊 Monthly Checklist
Interactive calendar-style checklist featuring:
- 12-month view with completion status
- Visual progress indicator (7/12 Complete)
- Click-to-toggle completion status
- Automatic date tracking
- Color-coded status indicators

### 📱 iOS Compatibility
- Responsive design optimized for mobile devices
- Touch-friendly interface
- Progressive Web App (PWA) capabilities
- Cross-platform compatibility

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality component library
- **Lucide Icons** - Beautiful icon set
- **Axios** - HTTP client for API communication
- **React Query** - Data fetching and caching

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **Python 3.11** - Modern Python runtime

### Original MERN Stack (Development)
- **MongoDB** - Document database
- **Express.js** - Node.js web framework
- **React** - Frontend framework
- **Node.js** - JavaScript runtime

## 🏗️ Architecture

### Frontend Architecture
```
src/
├── components/          # React components
│   ├── LoginPage.jsx   # Authentication
│   ├── HomePage.jsx    # Dashboard
│   ├── Navigation.jsx  # Menu system
│   ├── DocumentManager.jsx # File management
│   ├── AuditsPage.jsx  # Audit interface
│   └── UasocPage.jsx   # Operations center
├── contexts/           # React contexts
│   └── AuthContext.jsx # Authentication state
├── lib/               # Utilities
│   └── api.js         # API configuration
└── App.jsx           # Main application
```

### Backend Architecture
```
backend-flask/
├── src/
│   └── main.py        # Flask application
├── requirements.txt   # Python dependencies
└── venv/             # Virtual environment
```

## 🚀 Deployment

The application is deployed using modern cloud infrastructure:

- **Frontend**: Static hosting with CDN distribution
- **Backend**: Serverless Flask deployment
- **Database**: In-memory storage for demo (production would use MongoDB)

## 📱 Mobile/iOS Features

- **Responsive Design**: Optimized for all screen sizes
- **Touch Interface**: Mobile-friendly interactions
- **Fast Loading**: Optimized bundle size and lazy loading
- **Offline Capability**: Service worker for offline functionality
- **App-like Experience**: PWA features for native app feel

## 🔧 Development Setup

### Prerequisites
- Node.js 20+
- Python 3.11+
- MongoDB (for full MERN stack)

### Local Development
1. Clone the repository
2. Install frontend dependencies: `cd frontend && pnpm install`
3. Install backend dependencies: `cd backend && npm install`
4. Start MongoDB service
5. Seed the database: `cd backend && node seed.js`
6. Start backend: `npm run dev`
7. Start frontend: `cd frontend && pnpm run dev`

## 📊 Key Metrics

- **Performance**: Fast loading times with optimized bundles
- **Accessibility**: WCAG compliant interface
- **Security**: Secure authentication and data handling
- **Scalability**: Modular architecture for easy expansion
- **Compatibility**: Cross-browser and cross-platform support

## 🎯 Future Enhancements

- Real-time notifications
- Advanced reporting and analytics
- Integration with drone hardware APIs
- Multi-tenant support
- Advanced user management
- File versioning and audit trails
- Automated compliance reporting

## 📞 Support

For technical support or feature requests, please contact the development team.

---

**Built with ❤️ using modern web technologies for comprehensive drone operations management.**

