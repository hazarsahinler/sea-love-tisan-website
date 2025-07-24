// src/lib/sanityClient.ts
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  useCdn: false, // Geliştirme sırasında en güncel veriyi almak için false
});

export default client;