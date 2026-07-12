import emailjs from '@emailjs/browser'

// Replace these with your own EmailJS credentials before deploying.
// Create a free account at https://www.emailjs.com/
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

export async function sendEmail(formData) {
  if (
    SERVICE_ID === 'YOUR_SERVICE_ID' ||
    TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
    PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
  ) {
    // Allow the UI/UX to be demoed even before EmailJS keys are configured.
    console.warn('EmailJS is not configured yet. Add your keys to a .env file.')
    return { status: 200, text: 'DEMO_MODE' }
  }
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, { publicKey: PUBLIC_KEY })
}
