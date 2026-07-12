import {
  FaFileMedical, FaShoppingBasket, FaTruck, FaHeartbeat, FaTint,
  FaBaby, FaUserShield, FaFirstAid, FaStethoscope, FaSearchLocation, FaCapsules,
} from 'react-icons/fa'

export const SERVICES = [
  { id: 'prescription-medicines', title: 'Prescription Medicines', icon: FaFileMedical, desc: 'Accurate dispensing of doctor-prescribed medicines, verified by our qualified pharmacists.' },
  { id: 'otc-medicines', title: 'OTC Medicines', icon: FaShoppingBasket, desc: 'A wide range of over-the-counter medicines for everyday health needs, no prescription required.' },
  { id: 'home-delivery', title: 'Home Delivery', icon: FaTruck, desc: 'Medicines delivered safely to your doorstep across Mathura, with quick turnaround.' },
  { id: 'bp-check', title: 'Blood Pressure Check', icon: FaHeartbeat, desc: 'Free in-store blood pressure checks with guidance from our pharmacy team.' },
  { id: 'diabetes-care', title: 'Diabetes Care Products', icon: FaTint, desc: 'Glucometers, test strips and diabetic-friendly essentials, all in one place.' },
  { id: 'baby-care', title: 'Baby Care Products', icon: FaBaby, desc: 'Trusted baby care essentials from feeding to hygiene.' },
  { id: 'personal-care', title: 'Personal Care', icon: FaUserShield, desc: 'Everyday hygiene and personal wellness products for the whole family.' },
  { id: 'healthcare-essentials', title: 'Healthcare Essentials', icon: FaCapsules, desc: 'Vitamins, supplements and daily wellness must-haves.' },
  { id: 'first-aid', title: 'First Aid Products', icon: FaFirstAid, desc: 'Bandages, antiseptics and first-aid kits ready for home emergencies.' },
  { id: 'medical-equipment', title: 'Medical Equipment', icon: FaStethoscope, desc: 'Nebulizers, BP monitors, wheelchairs and mobility aids for rent or purchase.' },
  { id: 'availability-assistance', title: 'Medicine Availability Assistance', icon: FaSearchLocation, desc: "Can't find a medicine? Ask us — we'll source it or suggest a trusted alternative." },
]
