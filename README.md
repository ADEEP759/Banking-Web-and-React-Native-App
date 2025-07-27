# 🔁 Full Stack Finance App (Web + Mobile)

This repository hosts a microfrontend-based finance app using **Node.js**, **Express.js**, **React**, **React Native Web**, **GraphQL**, and **Webpack Module Federation**. The application is composed of a backend service and multiple frontend modules (`host-app`, `transaction-history`, `account-overview`, and `ui-kit`), all working together via shared ports and webpack federation.

---

## 📁 Project Structure

```
root/
├── backend/                # Node.js + Express.js + GraphQL server
├── frontend/
│   ├── host-app/           # Main host application (port 3000)
│   ├── transaction-history/# Microfrontend for transactions (port 3001)
│   ├── account-overview/   # Microfrontend for account info (port 3002)
│   └── ui-kit/             # Shared UI components
```
---


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <REPO_URL>
cd <REPO_FOLDER>
```

---

## 🛠 Backend Setup

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

Start the backend server:

```bash
node server.js
```

> ✅ The backend should now be running with GraphQL APIs (typically on http://localhost:4000/graphql).

---

## 🎨 Frontend Setup

Each frontend module requires setup. Navigate to each folder:

### a. `ui-kit` (Shared UI Library)

```bash
cd frontend/ui-kit
npm install
npm run build
```

### b. `account-overview` (Port 3002)

```bash
cd frontend/account-overview
npm install
npm start
```

### c. `transaction-history` (Port 3001)

```bash
cd frontend/transaction-history
npm install
npm start
```

### d. `host-app` (Main container, Port 3000)

```bash
cd frontend/host-app
npm install
npm start
```

---

## 🔌 How It Works

- `host-app` acts as the shell, dynamically loading remote microfrontends using **Webpack Module Federation**
- `ui-kit` is a shared component library used by all frontend modules
- Backend exposes a **GraphQL API** used to power account and transaction data
- UI is responsive using **React Native Web**

---

## 📦 Features

- 🧩 Microfrontend architecture
- 📡 GraphQL API integration
- 📱 Cross-platform web design
- 🧰 Shared UI component system (ui-kit)
- 💾 CSV export in transaction history

---

## ⚙️ Configuration Details

| Module               | Port   | Description                    |
|----------------------|--------|--------------------------------|
| `host-app`           | 3000   | Main container app             |
| `transaction-history`| 3001   | Transactions microfrontend     |
| `account-overview`   | 3002   | Accounts microfrontend         |
| `backend`            | 4000   | GraphQL backend                |

- Ports are configurable via `webpack.config.js` in each module.
- Module Federation uses `ModuleFederationPlugin` to expose/consume components.

---

## 📤 Export CSV

In the **Transaction History** screen, click **"Export CSV"** to download your transactions in `.csv` format.

---

## 🧪 Technologies Used

- **Frontend**: React, React Native Web, Webpack 5, Module Federation
- **Backend**: Node.js, Express.js, GraphQL
- **State/Data**: GraphQL
- **Build Tools**: npm, Webpack

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Final Notes

- Designed for scalable microfrontend architecture
- Fully cross-platform with **React Native Web**
- Works on **web and mobile browsers**
- Modular folder structure keeps codebase clean and maintainable

Banking React Native app and web with micro frontend is hosted — enjoy! 🚀


