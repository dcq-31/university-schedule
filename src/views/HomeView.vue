<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { ROUTES_NAME } from "../router/names";
import CalendarWeek from "../components/calendar/CalendarWeek.vue";
</script>

<template>
  <div class="py-3 px-1">
    <main class="container mx-auto space-y-6">
      <!-- Hero Section -->
      <div class="pt-5 pb-2 px-4 text-center max-w-lg mx-auto">
        <div class="text-4xl  tracking-normal font-bold text-slate-800 leading-snug">
          Bienvenido al Horario de la FIE
          <span>&#9889</span>
        </div>
         <p class="mt-3 text-lg px-2 text-gray-500">Revisa y prepárate para las clases que tienes pronto en nuestra facultad. </p>
        
      </div>

      <!-- Teacher Information Section -->
      <div class="p-3">
        <div class="shadow-md p-3 rounded-md border max-w-md">
          <div class="text-xl font-semibold text-slate-700">
            ¿Eres profesor?
          </div>
          <div class="mt-2 text-base text-slate-500">
            Ingresa tu cuenta de usuario para tener acceso a la administración
            de nuestro sitio.
          </div>
           <RouterLink
              :to="{ name: ROUTES_NAME.LOGIN }"
              class="cursor-pointer mt-3 block font-medium text-primary transition-colors hover:text-primary-500"
              >Inicia Sesión</RouterLink
            >
        </div>
      </div>

      <!-- Calendar Section -->
      <div class="mx-auto max-w-xl py-5 px-2">
        <CalendarWeek />
      </div>

    </main>
  </div>
</template>
