import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { showToast } from '../utils/toast';
import { setUser } from './slices/userSlice';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const user = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ 
    baseUrl,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['User'], // recommended when using tags

  endpoints: (builder) => ({
    userDetails: builder.query({
      query: () => ({
        url: '/userDetails',
        method: 'GET'
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data?.user));
        } catch (err) {
          showToast.error(err?.error?.data?.message || 'Login to load user details!');
        }
    },
    }),
  }),
});

export const {
  useUserDetailsQuery
} = user;
