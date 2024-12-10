# GFE Foundation

This is a public website for GFE Foundation.

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Next-Auth](https://next-auth.js.org/getting-started/example)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## How to Use

### 1. Clone the repo into your local

```bash
git clone https://github.com/calm428/gfe-website.git
```

### 2. Go to the project folder

```bash
cd gfe-website
```

### 3. Install packages with yarn

```bash
yarn
```

### 4. Set up your `.env` file

- Duplicate .env.example to .env
- Use openssl rand -base64 32 to generate a key and add it under NEXTAUTH_SECRET in the .env file.
- Get the google client secret and id

### 5. Run (in development mode)

```bash
yarn dev
```

## CI/CD Workflow with GitHub Actions

Our project leverages GitHub Actions for continuous integration and continuous deployment (CI/CD) to automate the process of verifying our code and deploying it to production. Below is an overview of our primary workflow configuration.

### Workflow Overview

The GitHub workflow is designed to streamline our development process, ensuring that every push to the main branch or pull request triggers automated tasks - building and deployment.

### Trigger Events

The workflow is configured to trigger on specific events:
- **Pushes or pull requests to the main branch:** Automatically build and deploy the latest code, ensuring our deployment reflects the most current version.

### Main Actions

The GitHub Actions workflow consists of several key steps, each responsible for different aspects of the CI/CD process:

1. **Checkout:** Fetches the Git repository and checks out the relevant branch, making the code available for subsequent steps.

2. **Dependency Installation:** Installs all necessary dependencies required for the project to build and run tests.

3. **Building Docker Image:** (If applicable) Constructs the Docker image using the provided `Dockerfile`, which includes the application and its environment.

4. **Pushing to DockerHub:** Pushes the built Docker image to DockerHub, making it available for deployment to various environments.

6. **Deployment:** Automatically deploys the application to the production environment, using the latest Docker image from DockerHub. (Deployment is processed on the other repo: [gfe-deploy-server](https://github.com/calm428/gfe-deploy-server))

### Environment Variables and Secrets

The workflow utilizes GitHub Secrets to securely handle sensitive information required during the build and deployment processes, such as Github personal access token, DockerHub credentials, and other environment-specific variables.

#### - Github Secrets
```properties
DOCKERHUB_TOKEN=your_dockerhub_token
DOCKERHUB_USERNAME=your_dockerhub_username
PAT=your_github_personal_access_token
```

#### - Github Variables
```properties
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_METADATA_BASE=https://gfe-foundation.vercel.app
NEXT_PUBLIC_WEBSOCKET_HOST=ico_websocket_url
```
