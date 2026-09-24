$ErrorActionPreference="Stop"
$PROJECT_ID=Read-Host "Enter Google Cloud Project ID"
$REGION=Read-Host "Enter Cloud Run region"
gcloud auth login
gcloud config set project $PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
gcloud run deploy geoharvest-web --source . --region $REGION --allow-unauthenticated
