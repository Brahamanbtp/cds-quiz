import type { Question } from "@/types/Question"

const dataCache: Record<string, Record<string, Question[]>> = {};

// Dynamic import function for category data
export async function getCategoryData(category: string): Promise<Record<string, Question[]> | null> {
  if (dataCache[category]) {
    return dataCache[category];
  }
  try {
    // Dynamic import based on category - without the .ts extension
    const module = await import(`@/data/${category}`)
    dataCache[category] = module.default || module[category + "Data"]; // fallback if needed
    // Usually it's exported as default, but let's just use module.default
    return module.default
  } catch (error) {
    console.error(`Failed to load data for category: ${category}`, error)
    return null
  }
}
