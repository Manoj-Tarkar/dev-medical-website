import {
  FaPills, FaHeadSideCough, FaHeartbeat, FaTint, FaChild, FaBaby,
  FaVenus, FaMars, FaSpa, FaLeaf, FaCapsules, FaAllergies,
  FaStethoscope, FaHandHoldingMedical, FaTablets, FaWheelchair,
} from 'react-icons/fa'

export const MEDICINE_CATEGORIES = [
  { id: 'prescription', name: 'Prescription Medicines', icon: FaHandHoldingMedical, desc: 'Dispensed against a valid doctor prescription' },
  { id: 'general', name: 'General Medicines', icon: FaPills, desc: 'Everyday health and wellness essentials' },
  { id: 'pain-relief', name: 'Pain Relief', icon: FaTablets, desc: 'Fast, effective relief for aches and pains' },
  { id: 'cold-fever', name: 'Cold & Fever', icon: FaHeadSideCough, desc: 'Relief from cold, cough, flu and fever' },
  { id: 'diabetes', name: 'Diabetes Care', icon: FaTint, desc: 'Glucose monitoring & diabetes management' },
  { id: 'heart-care', name: 'Heart Care', icon: FaHeartbeat, desc: 'Cardiac health and blood pressure support' },
  { id: 'skin-care', name: 'Skin Care', icon: FaSpa, desc: 'Dermatology and skincare formulations' },
  { id: 'hair-care', name: 'Hair Care', icon: FaSpa, desc: 'Hair fall control and scalp treatments' },
  { id: 'womens-health', name: "Women's Health", icon: FaVenus, desc: 'Specialised wellness for women' },
  { id: 'mens-health', name: "Men's Health", icon: FaMars, desc: 'Specialised wellness for men' },
  { id: 'children', name: "Children's Medicines", icon: FaChild, desc: 'Gentle, paediatrician-approved formulas' },
  { id: 'baby-care', name: 'Baby Care', icon: FaBaby, desc: 'Everything for your little one' },
  { id: 'vitamins', name: 'Vitamins', icon: FaCapsules, desc: 'Daily vitamins for complete nutrition' },
  { id: 'supplements', name: 'Supplements', icon: FaCapsules, desc: 'Nutritional and dietary supplements' },
  { id: 'ayurvedic', name: 'Ayurvedic Medicines', icon: FaLeaf, desc: 'Traditional Ayurvedic formulations' },
  { id: 'herbal', name: 'Herbal Products', icon: FaLeaf, desc: 'Natural, plant-based remedies' },
  { id: 'personal-care', name: 'Personal Care', icon: FaAllergies, desc: 'Hygiene and personal care essentials' },
  { id: 'medical-devices', name: 'Medical Devices', icon: FaStethoscope, desc: 'Diagnostic and monitoring equipment' },
]

export const HEALTH_PRODUCTS = [
  { id: 'protein', name: 'Protein Supplements', icon: FaCapsules },
  { id: 'multivitamins', name: 'Multivitamins', icon: FaTablets },
  { id: 'masks', name: 'Masks', icon: FaAllergies },
  { id: 'sanitizers', name: 'Sanitizers', icon: FaAllergies },
  { id: 'thermometers', name: 'Thermometers', icon: FaStethoscope },
  { id: 'bp-monitor', name: 'Blood Pressure Monitor', icon: FaHeartbeat },
  { id: 'glucometer', name: 'Glucometer', icon: FaTint },
  { id: 'nebulizer', name: 'Nebulizer', icon: FaStethoscope },
  { id: 'wheelchair', name: 'Wheelchair', icon: FaWheelchair },
  { id: 'walking-stick', name: 'Walking Stick', icon: FaWheelchair },
  { id: 'adult-diapers', name: 'Adult Diapers', icon: FaBaby },
]
