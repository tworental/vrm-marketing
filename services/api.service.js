import emailjs from 'emailjs-com'

const API_URI = process.env.NUXT_ENV_API_URL

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

const safeEncodeData = data => Object.entries(data)
  .map(([key, value]) => [encodeURIComponent(key), encodeURIComponent(value)].join('='))
  .join('&')

export const demoRequest = data => emailjs.send('service_ga1noxh', 'demo_request', data, process.env.NUXT_ENV_EMAIL_JS_UID)

export const signupRequest = data => fetch(`${API_URI}/signup`, {
  body: safeEncodeData(data),
  method: 'POST',
  headers
})

export const checkCompanyRequest = data => fetch(`${API_URI}/validate?field=identifier`, {
  body: safeEncodeData(data),
  method: 'POST',
  headers
})
