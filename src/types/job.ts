export type JobStatus = 'wishlist' | 'applied' | 'interview' | 'offer' | 'rejected'

export type JobPriority = 'low' | 'medium' | 'high'

export interface Job {
  id: string
  company: string
  role: string
  status: JobStatus
  priority: JobPriority
  link?: string
  salary?: string
  notes?: string
  appliedAt: string
  updatedAt: string
}

export interface JobInput {
  company: string
  role: string
  priority: JobPriority
  link?: string
  salary?: string
  notes?: string
}