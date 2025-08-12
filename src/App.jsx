import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Providers from '@/components/providers';

// Lazy-loaded pages and layout
const MainLayout = lazy(() => import('@/components/layouts/MainLayout'));
const HomePage = lazy(() => import('@/app/page'));
const ServicePage = lazy(() => import('@/app/services/[slug]/page'));
const SubServicePage = lazy(() => import('@/app/services/[slug]/[subServiceSlug]/page'));
const NotFound = lazy(() => import('@/app/not-found'));
const HospitalsDoctors = lazy(() => import('@/pages/HospitalsDoctors')); 
const BookAnAppointment = lazy(() => import('@/pages/BookAnAppointment')); 

export default function App() {
  return (
    <Providers>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Suspense fallback={<div>Loading…</div>}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/hospitalsDoctors" element={<HospitalsDoctors/>} />
              <Route path="/bookAppointment" element={<BookAnAppointment/>} />
              <Route path="/services/:slug/:subServiceSlug" element={<SubServicePage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Providers>
  );
}


