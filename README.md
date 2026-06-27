# Containerized Node.js Application with CI/CD Pipeline

A hands-on DevOps project demonstrating containerization, multi-container orchestration, automated testing, and Continuous Integration (CI) using Docker, Docker Compose, and GitHub Actions.

---

## 🚀 Project Overview

This project showcases a production-ready DevOps workflow by packaging a Node.js REST API and a Redis database into isolated containers and automating quality control with GitHub Actions.

### Key Accomplishments:
1. **REST API Development**: Built a Node.js web application with Express featuring health check endpoints (`/health`) and page view tracking.
2. **Containerization**: Created a lightweight, secure `Dockerfile` using multi-stage best practices, Node 18 Alpine, and non-root users.
3. **Multi-Container Orchestration**: Utilized `docker-compose.yml` to network the web app and a Redis cache container seamlessly.
4. **Automated Testing**: Wrote automated unit tests using Node.js's native test runner (`node --test`).
5. **CI/CD Automation**: Designed a GitHub Actions pipeline (`.github/workflows/ci.yml`) that spins up cloud virtual machines, runs tests, and builds Docker containers on every code push.

---

## 🛠 Tech Stack & Tools

* **Application**: Node.js, Express, Redis
* **Containerization**: Docker, Docker Compose
* **CI/CD & Automation**: GitHub Actions
* **Testing**: Node Test Runner (`node --test`), Supertest
* **Version Control**: Git & GitHub

---

## 📂 Project Structure

```text
devops-kickstart/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI/CD pipeline configuration
├── .dockerignore           # Files ignored during Docker builds
├── .gitignore              # Files ignored by Git
├── Dockerfile              # Blueprint for building the application container
├── docker-compose.yml      # Multi-container orchestration (Web + Redis)
├── index.js                # Main application server & route handlers
├── package.json            # Project dependencies & npm test scripts
├── test.js                 # Automated test suite
└── README.md               # Project documentation
```

---

## 🛠 How to Run Locally

### 1. Standard Node.js Execution
```bash
npm install
npm test          # Run automated unit tests
node index.js     # Start server at http://localhost:3000
```

### 2. Standalone Docker Container
```bash
docker build -t devops-app .
docker run -d -p 3000:3000 --name devops-container devops-app
```

### 3. Multi-Container with Docker Compose (App + Redis Database)
```bash
docker compose up --build
```
Visit `http://localhost:3000` and refresh to see live page view counter updates powered by Redis! To stop all services:
```bash
docker compose down
```

---

## 🔄 CI/CD Pipeline Workflow

Every time changes are pushed to the `main` branch, GitHub Actions automatically:
1. Provisions a clean Ubuntu cloud virtual machine (`ubuntu-latest`).
2. Checks out the repository code and sets up Node.js 18.
3. Installs dependencies (`npm ci`) and runs automated unit tests (`npm test`).
4. **Build Gate**: If tests pass, it builds the Docker image. If any test fails, the build immediately halts to prevent broken code from deploying.
