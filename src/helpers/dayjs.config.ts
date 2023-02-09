import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";

const WEEK_DAYS_MIN = ["L", "M", "M", "J", "V", "S", "D"];
const WEEK_DAYS_SHORT = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const WEEK_DAYS_LARGE = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Domingo",
];
const MONTHS_LARGE = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const MONTHS_SHORT = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

const LOCALE_OBJECT: Record<string, unknown> = {
  name: "date-config",
  months: MONTHS_LARGE,
  monthsShort: MONTHS_SHORT,
  weekdays: WEEK_DAYS_LARGE,
  weekdaysShort: WEEK_DAYS_SHORT,
  weekdaysMin: WEEK_DAYS_MIN,
  weekStart: 1,
  yearStart: 4,
};

/**
 * Helper functions
 */

export const dayNumber = (day: number) => (day == 0 ? 6 : day - 1);

/**
 * Configure locale
 */

dayjs.locale("cuba", LOCALE_OBJECT);

/**
 * Plugin that supply locale data
 */
dayjs.extend(localeData);

export const dayjsLocaleData = dayjs().localeData();
export default dayjs;
