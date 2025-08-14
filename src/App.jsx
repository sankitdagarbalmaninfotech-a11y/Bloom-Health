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
const WomenWellBeing = lazy(() => import('@/pages/WomenWellBeing'));
const Cardiology = lazy(() => import('@/pages/Cardiology'));
const Neurology = lazy(() => import('@/pages/Neurology'));
const Rheumatology = lazy(() => import('@/pages/Rheumatology'));
const Endocrinology = lazy(() => import('@/pages/Endocrinology'));
const Gastroenterology = lazy(() => import('@/pages/Gastroenterology'));
const InfectiousDiseases = lazy(() => import('@/pages/InfectiousDiseases'));
const MaternityAndFetalCare = lazy(() => import('@/pages/MaternityAndFetalCare'));
const Gynecology = lazy(() => import('@/pages/Gynecology'));
const Obstetrics = lazy(() => import('@/pages/Obstetrics'));
const IvfReproductiveMedicineAndSurgery = lazy(() => import('@/pages/IvfReproductiveMedicineAndSurgery'));
const GeneralPediatrics = lazy(() => import('@/pages/GeneralPediatrics'));
const Neonatology = lazy(() => import('@/pages/Neonatology'));
const PulmonaryAndAllergy = lazy(() => import('@/pages/PulmonaryAndAllergy'));
const GeneralSurgery = lazy(() => import('@/pages/GeneralSurgery'));
const Anesthesia = lazy(() => import('@/pages/Anesthesia'));
const Orthopedics = lazy(() => import('@/pages/Orthopedics'));
const Neurosurgery = lazy(() => import('@/pages/Neurosurgery'));
const OtolaryngologyHeadAndNeckSurgery = lazy(() => import('@/pages/OtolaryngologyHeadAndNeckSurgery'));
const Urology = lazy(() => import('@/pages/Urology'));
const PlasticAndReconstructive = lazy(() => import('@/pages/PlasticAndReconstructive'));
const Ophthalmology = lazy(() => import('@/pages/Ophthalmology'));
const AdultDentistry = lazy(() => import('@/pages/AdultDentistry'));
const PediatricDentistry = lazy(() => import('@/pages/PediatricDentistry'));
const CosmeticDentistry = lazy(() => import('@/pages/CosmeticDentistry'));
const MedicalAndCosmetic = lazy(() => import('@/pages/MedicalAndCosmetic'));
const Dermatology = lazy(() => import('@/pages/Dermatology'));
const RespiratoryMedicine = lazy(() => import('@/pages/RespiratoryMedicine'));
const UrgentCare = lazy(() => import('@/pages/UrgentCare'));
const TravelMedicineAndVaccinations = lazy(() => import('@/pages/TravelMedicineAndVaccinations'));
const GeneralMedicine = lazy(() => import('@/pages/GeneralMedicine'));

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
              <Route path="/womenWellBeing" element={<WomenWellBeing/>}/>
              <Route path="/cardiology" element={<Cardiology/>}/>
              <Route path="/neurology" element={<Neurology/>}/>
              <Route path="/rheumatology" element={<Rheumatology/>}/>
              <Route path="/endocrinology" element={<Endocrinology/>}/>
              <Route path="/gastroenterology" element={<Gastroenterology/>}/>
              <Route path="/infectiousDiseases" element={<InfectiousDiseases/>}/>
              <Route path="/maternity&FetalCare" element={<MaternityAndFetalCare/>}/>
              <Route path="/gynecology" element={<Gynecology/>}/>
              <Route path="/obstetrics" element={<Obstetrics/>}/>
              <Route path="/generalPediatrics" element={<GeneralPediatrics/>}/>
              <Route path="/neonatology" element={<Neonatology/>}/>
              <Route path="/generalSurgery" element={<GeneralSurgery/>}/>
              <Route path="/pulmonary&Allergy" element={<PulmonaryAndAllergy/>}/>
              <Route path="/anesthesia" element={<Anesthesia/>}/>
              <Route path="/orthopedics" element={<Orthopedics/>}/>
              <Route path="/neurosurgery" element={<Neurosurgery/>}/>
              <Route path="/urology" element={<Urology/>}/>
              <Route path="/plastic&Reconstructive" element={<PlasticAndReconstructive/>}/>
              <Route path="/ophthalmology" element={<Ophthalmology/>}/>
              <Route path="/adultDentistry" element={<AdultDentistry/>}/>
              <Route path="/pediatricDentistry" element={<PediatricDentistry/>}/>
              <Route path="/cosmeticDentistry" element={<CosmeticDentistry/>}/>
              <Route path="/respiratoryMedicine" element={<RespiratoryMedicine/>}/>
              <Route path="/medical&Cosmetic" element={<MedicalAndCosmetic/>}/>
              <Route path="/dermatology" element={<Dermatology/>}/>
              <Route path="/urgentCare" element={<UrgentCare/>}/>
              <Route path="/generalMedicine" element={<GeneralMedicine/>}/>
              <Route path="/travelMedicine&Vaccinations" element={<TravelMedicineAndVaccinations/>}/>
              <Route path="/otolaryngology(ENT)/HeadAndNeckSurgery" element={<OtolaryngologyHeadAndNeckSurgery/>}/>
              <Route path="/ivf/ReproductiveMedicineAndSurgery" element={<IvfReproductiveMedicineAndSurgery/>}/>
              <Route path="/services/:slug/:subServiceSlug" element={<SubServicePage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Providers>
  );
}


