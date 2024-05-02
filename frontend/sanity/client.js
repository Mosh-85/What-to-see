import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: "3rr2vauw",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})

export const writeClient = createClient({
    projectId: "3rr2vauw",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07",
    token: "sk4RECTISZnpIsc5WvYdk3fSjwsVmrOEPwpdK64p0qUXnsV5FDoAKEzNQczK9M2zRHIVx3hOIuZdSi0OcY34zViLFYkdy70kjyKDR9xTjlgn7ntr9t2JKO2R8K4SCOxrKIFCFrO3VnCwp4Xe874zzYONQRMaPWI6wfPg9Qqa9hmQcDf9WEYY"
})