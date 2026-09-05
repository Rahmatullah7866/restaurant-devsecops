#  Shift-Left DevSecOps Restaurant App

A full-stack, containerized micro-project engineered to demonstrate modern **Shift-Left DevSecOps** practices across the software development lifecycle—from local code to containerized Kubernetes orchestration.

---

##  Architecture & Tech Stack

 **Frontend:** React.js (Vite), JavaScript, HTML5, Modern CSS Grid
 **Backend:** Python 3.12, Django 6.1, Django REST Framework (DRF)
 **Database:** SQLite (persisted locally / mounted via volumes)
 **Containerization:** Docker, Docker Compose
 **Orchestration:** Kubernetes (Deployments, Services, NodePort)
 **Security & CI/CD:** GitHub Actions, Pytest, Bandit (SAST), Trivy (Container Vulnerability Scanning)

---

##  Shift-Left Security Principles Enforced

This project implements the **Shift-Left** security philosophy by embedding automated quality and security gates directly into the GitHub Actions CI/CD workflow prior to code merge:

1. **Automated Unit Testing (`Pytest`):** Ensures core API contract validity and catches regression defects during the PR stage.
2. **Static Application Security Testing (`Bandit`):** Scans the Python source code for security flaws (e.g., hardcoded credentials, insecure file permissions, unsafe parsing) before containers are built.
3. **Container Image Scanning (`Trivy`):** Automatically analyzes the assembled Docker image for OS-level packages and application-level dependency CVEs (Common Vulnerabilities and Exposures). The build is configured to fail (`exit-code: 1`) on any unfixed **HIGH** or **CRITICAL** severity findings.

---

##  Getting Started

### Prerequisites
* Docker & Docker Compose
* Python 3.12+ & Node.js 22+ (for local bare-metal run)
* `kubectl` (configured with a local cluster)

---

### Running with Docker Compose (Local Dev)

1. Clone the repository:
   ```bash
   git clone https://github.com/Rahmatullah7866/restaurant-devsecops.git
   cd restaurant-devsecops