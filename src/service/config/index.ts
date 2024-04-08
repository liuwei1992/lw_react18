let BASE_URL = ''

if (import.meta.env.PROD) {
  BASE_URL = ''
} else {
  BASE_URL = ''
}

export { BASE_URL }

export const TIME_OUT = 100000
