# Deployment Instructions for Estate.pk

## Prerequisites

1. **Vercel Account**:
   - Ensure you have a Vercel account.
   - Obtain the following secrets from your Vercel account:
     - `VERCEL_TOKEN`
     - `VERCEL_ORG_ID`

2. **GitHub Repository**:
   - Ensure the project is hosted on GitHub.
   - Add the `VERCEL_TOKEN` and `VERCEL_ORG_ID` secrets to your GitHub repository under `Settings > Secrets and variables > Actions`.

3. **Environment Variables**:
   - Set up the required environment variables in Vercel for the project. These include:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `STRIPE_SECRET_KEY`
     - `STRIPE_WEBHOOK_SECRET`

## Deployment Steps

### 1. Automatic Deployment via CI/CD

The project is configured to deploy automatically using GitHub Actions whenever changes are pushed to the `main` branch. The CI/CD pipeline performs the following steps:

1. Lint the codebase.
2. Run tests.
3. Build the project.
4. Deploy to Vercel.

### 2. Manual Deployment

If you need to deploy manually, follow these steps:

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the Project**:
   Navigate to the project directory and run:
   ```bash
   vercel --prod
   ```

### 3. Verifying Deployment

1. After deployment, verify the following:
   - The application is accessible at the production URL.
   - All environment variables are correctly configured.
   - Payments and other integrations (e.g., Supabase, Stripe) are functioning as expected.

2. Check the Vercel dashboard for any deployment errors.

## Notes

- Ensure that the `main` branch is always in a deployable state.
- Regularly monitor the CI/CD pipeline for any failures.
- Update the environment variables in Vercel if there are changes to the configuration.

For further assistance, refer to the [Vercel Documentation](https://vercel.com/docs) or contact the development team.