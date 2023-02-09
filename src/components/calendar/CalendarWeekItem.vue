<script lang="ts" setup>
import { computed } from "vue";
interface IPropsCalendarWeekItem {
  active: boolean;
  isToday: boolean;
}
const props = defineProps<IPropsCalendarWeekItem>();

const dayElementClass = computed(() => {
  return [props.active ? "bg-primary-400" : "hover:bg-primary-50"];
});

const dayLabelElementClass = computed(() => {
  const list: string[] = [];
  if (props.active) {
    list.push("text-white");
  } else if (props.isToday) {
    list.push("text-primary-500");
  } else {
    list.push("text-slate-300 group-hover:text-slate-400");
  }
  return list;
});

const numberDayElementClass = computed(() => {
  const list: string[] = [];
  if (props.active) {
    list.push("text-white");
  } else if (props.isToday) {
    list.push("text-primary-500");
  } else {
    list.push("text-slate-700");
  }
  return list;
});
</script>

<template>
  <div class="group" :class="dayElementClass">
    <div :class="dayLabelElementClass">
      <slot name="day" />
    </div>
    <div class="mt-1 font-semibold" :class="numberDayElementClass">
      <slot name="number" />
    </div>
  </div>
</template>
