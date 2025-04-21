import { format } from "date-fns"
import { enGB, es, ca } from "date-fns/locale"
const locales = { en: enGB, es, ca }

export const useDate = () => {
  return {
    humanDate: (date, locale) => {
      return format(date, 'EEEE, d LLLL', {
        locale: locales[locale],
      })
    },
    humanTime: (date, locale) => {
      return format(date, "HH:mm'h'", {
        locale: locales[locale],
      })
    }
  }
}