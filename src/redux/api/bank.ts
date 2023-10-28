import { Bank } from "../../interfaces/bank.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = 'https://dev.obtenmas.com/catom/api/challenge/'

export const bankApi = createApi({
    reducerPath: "bankList",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getList: builder.query<Bank[], null>({
            query: () => "banks",
        }),
    }),
});

export const { useGetListQuery } = bankApi;
