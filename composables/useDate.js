import { format } from "date-fns"
import { enGB, es, ca } from "date-fns/locale"
const locales = { en: enGB, es, ca }

export const useDate = () => {
  return {
    humanDate: (date, locale) => {
      return format(date, 'EEEE, dd LLLL', {
        locale: locales[locale],
      })
    },
    humanTime: (date, locale) => {
      return format(date, "HH:mm'h'", {
        locale: locales[locale],
      })
    },
    pressDate: (date, locale) => {
      return format(date, 'dd LLLL y', {
        locale: locales[locale],
      })
    },
  }
}