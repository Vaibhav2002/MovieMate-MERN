import Section from "@/data/models/local/Section";

export const getSlugFromSection = (section: Section) => section.toLowerCase().replace(" ", "-")

export const getSectionFromSlug = (slug: string):Section => slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") as Section
