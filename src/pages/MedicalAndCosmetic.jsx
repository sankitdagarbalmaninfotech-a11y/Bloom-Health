import React from 'react';
import Department from '../components/layout/Department';

const MedicalAndCosmetic = () => {
  return (
    <Department
      departmentName='Medical And Cosmetic'
      overviewText='At bloom Hospital you will be cared for by highly skilled consultants, and nurses who have an in-depth practical knowledge of how to treat or prevent your heart condition in the safest way. Through our multidisciplinary team approach, we share best practices and innovative methods, so that we can offer a fully comprehensive range of heart investigations and procedures across your entire treatment path.'
      services={[
        'Medical And Cosmetic',
        'Echocardiography',
        'Stress Testing',
        'Medical And Cosmetic',
      ]}
      diseases={[
        'Coronary Artery Disease',
        'Hypertension',
        'Hypertrophic Cardiomyopathy',
        'Heart Failure',
        'Arrhythmias',
        'Valvular Heart Disease',
      ]}
      specialtyUnits={[
        'Hypertension Unit',
        'Arrhythmia & Syncope Unit',
        'Structural Heart Disease Unit',
        'Coronary Macro & Micro vessel Disease Unit',
      ]}
      centersOfExcellence='Cardiometabolic and Weight Management'
      doctors={[
        {
          id: 1,
          name: 'Dr. John Doe',
          specialty: 'Cardiology',
          image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
          id: 2,
          name: 'Dr. Jane Smith',
          specialty: 'Cardiac Surgery',
          image: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        {
          id: 3,
          name: 'Dr. Michael Brown',
          specialty: 'Interventional Cardiology',
          image: 'https://randomuser.me/api/portraits/men/55.jpg',
        },
      ]}
      faqs={[
        {
          question: 'What should I bring to my first cardiology appointment?',
          answer: (
            <div className='py-2 text-gray-600'>
              For your first cardiology appointment, please bring:
              <ul className='list-disc pl-5 mt-1 space-y-1'>
                <li>Qatar ID / valid passport</li>
                <li>Insurance card</li>
                <li>Any previous ECG or cardiac test results</li>
                <li>List of current medications</li>
              </ul>
            </div>
          ),
        },
        {
          question: 'What should I bring to my first cardiology appointment?',
          answer: (
            <div className='py-2 text-gray-600'>
              For your first cardiology appointment, please bring:
              <ul className='list-disc pl-5 mt-1 space-y-1'>
                <li>Qatar ID / valid passport</li>
                <li>Insurance card</li>
                <li>Any previous ECG or cardiac test results</li>
                <li>List of current medications</li>
              </ul>
            </div>
          ),
        },
        // Add other FAQs specific to cardiology
      ]}
    />
  );
};

export default MedicalAndCosmetic;
