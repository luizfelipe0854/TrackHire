import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Job, JobInput, JobStatus } from '../types/job'

interface JobStore {
  jobs: Job[]
  addJob: (input: JobInput) => void
  updateJob: (id: string, updates: Partial<Job>) => void
  deleteJob: (id: string) => void
  moveJob: (id: string, newStatus: JobStatus) => void
}

export const useJobStore = create<JobStore>()(
  persist(
    (set) => ({
      jobs: [],

      addJob: (input) =>
        set((state) => ({
          jobs: [
            ...state.jobs,
            {
              ...input,
              id: crypto.randomUUID(),
              status: 'wishlist',
              appliedAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          ],
        })),

      updateJob: (id, updates) =>
        set((state) => ({
          jobs: state.jobs.map((job) =>
            job.id === id
              ? { ...job, ...updates, updatedAt: new Date().toISOString() }
              : job
          ),
        })),

      deleteJob: (id) =>
        set((state) => ({
          jobs: state.jobs.filter((job) => job.id !== id),
        })),

      moveJob: (id, newStatus) =>
        set((state) => ({
          jobs: state.jobs.map((job) =>
            job.id === id
              ? { ...job, status: newStatus, updatedAt: new Date().toISOString() }
              : job
          ),
        })),
    }),
    {
      name: 'trackhire',
    }
  )
)