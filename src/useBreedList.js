import React from 'react'
import { useQuery } from '@tanstack/react-query'
import fetchBreedList from "./fetchBreedList"

const useBreedList = (animal) => {
  const results = useQuery(["breeds", animal], fetchBreedList)

  return [results?.data?.breeds ?? [], results.status] //results.data.breeds (if data.breeds exists) | results.data (if data exists) | results | []
}

export default useBreedList