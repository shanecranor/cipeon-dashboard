"use client"
import { useLightningTimeClock } from '@purduehackers/time/react'
export const Clock = () =>  {
  const { lightningString, formattedNormalTime } =
    useLightningTimeClock() // Surfaces the entire Lightning Time object and an additional formattedNormalTime
  return <h1>{lightningString} ({formattedNormalTime})</h1>
}