# GeoHarvest Venture Website

Professional green-and-gold marketing site for GeoHarvest Venture, built as a static site and ready for Google Cloud / Firebase Hosting.

## Included
- User-provided GeoHarvest Venture logo in `assets/brand/geoharvest-logo.jpg`
- Full-screen agritech hero with animated Ghana supply routes
- Ghana regional map from Wikimedia Commons
- Farm → Verify → Trace → Transport → Market story
- Raw produce image gallery
- Traceability batch demo section
- Coming-soon Android and iOS mobile-app section
- Leadership section with co-founder cards and client-side upload slot for additional team members
- Responsive mobile navigation
- Scroll reveal animations and motion effects

## Important
The logistics vehicles, map routes, and metrics on the public landing page are presentation/demo visuals. They are not live operational tracking data yet.

The photos in `assets/story/` are generated concept visuals and cropped presentation artwork created for this website prototype. Replace them with approved production assets later if desired.

## Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase use --add
firebase deploy --only hosting
```

## Deploy to Google Cloud Run
```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
gcloud run deploy geoharvest-web --source . --region europe-west1 --allow-unauthenticated
```

## Customize
- Replace the team placeholders in `index.html`.
- Change contact information in the footer if needed.
- Connect the "Coming Soon" store buttons once app-store links exist.
- Replace presentation assets in `assets/story/` with production photography when available.
