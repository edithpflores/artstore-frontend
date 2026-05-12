# ArtStore DevOps Platform - Frontend

Frontend application for the ArtStore DevOps project.

This frontend provides a simple user interface for interacting with the ArtStore backend API and demonstrates frontend deployment workflows using Docker, Kubernetes, and Azure DevOps pipelines.

---

# Project Overview

The frontend is designed as a lightweight web application that communicates with the ArtStore backend API.

The purpose of this repository is to demonstrate:

- Frontend CI/CD pipelines
- Multi-environment deployments
- Docker containerization
- Kubernetes deployments
- Azure DevOps integration
- DevOps branch strategies and Pull Requests

---

# Features

- Responsive frontend interface
- Product visualization
- API communication with backend service
- Dockerized frontend deployment
- Kubernetes deployment support
- Azure DevOps pipeline integration
- Dev and Production deployment environments

---

# Technology Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## DevOps
- Docker
- Kubernetes
- Minikube
- Azure DevOps Pipelines

## Source Control
- GitHub
- Pull Requests
- Feature Branch Workflow

---

# Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── Dockerfile
├── k8s/
└── azure-pipelines.yml
```

---

# CI/CD Workflow

The frontend deployment pipeline includes:

1. Source code checkout
2. Frontend validation
3. Docker image build
4. Docker Hub image publishing
5. Deployment to Development environment
6. Manual approval for Production deployment
7. Deployment to Production environment

---

# Branch Strategy

| Branch | Purpose |
|---|---|
| main | Stable production-ready code |
| feature/* | New features and frontend improvements |
| develop | Integration branch |

---

# Local Development

## Run locally

Open:

```text
index.html
```

in your browser.

---

# Docker

## Build Docker image

```bash
docker build -t artstore-frontend .
```

## Run container

```bash
docker run -p 8080:80 artstore-frontend
```

Frontend available at:

```text
http://localhost:8080
```

---

# Kubernetes Deployment

Kubernetes deployment manifests are located in:

```text
k8s/
```

Deployment is managed locally with Minikube.

---

# Azure DevOps Pipeline

The Azure DevOps pipeline automates:

- Build validation
- Container creation
- Environment deployments
- Production approvals

---

# Future Improvements

- Enhanced UI/UX
- Additional frontend testing
- API integration enhancements

---

# Author

Edith Flores  
ITESO - DevOps Project