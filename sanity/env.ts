
 /*export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-02'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)



function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
} */



 /* export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-02'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

// FIX: Change variable to NEXT_PUBLIC_SANITY_TOKEN
export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
} */

  export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-02"

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "z17jozw5"

export const token =
  process.env.NEXT_PUBLIC_SANITY_TOKEN || "sklaG6RUjocZmlr3a05UO5IwKAOBVvy9iqVaM10k6oLpgdHOL8278EtAhpqIC1yM9dnawNQZyHsLz2roAqDhCayDvM62AxP9SP0x0Xi3iSLddhbbJx56IfxWTZ4rg490Fo7Fi5WdpHGl3bx87WnH3dMaAqzjUGsq5OnbtVRi1lVv6cGuiGGK"
