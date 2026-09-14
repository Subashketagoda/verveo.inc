import { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://verveocreative.com";

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/work`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/process`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const projectUrls = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    ...staticPages.map(page => ({
      ...page,
      lastModified: new Date(),
    })),
    ...projectUrls,
  ];
}
