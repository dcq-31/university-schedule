<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { ROUTES_NAME } from "../router/names";
import { CalendarDaysIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="p-2">
    <main class="container mx-auto space-y-6">
      <!-- Teacher Information Section -->
      <div class="p-3">
        <div>
          <img src="/teacher.svg" alt="teacher" class="mx-auto h-full w-60" />
        </div>
        <div class="mt-4">
          <div class="text-2xl font-semibold text-slate-700">
            ¿Eres profesor?
          </div>
          <div class="mt-2 text-base text-slate-500">
            Ingresa tu cuenta de usuario para tener acceso a la administración
            de nuestro sitio.
          </div>

          <RouterLink
            :to="{ name: ROUTES_NAME.LOGIN }"
            class="btn btn-primary-outline mt-4 block w-fit text-sm"
          >
            Inicia sesión
          </RouterLink>
        </div>
      </div>
      <!-- / Teacher Information Section -->

      <!-- Tools Section -->
      <div class="px-2">
        <div class="text-center text-3xl font-semibold text-slate-700">
          Herramientas
        </div>

        <div class="mt-4 space-y-3">
          <div class="group p-2 text-center">
            <div
              class="mx-auto w-fit rounded-full bg-primary-500 p-6 shadow-xl"
            >
              <CalendarDaysIcon class="h-12 w-12 text-white" />
            </div>
            <div>
              <div
                class="mt-2 text-xl font-medium text-slate-700 transition-colors group-hover:text-primary-500"
              >
                Horario de Clases
              </div>
              <div class="mt-1 text-slate-500">
                ¿No sabes que clases tocan hoy o cuando tienes exámen? Revisa
                nuestro calendario y entérate de las asignaturas que darás en
                toda la semana, días feriados y más.
              </div>
              <RouterLink
                :to="{ name: ROUTES_NAME.CALENDAR }"
                class="btn btn-primary mx-auto mt-2 block w-fit text-sm"
              >
                Ver Horario
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <!-- / Tools Section -->
    </main>
  </div>
</template>
