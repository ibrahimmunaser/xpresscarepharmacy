import { env } from '@/lib/env'
import type { FaxProvider } from './types'
import { phaxioProvider } from './phaxio'
import { srfaxProvider } from './srfax'
import { ringcentralProvider } from './ringcentral'
import { faxPlusProvider } from './faxplus'
import { mockProvider } from './mock'

export function getFaxProvider(): FaxProvider {
  switch (env.FAX_PROVIDER) {
    case 'PHAXIO': return phaxioProvider()
    case 'SRFAX': return srfaxProvider()
    case 'RINGCENTRAL': return ringcentralProvider()
    case 'FAXPLUS': return faxPlusProvider()
    case 'MOCK': return mockProvider()
    default:
      return mockProvider()
  }
}

export * from './types'


















