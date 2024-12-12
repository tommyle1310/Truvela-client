import { serviceCategory } from "@/constants/service-category";

export type ServiceCategory = typeof serviceCategory[keyof typeof serviceCategory];