<script lang="ts" setup>
import { ref, computed } from "vue";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/vue/24/outline";
import CalendarWeekItem from "./CalendarWeekItem.vue";
import dayjs, { dayjsLocaleData, dayNumber } from "@/helpers/dayjs.config";

interface ICalendarWeekDayText {
  weekDay: string;
  day: number;
}

const monthText = computed(() => dayjsLocaleData.months()[month.value]);

const firstWeekDay = ref(dayjs().startOf("w"));

const modelDay = ref(dayjs());

/**
 * Week days
 */
const weekDays = computed<dayjs.Dayjs[]>(() => {
  const days: dayjs.Dayjs[] = [];
  let dayIterator = firstWeekDay.value;
  const firstDayOfNextWeek = dayIterator.endOf("w").add(1, "d");
  while (dayIterator.isBefore(firstDayOfNextWeek, "D")) {
    days.push(dayIterator);
    dayIterator = dayIterator.add(1, "d");
  }
  return days;
});

/**
 * Week days text for display
 */
const weekDaysText = computed<ICalendarWeekDayText[]>(() => {
  const daysText: ICalendarWeekDayText[] = [];
  for (const day of weekDays.value) {
    daysText.push({
      day: day.date(),
      weekDay: dayjsLocaleData.weekdaysMin()[dayNumber(day.day())],
    });
  }
  return daysText;
});

const month = computed(() => firstWeekDay.value.month());

/**
 * Methods
 */
const goNextWeek = () => {
  firstWeekDay.value = firstWeekDay.value.add(7, "d");
};

const goPreviousWeek = () => {
  firstWeekDay.value = firstWeekDay.value.subtract(7, "d");
};

const selectDay = (value: dayjs.Dayjs) => {
  modelDay.value = value;
};

const goToday = () => {
  modelDay.value = dayjs();
  firstWeekDay.value = dayjs().startOf("w");
};
</script>
<template>
  <div class="p-2">
    <!-- Calendar Header -->
    <div class="flex items-start">
      <CalendarIcon class="h-7 w-7 text-slate-400" />
      <div class="ml-2 flex grow items-center justify-between">
        <div class="text-xl font-semibold text-slate-700">{{ monthText }}</div>

        <div
          class="mx-3 cursor-pointer font-medium text-slate-700 hover:text-slate-500"
          @click="goToday"
        >
          Hoy
        </div>
      </div>
    </div>

    <!-- Calendar Days -->
    <div class="flex items-center space-x-1">
      <ChevronLeftIcon
        class="h-4 w-4 cursor-pointer text-slate-700 hover:text-slate-800"
        @click="goPreviousWeek"
      />
      <div class="mt-3 grid grow auto-cols-max grid-cols-7 gap-x-2 text-sm">
        <CalendarWeekItem
          v-for="(day, index) of weekDaysText"
          :key="`calendar-view-calendar-week-day-${index}`"
          class="cursor-pointer rounded-md py-2 text-center font-semibold"
          :active="weekDays[index].isSame(modelDay, 'D')"
          :is-today="weekDays[index].isSame(dayjs(), 'D')"
          @click="selectDay(weekDays[index])"
        >
          <template #day> {{ day.weekDay }}</template>
          <template #number> {{ day.day }} </template>
        </CalendarWeekItem>
      </div>
      <ChevronRightIcon
        class="h-4 w-4 cursor-pointer text-slate-700 hover:text-slate-800"
        @click="goNextWeek"
      />
    </div>

    <div class="mt-5 font-semibold text-slate-700">
      {{ modelDay.format("DD/MM/YYYY") }}
    </div>
  </div>
</template>
