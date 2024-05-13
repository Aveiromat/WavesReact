import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Clothing } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedClothes: builder.query<Clothing, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Clothing[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Clothing[], void>({
      query: () => 'em-breve'
    }),
    getActionClothes: builder.query<Clothing[], void>({
      query: () => 'acao'
    }),
    getSportClothes: builder.query<Clothing[], void>({
      query: () => 'esportes'
    }),
    getSimulationClothes: builder.query<Clothing[], void>({
      query: () => 'simulucao'
    }),
    getFightClothes: builder.query<Clothing[], void>({
      query: () => 'luta'
    }),
    getRpgClothes: builder.query<Clothing[], void>({
      query: () => 'rpg'
    }),
    getClothing: builder.query<Clothing, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedClothesQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionClothesQuery,
  useGetFightClothesQuery,
  useGetRpgClothesQuery,
  useGetSimulationClothesQuery,
  useGetSportClothesQuery,
  useGetClothingQuery
} = api

export default api
